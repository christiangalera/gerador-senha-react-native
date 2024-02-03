import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider';


export default function App(){
  return(
    <View style={styles.container}>

      <Image
        source={require("./src/assets/logo.png")} 
        style={styles.logo}
      />

      <Text style={styles.title}> 20 Caracteres </Text>

      <View style={styles.area}>
        <Slider 
        style={{ height: 50 }}
        minimunValue={6}
        maximunValue={20}
        maximumTrackTintColor='#ff0000'
        minimumTrackTintColor='#000'
        thumbTintColor='#392de9'
        />
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}> Gerar senha </Text>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F3FF",
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {
    marginBottom: 50, 
  },
  area: {
    marginTop: 14,
    marginBottom: 14,
    width: '80%',
    backgroundColor: '#FFF',
    borderRadius: 20,
    padding: 6
  },
  button: {
    backgroundColor: "#392de9",
    width: '80%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginTop: 30,
    marginBottom: 18
  },
  buttonText: {
    color: "#FFF",
    fontSize: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
  }
}) 