import React from 'react';
import { View, Text, TextInput, Image, StyleSheet, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
import { FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons';
import styleInicio from '../../styles/inicio.js'

export default function Inicio() {
  return (
    <ScrollView style={styleInicio.container} contentContainerStyle={{ paddingTop: StatusBar.currentHeight || 0 }}>
    
      {/* Cabeçalho do Menu */}
      <View style={styleInicio.cabecalho}>
        <Text style={styleInicio.tituloPagina}>Início</Text>
        <Ionicons name="notifications-outline" size={24} color="#3C5C9F" />
      </View>

      {/* Barra de Pesquisa */}
      <View style={styleInicio.containerPesquisa}>
        <TextInput
          style={styleInicio.inputPesquisa}
          placeholder="Pesquisar"
          placeholderTextColor="#3C5C9F"
        />
      </View>

      {/* Mensagem de Boas-Vindas */}
      <View style={styleInicio.containerBoasVindas}>
        <Text style={styleInicio.textoBoasVindas}>Bem-vindo!</Text>
        <Image
          source={require('../../img/bem-vindo.png')} // Atualize o caminho da imagem conforme necessário
          style={styleInicio.imagemBoasVindas}
        />
      </View>

      {/* Categorias */}
      <View style={styleInicio.containerCabecalhoSecao}>
        <Text style={styleInicio.tituloSecao}>Categorias</Text>
        <TouchableOpacity>
          <Text style={styleInicio.textoVerTudo}>Ver Tudo</Text>
        </TouchableOpacity>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styleInicio.containerCategorias}>
        <TouchableOpacity style={styleInicio.itemCategoria}>
          <Ionicons name="shirt-outline" size={40} color="#3C5C9F" />
          <Text style={styleInicio.textoCategoria}>Camisas</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styleInicio.itemCategoria}>
        <Ionicons name="woman-outline" size={40} color="#3C5C9F" />
          <Text style={styleInicio.textoCategoria}>Vestidos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styleInicio.itemCategoria}>
        <Ionicons name="footsteps-sharp" size={40} color="#3C5C9F" />
          <Text style={styleInicio.textoCategoria}>Calçados</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styleInicio.itemCategoria}>
        <Ionicons name="watch-outline" size={40} color="#3C5C9F" />
          <Text style={styleInicio.textoCategoria}>Acessórios</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styleInicio.itemCategoria}>
        <Ionicons name="bag-outline" size={40} color="#3C5C9F" />
          <Text style={styleInicio.textoCategoria}>Bolsas</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styleInicio.itemCategoria}>
        <Ionicons name="laptop-outline" size={40} color="#3C5C9F" />
          <Text style={styleInicio.textoCategoria}>Eletrônicos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styleInicio.itemCategoria}>
        <Ionicons name="pizza-outline" size={40} color="#3C5C9F" />
          <Text style={styleInicio.textoCategoria}>Alimentos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styleInicio.itemCategoria}>
        <Ionicons name="football-outline" size={40} color="#3C5C9F" />
          <Text style={styleInicio.textoCategoria}>Esportes</Text>
        </TouchableOpacity>
       
      </ScrollView>

      {/* Roupas */}
      <View style={styleInicio.containerCabecalhoSecao}>

        <Text style={styleInicio.tituloSecao}>Roupas</Text>
        <TouchableOpacity>
          <Text style={styleInicio.textoVerTudo}>Ver Tudo</Text>
        </TouchableOpacity>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styleInicio.containerProdutos}>

        <View style={styleInicio.itemProduto}>
          <Image
            source={require('../../img/roupa1.png')} 
            style={styleInicio.imagemProduto}
          />
          <View style={styleInicio.infoProduto}>
            <Text style={styleInicio.nomeProduto}>Vestido Midi</Text>
            <Text style={styleInicio.precoProduto}>R$ 120,00</Text>
            <Text style={styleInicio.descricaoProduto}>Chegará grátis quinta-feira</Text>
          </View>       
        </View>
       
        <View style={styleInicio.itemProduto}>
          <Image
            source={require('../../img/roupa2.png')} 
            style={styleInicio.imagemProduto}
          />
          <View style={styleInicio.infoProduto}>
            <Text style={styleInicio.nomeProduto}>Calça Moletom</Text>
            <Text style={styleInicio.precoProduto}>R$ 90,00</Text>
            <Text style={styleInicio.descricaoProduto}>Chegará grátis segunda-feira</Text>
          </View>       
        </View>

        <View style={styleInicio.itemProduto}>
          <Image
            source={require('../../img/roupa3.png')} 
            style={styleInicio.imagemProduto}
          />
          <View style={styleInicio.infoProduto}>
            <Text style={styleInicio.nomeProduto}>Calça Jeans</Text>
            <Text style={styleInicio.precoProduto}>R$ 45,00</Text>
            <Text style={styleInicio.descricaoProduto}>Chegará grátis amanhã</Text>
          </View>       
        </View>

        <View style={styleInicio.itemProduto}>
          <Image
            source={require('../../img/roupa4.png')} 
            style={styleInicio.imagemProduto}
          />
          <View style={styleInicio.infoProduto}>
            <Text style={styleInicio.nomeProduto}>Produto 1</Text>
            <Text style={styleInicio.precoProduto}>R$ 100,00</Text>
            <Text style={styleInicio.descricaoProduto}>Chegará grátis quinta-feira</Text>
          </View>       
        </View>

        <View style={styleInicio.itemProduto}>
          <Image
            source={require('../../img/roupa5.png')} 
            style={styleInicio.imagemProduto}
          />
          <View style={styleInicio.infoProduto}>
            <Text style={styleInicio.nomeProduto}>Produto 1</Text>
            <Text style={styleInicio.precoProduto}>R$ 100,00</Text>
            <Text style={styleInicio.descricaoProduto}>Chegará grátis quinta-feira</Text>
          </View>       
        </View>

        <View style={styleInicio.itemProduto}>
          <Image
            source={require('../../img/roupa6.png')} 
            style={styleInicio.imagemProduto}
          />
          <View style={styleInicio.infoProduto}>
            <Text style={styleInicio.nomeProduto}>Produto 1</Text>
            <Text style={styleInicio.precoProduto}>R$ 100,00</Text>
            <Text style={styleInicio.descricaoProduto}>Chegará grátis quinta-feira</Text>
          </View>       
        </View>

        <View style={styleInicio.itemProduto}>
          <Image
            source={require('../../img/roupa7.png')} 
            style={styleInicio.imagemProduto}
          />
          <View style={styleInicio.infoProduto}>
            <Text style={styleInicio.nomeProduto}>Produto 1</Text>
            <Text style={styleInicio.precoProduto}>R$ 100,00</Text>
            <Text style={styleInicio.descricaoProduto}>Chegará grátis quinta-feira</Text>
          </View>       
        </View>
      </ScrollView>

  {/* Produtos */}

      <View style={styleInicio.containerCabecalhoSecao}>

<Text style={styleInicio.tituloSecao}>Acessórios</Text>
<TouchableOpacity>
  <Text style={styleInicio.textoVerTudo}>Ver Tudo</Text>
</TouchableOpacity>
</View>

<ScrollView horizontal showsHorizontalScrollIndicator={false} style={styleInicio.containerProdutos}>

<View style={styleInicio.itemProduto}>
  <Image
    source={require('../../img/bem-vindo.png')} 
    style={styleInicio.imagemProduto}
  />
  <View style={styleInicio.infoProduto}>
    <Text style={styleInicio.nomeProduto}>Produto 1</Text>
    <Text style={styleInicio.precoProduto}>R$ 100,00</Text>
    <Text style={styleInicio.descricaoProduto}>Chegará grátis quinta-feira</Text>
  </View>       
</View>

<View style={styleInicio.itemProduto}>
  <Image
    source={require('../../img/bem-vindo.png')} 
    style={styleInicio.imagemProduto}
  />
  <View style={styleInicio.infoProduto}>
    <Text style={styleInicio.nomeProduto}>Produto 1</Text>
    <Text style={styleInicio.precoProduto}>R$ 100,00</Text>
    <Text style={styleInicio.descricaoProduto}>Chegará grátis quinta-feira</Text>
  </View>       
</View>

<View style={styleInicio.itemProduto}>
  <Image
    source={require('../../img/bem-vindo.png')} 
    style={styleInicio.imagemProduto}
  />
  <View style={styleInicio.infoProduto}>
    <Text style={styleInicio.nomeProduto}>Produto 1</Text>
    <Text style={styleInicio.precoProduto}>R$ 100,00</Text>
    <Text style={styleInicio.descricaoProduto}>Chegará grátis quinta-feira</Text>
  </View>       
</View>

<View style={styleInicio.itemProduto}>
  <Image
    source={require('../../img/bem-vindo.png')} 
    style={styleInicio.imagemProduto}
  />
  <View style={styleInicio.infoProduto}>
    <Text style={styleInicio.nomeProduto}>Produto 1</Text>
    <Text style={styleInicio.precoProduto}>R$ 100,00</Text>
    <Text style={styleInicio.descricaoProduto}>Chegará grátis quinta-feira</Text>
  </View>       
</View>

<View style={styleInicio.itemProduto}>
  <Image
    source={require('../../img/bem-vindo.png')} 
    style={styleInicio.imagemProduto}
  />
  <View style={styleInicio.infoProduto}>
    <Text style={styleInicio.nomeProduto}>Produto 1</Text>
    <Text style={styleInicio.precoProduto}>R$ 100,00</Text>
    <Text style={styleInicio.descricaoProduto}>Chegará grátis quinta-feira</Text>
  </View>       
</View>

<View style={styleInicio.itemProduto}>
  <Image
    source={require('../../img/bem-vindo.png')} 
    style={styleInicio.imagemProduto}
  />
  <View style={styleInicio.infoProduto}>
    <Text style={styleInicio.nomeProduto}>Produto 1</Text>
    <Text style={styleInicio.precoProduto}>R$ 100,00</Text>
    <Text style={styleInicio.descricaoProduto}>Chegará grátis quinta-feira</Text>
  </View>       
</View>

<View style={styleInicio.itemProduto}>
  <Image
    source={require('../../img/bem-vindo.png')} 
    style={styleInicio.imagemProduto}
  />
  <View style={styleInicio.infoProduto}>
    <Text style={styleInicio.nomeProduto}>Produto 1</Text>
    <Text style={styleInicio.precoProduto}>R$ 100,00</Text>
    <Text style={styleInicio.descricaoProduto}>Chegará grátis quinta-feira</Text>
  </View>       
</View>
</ScrollView>


 {/* Produtos */}

 <View style={styleInicio.containerCabecalhoSecao}>

<Text style={styleInicio.tituloSecao}>Produtos</Text>
<TouchableOpacity>
  <Text style={styleInicio.textoVerTudo}>Ver Tudo</Text>
</TouchableOpacity>
</View>

<ScrollView horizontal showsHorizontalScrollIndicator={false} style={styleInicio.containerProdutos}>

<View style={styleInicio.itemProduto}>
  <Image
    source={require('../../img/bem-vindo.png')} 
    style={styleInicio.imagemProduto}
  />
  <View style={styleInicio.infoProduto}>
    <Text style={styleInicio.nomeProduto}>Produto 1</Text>
    <Text style={styleInicio.precoProduto}>R$ 100,00</Text>
    <Text style={styleInicio.descricaoProduto}>Chegará grátis quinta-feira</Text>
  </View>       
</View>

<View style={styleInicio.itemProduto}>
  <Image
    source={require('../../img/bem-vindo.png')} 
    style={styleInicio.imagemProduto}
  />
  <View style={styleInicio.infoProduto}>
    <Text style={styleInicio.nomeProduto}>Produto 1</Text>
    <Text style={styleInicio.precoProduto}>R$ 100,00</Text>
    <Text style={styleInicio.descricaoProduto}>Chegará grátis quinta-feira</Text>
  </View>       
</View>

<View style={styleInicio.itemProduto}>
  <Image
    source={require('../../img/bem-vindo.png')} 
    style={styleInicio.imagemProduto}
  />
  <View style={styleInicio.infoProduto}>
    <Text style={styleInicio.nomeProduto}>Produto 1</Text>
    <Text style={styleInicio.precoProduto}>R$ 100,00</Text>
    <Text style={styleInicio.descricaoProduto}>Chegará grátis quinta-feira</Text>
  </View>       
</View>

<View style={styleInicio.itemProduto}>
  <Image
    source={require('../../img/bem-vindo.png')} 
    style={styleInicio.imagemProduto}
  />
  <View style={styleInicio.infoProduto}>
    <Text style={styleInicio.nomeProduto}>Produto 1</Text>
    <Text style={styleInicio.precoProduto}>R$ 100,00</Text>
    <Text style={styleInicio.descricaoProduto}>Chegará grátis quinta-feira</Text>
  </View>       
</View>

<View style={styleInicio.itemProduto}>
  <Image
    source={require('../../img/bem-vindo.png')} 
    style={styleInicio.imagemProduto}
  />
  <View style={styleInicio.infoProduto}>
    <Text style={styleInicio.nomeProduto}>Produto 1</Text>
    <Text style={styleInicio.precoProduto}>R$ 100,00</Text>
    <Text style={styleInicio.descricaoProduto}>Chegará grátis quinta-feira</Text>
  </View>       
</View>

<View style={styleInicio.itemProduto}>
  <Image
    source={require('../../img/bem-vindo.png')} 
    style={styleInicio.imagemProduto}
  />
  <View style={styleInicio.infoProduto}>
    <Text style={styleInicio.nomeProduto}>Produto 1</Text>
    <Text style={styleInicio.precoProduto}>R$ 100,00</Text>
    <Text style={styleInicio.descricaoProduto}>Chegará grátis quinta-feira</Text>
  </View>       
</View>

<View style={styleInicio.itemProduto}>
  <Image
    source={require('../../img/bem-vindo.png')} 
    style={styleInicio.imagemProduto}
  />
  <View style={styleInicio.infoProduto}>
    <Text style={styleInicio.nomeProduto}>Produto 1</Text>
    <Text style={styleInicio.precoProduto}>R$ 100,00</Text>
    <Text style={styleInicio.descricaoProduto}>Chegará grátis quinta-feira</Text>
  </View>       
</View>
</ScrollView>


 {/* Produtos */}

 <View style={styleInicio.containerCabecalhoSecao}>

<Text style={styleInicio.tituloSecao}>Produtos</Text>
<TouchableOpacity>
  <Text style={styleInicio.textoVerTudo}>Ver Tudo</Text>
</TouchableOpacity>
</View>

<ScrollView horizontal showsHorizontalScrollIndicator={false} style={styleInicio.containerProdutos}>

<View style={styleInicio.itemProduto}>
  <Image
    source={require('../../img/bem-vindo.png')} 
    style={styleInicio.imagemProduto}
  />
  <View style={styleInicio.infoProduto}>
    <Text style={styleInicio.nomeProduto}>Produto 1</Text>
    <Text style={styleInicio.precoProduto}>R$ 100,00</Text>
    <Text style={styleInicio.descricaoProduto}>Chegará grátis quinta-feira</Text>
  </View>       
</View>

<View style={styleInicio.itemProduto}>
  <Image
    source={require('../../img/bem-vindo.png')} 
    style={styleInicio.imagemProduto}
  />
  <View style={styleInicio.infoProduto}>
    <Text style={styleInicio.nomeProduto}>Produto 1</Text>
    <Text style={styleInicio.precoProduto}>R$ 100,00</Text>
    <Text style={styleInicio.descricaoProduto}>Chegará grátis quinta-feira</Text>
  </View>       
</View>

<View style={styleInicio.itemProduto}>
  <Image
    source={require('../../img/bem-vindo.png')} 
    style={styleInicio.imagemProduto}
  />
  <View style={styleInicio.infoProduto}>
    <Text style={styleInicio.nomeProduto}>Produto 1</Text>
    <Text style={styleInicio.precoProduto}>R$ 100,00</Text>
    <Text style={styleInicio.descricaoProduto}>Chegará grátis quinta-feira</Text>
  </View>       
</View>

<View style={styleInicio.itemProduto}>
  <Image
    source={require('../../img/bem-vindo.png')} 
    style={styleInicio.imagemProduto}
  />
  <View style={styleInicio.infoProduto}>
    <Text style={styleInicio.nomeProduto}>Produto 1</Text>
    <Text style={styleInicio.precoProduto}>R$ 100,00</Text>
    <Text style={styleInicio.descricaoProduto}>Chegará grátis quinta-feira</Text>
  </View>       
</View>

<View style={styleInicio.itemProduto}>
  <Image
    source={require('../../img/bem-vindo.png')} 
    style={styleInicio.imagemProduto}
  />
  <View style={styleInicio.infoProduto}>
    <Text style={styleInicio.nomeProduto}>Produto 1</Text>
    <Text style={styleInicio.precoProduto}>R$ 100,00</Text>
    <Text style={styleInicio.descricaoProduto}>Chegará grátis quinta-feira</Text>
  </View>       
</View>

<View style={styleInicio.itemProduto}>
  <Image
    source={require('../../img/bem-vindo.png')} 
    style={styleInicio.imagemProduto}
  />
  <View style={styleInicio.infoProduto}>
    <Text style={styleInicio.nomeProduto}>Produto 1</Text>
    <Text style={styleInicio.precoProduto}>R$ 100,00</Text>
    <Text style={styleInicio.descricaoProduto}>Chegará grátis quinta-feira</Text>
  </View>       
</View>

<View style={styleInicio.itemProduto}>
  <Image
    source={require('../../img/bem-vindo.png')} 
    style={styleInicio.imagemProduto}
  />
  <View style={styleInicio.infoProduto}>
    <Text style={styleInicio.nomeProduto}>Produto 1</Text>
    <Text style={styleInicio.precoProduto}>R$ 100,00</Text>
    <Text style={styleInicio.descricaoProduto}>Chegará grátis quinta-feira</Text>
  </View>       
</View>
</ScrollView>


 {/* Produtos */}

 <View style={styleInicio.containerCabecalhoSecao}>

<Text style={styleInicio.tituloSecao}>Produtos</Text>
<TouchableOpacity>
  <Text style={styleInicio.textoVerTudo}>Ver Tudo</Text>
</TouchableOpacity>
</View>

<ScrollView horizontal showsHorizontalScrollIndicator={false} style={styleInicio.containerProdutos}>

<View style={styleInicio.itemProduto}>
  <Image
    source={require('../../img/bem-vindo.png')} 
    style={styleInicio.imagemProduto}
  />
  <View style={styleInicio.infoProduto}>
    <Text style={styleInicio.nomeProduto}>Produto 1</Text>
    <Text style={styleInicio.precoProduto}>R$ 100,00</Text>
    <Text style={styleInicio.descricaoProduto}>Chegará grátis quinta-feira</Text>
  </View>       
</View>

<View style={styleInicio.itemProduto}>
  <Image
    source={require('../../img/bem-vindo.png')} 
    style={styleInicio.imagemProduto}
  />
  <View style={styleInicio.infoProduto}>
    <Text style={styleInicio.nomeProduto}>Produto 1</Text>
    <Text style={styleInicio.precoProduto}>R$ 100,00</Text>
    <Text style={styleInicio.descricaoProduto}>Chegará grátis quinta-feira</Text>
  </View>       
</View>

<View style={styleInicio.itemProduto}>
  <Image
    source={require('../../img/bem-vindo.png')} 
    style={styleInicio.imagemProduto}
  />
  <View style={styleInicio.infoProduto}>
    <Text style={styleInicio.nomeProduto}>Produto 1</Text>
    <Text style={styleInicio.precoProduto}>R$ 100,00</Text>
    <Text style={styleInicio.descricaoProduto}>Chegará grátis quinta-feira</Text>
  </View>       
</View>

<View style={styleInicio.itemProduto}>
  <Image
    source={require('../../img/bem-vindo.png')} 
    style={styleInicio.imagemProduto}
  />
  <View style={styleInicio.infoProduto}>
    <Text style={styleInicio.nomeProduto}>Produto 1</Text>
    <Text style={styleInicio.precoProduto}>R$ 100,00</Text>
    <Text style={styleInicio.descricaoProduto}>Chegará grátis quinta-feira</Text>
  </View>       
</View>

<View style={styleInicio.itemProduto}>
  <Image
    source={require('../../img/bem-vindo.png')} 
    style={styleInicio.imagemProduto}
  />
  <View style={styleInicio.infoProduto}>
    <Text style={styleInicio.nomeProduto}>Produto 1</Text>
    <Text style={styleInicio.precoProduto}>R$ 100,00</Text>
    <Text style={styleInicio.descricaoProduto}>Chegará grátis quinta-feira</Text>
  </View>       
</View>

<View style={styleInicio.itemProduto}>
  <Image
    source={require('../../img/bem-vindo.png')} 
    style={styleInicio.imagemProduto}
  />
  <View style={styleInicio.infoProduto}>
    <Text style={styleInicio.nomeProduto}>Produto 1</Text>
    <Text style={styleInicio.precoProduto}>R$ 100,00</Text>
    <Text style={styleInicio.descricaoProduto}>Chegará grátis quinta-feira</Text>
  </View>       
</View>

<View style={styleInicio.itemProduto}>
  <Image
    source={require('../../img/bem-vindo.png')} 
    style={styleInicio.imagemProduto}
  />
  <View style={styleInicio.infoProduto}>
    <Text style={styleInicio.nomeProduto}>Produto 1</Text>
    <Text style={styleInicio.precoProduto}>R$ 100,00</Text>
    <Text style={styleInicio.descricaoProduto}>Chegará grátis quinta-feira</Text>
  </View>       
</View>
</ScrollView>


    </ScrollView>

    
  );
}

