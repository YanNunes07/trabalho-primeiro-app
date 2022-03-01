import React, { Component } from "react";
import { StyleSheet, Button, StatusBar, View, Text, Image, ScrollView, SafeAreaView } from "react-native";


const App = () => {
  
  return(
    
    <View style={[styles.container, {flexDirection: "column"}]}>

      <StatusBar barStyle="dar-content" hidden = {false} backgroundColor="#63997a"/>
      
      <View style={{flexDirection: "row"}}>
        <View style={{ backgroundColor: "#000511", width:330 }}>
          <Text style={[styles.texto,{ padding:17, fontSize: 24  }]}> Complex</Text>
        </View>
        <Button title = " ="color = "#000511" onPress={()=>Alert.alert("Ainda em manutenção")}/>
      </View>
      <SafeAreaView style={styles.containerUm}>
      <ScrollView style={styles.scrollView}>
        <View style={{ flex:2,width: '100%', height: '80%'}}>
        <Text style={[styles.Text,{paddingLeft:90, padding:5,  }]}>complex skatepark</Text>
        <Image
        source={require('./images/complex.jpg')}
        style={{ width: 390, height: 300, padding:70}}
        />  
        </View>
          <Text style={[styles.Text,{padding:11}]}>Temos váaarios espaços pra fazer o teu evento! nas nossas 
          ÁREAS COMUNS não cobramos pela reserva e temos capacidade pra até 30 pessoas em um mesmo espaço. 
          já os ESPAÇOS PRIVATIVOS possuem taxa de reserva, tendo uma personalização muuuito maior
           pra tua festa: sistema de som, churrasqueira, opções de pacotes de consumo e capacidade pra até 100 pessoas.
            
          </Text>
          <Text style={[styles.Text, {padding:11}]}>Nosso endereço:</Text>
          <Text style={[styles.Text,{padding:11}]}>
          Av. Protásio Alves, 3839 - Petrópolis, Porto Alegre - RS, 91310-002
          Horas: Fecha à 00:00
          Telefone: (51) 3062-1869
          </Text>
      </ScrollView>
      </SafeAreaView>
        <View style={{  left:90, width:50, paddingLeft:190, paddingTop:20, padding:22,} }>
      <Image
        source={require('./images/mais.png')}
        style={{ width: 50, height: 50,}}
      />  

        </View> 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    display:"flex"
  },
  
  texto:{
    color:"white"
  },
  
  
  containerUm:{
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    borderStyle:"solid"
  },
  scrollView: {
    backgroundColor: 'black',
    marginHorizontal: 20,
  },
  Text:{
    color:"white"
  }
  
});



export default App;