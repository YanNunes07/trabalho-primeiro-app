import { emit } from "process";
import React, { Component } from "react";
import { StyleSheet, 
  Button, 
  StatusBar, 
  View, 
  Text, 
  Image,
  TextInput,
  SafeAreaView,ScrollView, onPress, Alert, onChangeText, onChangeNumber} from "react-native";


const App = () => {
  const [text, onChangeText] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);
  
  return(
    
    <View style={[styles.container, {flexDirection: "column"}]}>
     
      <StatusBar barStyle="dar-content" hidden = {false} backgroundColor="#63997a"/>
      
      <View style={{flexDirection: "row"}}>
        <View style={{ backgroundColor: "#000511", width:330 }}>
          <Text style={[styles.texto,{ padding:17, fontSize: 24  }]}> Complex</Text>
        </View>
        <Button title = " ="color = "#000511" onPress={()=>Alert.alert("Ainda em manutenção")}/>
      </View>
      <SafeAreaView style={styles.container1}>
      <ScrollView style={styles.scrollView}>
      <View style={[styles.inicio,{ flex:1,}]}>
        <Image
        source={require('./images/com.png')}
        style={{ width: 50, height: 40, padding:100, paddingEnd:170,}}
        />  
      </View>
      <View style={[styles.formConteiner,{ flex:1,} ]}>
        <Text style={{paddingLeft:103, fontSize: 33, }}>Login</Text>
      <SafeAreaView>
        
      <TextInput
        title="ola"
        style={styles.input}
        onChangeText={"Seu email"}
        value={text}
        placeholder="Email:"
      />
      <Text style={{paddingLeft:193, fontSize:12 }}>Esse é seu email?</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={text}
        placeholder="Senha:"
        keyboardType="string"
      />
      <Text style={{paddingLeft:193, fontSize:12 }}>Essa é sua senha?</Text>
      <View style={[{flexDirection: "row", justifyContent: "space-around", paddingLeft:7, padding:9}]}>
      <Button style={[styles.Button]}
          title = "   Login    "
          borderRadios = "1"
          color = "#586875"
          onPress={()=>Alert.alert("Você esta logado")}
        />


        <Button style={[styles.Button]}
          title = " Cadastrar  "
          color = "#586875"
          onPress={()=>Alert.alert("Você foi cadastrado")}
        />

      </View>
       

    </SafeAreaView>
    
      </View> 
      
      
        
      </ScrollView>
    </SafeAreaView>
    <View style={{  left:90, width:50, paddingLeft:190, paddingTop:20, padding:22,} }>
      <Image
        source={require('./images/mais.png')}
        style={{ width: 40, height: 40,}}
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
  
  texto:{color:"white"},

  inicio:{
   
    padding: 24,
    display:"flex"
  },

  formConteiner:{
    padding: 10 & 20,
    display:"flex"
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },

  container1: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    borderStyle:"solid",
  },
  scrollView: {
    backgroundColor: 'white',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 12,
    padding:12
  }
});
  



export default App;