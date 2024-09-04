import {StyleSheet} from 'react-native';

const styleInicio = StyleSheet.create({
   
    container: {
        flex: 1,
        backgroundColor: '#3C5C9F10',
        padding: 10,
        
      },
      cabecalho: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 15,
      },
      espacadorCabecalho: {
        flex: 1, // Espaço vazio que ajuda a centralizar o título
      },
      tituloPagina: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center', // Centraliza o título
        flex: 1,
        color:'#3C5C9F',
      },
      containerPesquisa: {
        marginBottom: 20,
      },
      inputPesquisa: {
        height: 40,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
      },
      containerBoasVindas: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        height: 150,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#3C5C9F',
        marginBottom: 20,
      },
      textoBoasVindas: {
        fontSize: 18,
        fontWeight: 'bold',
        color:'#3C5C9F',
        marginRight: 10,
        flex: 1,
      },
      imagemBoasVindas: {
        width: 90,
        height: 90,
      },
      containerCabecalhoSecao: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
      },
      tituloSecao: {
        fontSize: 20,
        fontWeight: 'bold',
        color:'#3C5C9F',
        marginTop: 18,
      },
      textoVerTudo: {
        fontSize: 14,
        color: '#3C5C9F',
      },
      containerCategorias: {
        flexDirection: 'row',
        marginBottom: 20,
      },
      itemCategoria: {
        width: 80,
        alignItems: 'center',
        marginRight: 15,
        paddingVertical: 25,
        borderRadius: 20,
        backgroundColor: '#3C5C9F10',
      },
      textoCategoria: {
        marginTop: 5,
        fontSize: 14,
        color:'#3C5C9F',
      },
      containerProdutos: {
        flexDirection: 'row',
        
      },

      itemProduto: {
        width: 150,
        marginRight: 15,
       paddingBottom: 15,
       borderWidth: 1, // Adiciona a borda
       borderColor: '#3C5C9F',
        backgroundColor: '#fff',
        borderRadius: 10,
       
      
      },
      imagemProduto: {
        width: 148,
        height: 100,
        borderRadius: 10,
      },
      infoProduto: {
        marginTop: 10,
        alignItems: 'flex-start',
        paddingLeft: 7,
      },
      nomeProduto: {
        fontSize: 18,
        fontWeight: 'bold',
      },
      precoProduto: {
        fontSize: 16,
        color: '#4CAF50',
      },
      descricaoProduto: {
        fontSize: 14,
        color: '#666',
      },
    });
    

export default styleInicio;