import {StyleSheet} from 'react-native';



const stylePerfil = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    headerContainer: {
  
      paddingTop: 50, 
      paddingBottom: 40, 
      alignItems: 'center',
      justifyContent: 'center',
    },
    headerU: {
      backgroundColor: '#7050C1', 
      width: '100%',
      height: 350, 
      borderBottomLeftRadius: 220, 
      borderBottomRightRadius: 220, 
      position: 'absolute',
      top: 0,
      left: 0,
      alignItems: 'center',
      justifyContent: 'center',
    },
    profileImage: {
      width: 100,
      height: 100,
      borderRadius: 50,
      borderWidth: 4,
      borderColor: '#fff',
    },
  
    profileName: {
      color: '#fff', 
      fontSize: 18,
      fontWeight: 'bold',
      marginTop: 10, 
    },
  
    optionsContainer: {
      marginTop: 280, 
      padding: 20,
    },
    optionButton: {
      padding: 15,
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
    },
    optionText: {
      fontSize: 18,
      color: '#333',
    },
  });
  

export default stylePerfil;