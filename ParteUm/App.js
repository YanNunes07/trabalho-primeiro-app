import React, { Component } from "react";
import { StyleSheet, Button, StatusBar, View, Text, Image, onPress, Alert } from "react-native";


const App = () => {
  
  return(
    
    <View style={[styles.container, {flexDirection: "column"}]}>

      <StatusBar barStyle="dar-content" hidden = {false} backgroundColor="#63997a"/>
      
      <View style={{flexDirection: "row"}}>
        <View style={{ backgroundColor: "#000511", width:330 }}>
          <Text style={[styles.texto,{ padding:17, fontSize: 24  }]}> Complex</Text>
        </View>
        <Button 
          title = " ="
          color = "#000511"
          onPress={()=>Alert.alert("Ainda em manutenção")}
          

        />
      </View>
      <View style={{ flex:2,width: '100%', height: '100%'}} />
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
  }
  
  
});



export default App;