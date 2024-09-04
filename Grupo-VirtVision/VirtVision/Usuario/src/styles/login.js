import {StyleSheet} from 'react-native';

const styleLogin = StyleSheet.create({
    background: {
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#191919'
    },

    containerLogo: {
flex: 1,
justifyContent: 'center',

    },

    container: {
        flex: 1, 
       alignItems: 'center',
       justifyContent: 'center',
       width: '90%',
       paddingBottom: 50
    },

     input: {
        backgroundColor: '#fff',
        width: '90%',
        marginBottom: 15,
        color: '222',
        fontSize: 17,
        borderRadius:7 ,
        padding: 10,
     },

     btnSubmit:{
       backgroundColor:'#35AAFF',
       width: '90%',
       height: 45,
       alignItems: 'center',
       justifyContent: 'center',
       borderRadius: 7,
       padding: 10,
     },

     submitText:{
      color:'#FFFFFF',
      fontSize: 18,
     },


btnRegister: {
marginTop: 10
},

registerText: {
    color: '#fff'
}







  })

  export default styleLogin;


