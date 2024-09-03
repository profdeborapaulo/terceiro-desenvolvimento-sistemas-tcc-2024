// Inclusão das bibliotecas necessárias
#include "esp_camera.h" // Biblioteca da câmera ESP32
#include "soc/soc.h" // Biblioteca para configurações do sistema no ESP32
#include "soc/rtc_cntl_reg.h" // Biblioteca para controle do RTC no ESP32
#include "quirc.h" // Biblioteca para decodificação de QR Code
#include <WiFi.h> // Biblioteca para conexão com Wi-Fi
#include "esp_http_server.h" // Biblioteca para criar o servidor HTTP

TaskHandle_t QRCodeReader_Task; // Declaração de uma tarefa para leitura de QR Code

// Define o modelo da câmera do ESP32
#define CAMERA_MODEL_AI_THINKER

#if defined(CAMERA_MODEL_AI_THINKER)
#define PWDN_GPIO_NUM     32
#define RESET_GPIO_NUM    -1
#define XCLK_GPIO_NUM      0
#define SIOD_GPIO_NUM     26
#define SIOC_GPIO_NUM     27
#define Y9_GPIO_NUM       35
#define Y8_GPIO_NUM       34
#define Y7_GPIO_NUM       39
#define Y6_GPIO_NUM       36
#define Y5_GPIO_NUM       21
#define Y4_GPIO_NUM       19
#define Y3_GPIO_NUM       18
#define Y2_GPIO_NUM        5
#define VSYNC_GPIO_NUM    25
#define HREF_GPIO_NUM     23
#define PCLK_GPIO_NUM     22

#else
#error "Camera model not selected" // Mensagem de erro se o modelo da câmera não for selecionado
#endif

// SSID e senha para conexão com o Wi-Fi
const char* ssid = "***";
const char* password = "*****";

// Estruturas para armazenamento dos dados do QR Code
struct QRCodeData {
  bool valid; // Indica se o QR Code é válido
  int dataType; // Tipo de dado contido no QR Code
  uint8_t payload[1024]; // Buffer para armazenar o conteúdo do QR Code
  int payloadLen; // Comprimento dos dados no QR Code
};

// Variáveis para a decodificação do QR Code
struct quirc *q = NULL;
uint8_t *image = NULL;
camera_fb_t * fb = NULL;
struct quirc_code code;
struct quirc_data data;
quirc_decode_error_t err;
struct QRCodeData qrCodeData;
String QRCodeResult = "";

// Prototipagem da função de leitura de QR Code
void QRCodeReader(void * pvParameters);

// Função para capturar e processar a imagem do QR Code
void dumpData(const struct quirc_data *data);

void setup() {
  WRITE_PERI_REG(RTC_CNTL_BROWN_OUT_REG, 0); // Desabilita o detector de brownout (queda de tensão)

  Serial.begin(115200); // Inicializa a comunicação serial
  Serial.println("Monitor iniciado");
  delay(3000); // Aguarda 3 segundos
  Serial.setDebugOutput(true); // Habilita a saída de depuração
  Serial.println();

  Serial.println("Começando configuração e instalação da câmera");

  // Configuração da câmera
  camera_config_t config;
  config.ledc_channel = LEDC_CHANNEL_0;
  config.ledc_timer = LEDC_TIMER_0;
  config.pin_d0 = Y2_GPIO_NUM;
  config.pin_d1 = Y3_GPIO_NUM;
  config.pin_d2 = Y4_GPIO_NUM;
  config.pin_d3 = Y5_GPIO_NUM;
  config.pin_d4 = Y6_GPIO_NUM;
  config.pin_d5 = Y7_GPIO_NUM;
  config.pin_d6 = Y8_GPIO_NUM;
  config.pin_d7 = Y9_GPIO_NUM;
  config.pin_xclk = XCLK_GPIO_NUM;
  config.pin_pclk = PCLK_GPIO_NUM;
  config.pin_vsync = VSYNC_GPIO_NUM;
  config.pin_href = HREF_GPIO_NUM;
  config.pin_sscb_sda = SIOD_GPIO_NUM;
  config.pin_sscb_scl = SIOC_GPIO_NUM;
  config.pin_pwdn = PWDN_GPIO_NUM;
  config.pin_reset = RESET_GPIO_NUM;
  config.xclk_freq_hz = 10000000; // Frequência do clock da câmera
  config.pixel_format = PIXFORMAT_GRAYSCALE; // Formato de pixel da imagem (escala de cinza)
  config.frame_size = FRAMESIZE_QVGA; // Tamanho do frame (QVGA)
  
  config.jpeg_quality = 15; // Qualidade da imagem JPEG
  config.fb_count = 1; // Número de buffers de frame

  // Inicializa a câmera e verifica se houve erro
  esp_err_t err = esp_camera_init(&config);
  if (err != ESP_OK) {
    Serial.printf("Camera falhou com o erro: 0x%x", err);
    delay(5000);
    ESP.restart(); // Reinicia o ESP32 em caso de falha
  }

  Serial.println("Configuração e inicialização da câmera bem-sucedida");

  // Conexão Wi-Fi (comentada)
//   WiFi.begin(ssid, password);
//   while (WiFi.status() != WL_CONNECTED) {
//     delay(500);
//     Serial.print(".");
//   }
//   Serial.println("");
//   Serial.println("WiFi connected");

  // Inicia o servidor da câmera (comentado)
//   startCameraServer();
//   Serial.print("Acesse a câmera em: http://");
//   Serial.print(WiFi.localIP());
//   Serial.println("/");

  // Inicia a tarefa de leitura do QR Code
  xTaskCreatePinnedToCore(
    QRCodeReader, // Nome da função de leitura
    "QRCodeReader_Task", // Nome da tarefa
    10000, // Tamanho da pilha da tarefa
    NULL, // Parâmetros passados para a tarefa
    1, // Prioridade da tarefa
    &QRCodeReader_Task, // Handle da tarefa
    0); // Núcleo em que a tarefa será executada
}

void loop() {
  // Nada no loop principal
  delay(1);
}

// Tarefa para ler QR codes
void QRCodeReader(void * pvParameters) {
  Serial.println("QRCodeReader está pronto");
  Serial.print("QRCodeReader Rodando");
  Serial.println(xPortGetCoreID());
  Serial.println();

  while(1) {
    q = quirc_new(); // Cria um novo objeto quirc
    if (q == NULL) {
      Serial.print("Não foi possível criar objeto quirc\r\n");
      delay(5000);
      continue; // Se falhar, aguarda e tenta novamente
    }

    fb = esp_camera_fb_get(); // Captura uma imagem da câmera
    if (!fb) {
      Serial.println("Erro ao capturar a imagem");
      delay(5000);
      continue;
    }

    quirc_resize(q, fb->width, fb->height); // Redimensiona o objeto quirc para o tamanho da imagem
    image = quirc_begin(q, NULL, NULL); // Inicia o processamento da imagem
    memcpy(image, fb->buf, fb->len); // Copia os dados da imagem para o buffer
    quirc_end(q); // Finaliza o processamento

    int count = quirc_count(q); // Conta quantos QR Codes foram detectados
    if (count > 0) {
      quirc_extract(q, 0, &code); // Extrai o primeiro QR Code
      err = quirc_decode(&code, &data); // Decodifica o QR Code

      if (err) {
        Serial.println("Decodificação FALHOU");
        QRCodeResult = "Decoding FAILED"; // Se falhar, registra a falha
      } else {
        Serial.printf("Decodificação bem-sucedida:\n");
        dumpData(&data); // Se bem-sucedida, processa os dados do QR Code
      }
      Serial.println();
    }

    esp_camera_fb_return(fb); // Devolve o frame buffer à câmera
    fb = NULL; // Limpa o buffer
    image = NULL; // Limpa a imagem
    quirc_destroy(q); // Destroi o objeto quirc
  }
}

// Função para processar os dados do QR Code
void dumpData(const struct quirc_data *data) {
  Serial.printf("Versão: %d\n", data->version); // Exibe a versão do QR Code
  Serial.printf("Nível ECC: %c\n", "MLHQ"[data->ecc_level]); // Exibe o nível de correção de erros
  Serial.printf("Máscara: %d\n", data->mask); // Exibe a máscara do QR Code
  Serial.printf("Comprimento: %d\n", data->payload_len); // Exibe o comprimento dos dados
  Serial.printf("Dados: %s\n", data->payload); // Exibe os dados do QR Code

  QRCodeResult = (const char *)data->payload; // Armazena os dados do QR Code em uma string
}
