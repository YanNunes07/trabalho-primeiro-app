import React, { Component } from "react";
import { StyleSheet, Button, StatusBar, View, Text, Image, ScrollView, SafeAreaView, onPress, Alert } from "react-native";


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
          <Text style={[styles.Text,{paddingLeft:12, padding:5,  }]}>────── Nossa pista────── </Text>
          <Image
            source={require('./images/co.jpg')}
            style={{ width: 320, height: 220, padding:70}}
          />  
        </View>

          <Text style={[styles.Text,{padding:11}]}>Estilo e qualidade de pista
           californiana, ela conta com banks e snake run que totalizam uma área 
           de aproximadamente 750 metros quadrados.
          </Text>

          <Text style={[styles.Text, {paddingLeft:11, padding:5,}]}>────── Area de lazer ──────</Text>
          <Image
          source={require('./images/bar.jpg')}
          style={{ width: 320, height: 220, padding:70}}
          /> 
          <Text style={[styles.Text,{padding:11}]}>Um espaço onde voçê pode beber e comer com seus amigos.</Text>
          <Text style={[styles.Text, {paddingLeft:11, padding:5,}]}>──────────────────</Text>

          <Image
          source={require('./images/coz.png')}
          style={{ width: 320, height: 110, padding:70}}
          /> 
          <Text style={[styles.Text, {padding:11}]}>Toda quinta passa por aqui no nosso
           contêiner chefes de cozinha,
           estudantes de gastronomia ou até mesmo uma galera que tem a culinária como hobby.</Text>
          <Text style={[styles.Text,{padding:11}]}>
          O pessoal vem, se desafia e prepara aquele prato diferenciado pra nossa clientela. 
          na Cozinha Anexa não tem um tipo de comida definido... 
          já foi feito de comida tailandesa à comida de boteco! a vibe aqui é só uma:
           se divertir cozinhando.
          </Text>
          <Text style={[styles.Text, {padding:11}]}>- O espaço é dividido em cinco operações:</Text> 
          <Text style={[styles.Text, {padding:11}]}>Na 
            parrilla saem assados suculentos e muito deliciosos;</Text>
            <Text style={[styles.Text, {padding:11}]}> No Lemonade Coffee Bar, você pode degustar 
            um café da manhã 
             ou fazer um lanche rápido;</Text>
             <Text style={[styles.Text, {padding:11}]}> Na estação do Let's Roll,
                são oferecidas
                opções de pokes, temakis e sushis e da Cozinha Anexa, saem receitas
                preparadas por convidados especiais (no dia em que fomos, estava o 
                Seninha preparando pokes) </Text>
                <Text style={[styles.Text, {padding:11}]}>
                 - tudo isso fora o cardápio clássico da casa com petiscos
                  comida mexicana e hambúrgueres.
                </Text>
          <Text style={[styles.Text, {paddingLeft:1, padding:5,}]}>────── Clima do lugar ──────</Text>
          <Image
          source={require('./images/festa.jpg')}
          style={{ width: 320, height: 220, padding:70}}
          /> 
          <Text style={[styles.Text,{padding:11}]}>- Se tem uma palavra que define o Complex 
          é alto-astral.
           O lugar é incrível! A antiga pista de skate cedeu espaço para um deck em madeira que 
           acomoda a 
           galera no happy hour.</Text>

           <Text style={[styles.Text,{padding:11}]}>- Boa parte das mesas ficam ao ar livre. Curtir o pôr do sol de lá é um dos pontos 
          fortes da casa, se acompanhado de uma cerveja ou um drink bem geladinho, melhor ainda. </Text>

          <Text style={[styles.Text,{padding:11}]}>- A ideia é aproveitar de forma leve e descontraída. 
          Chama os amigos, pede algumas comidinhas, compartilha com o pessoal e curte a vibe do lugar.
           Os drinks em jarra são ótimos para essas ocasiões.</Text>
           <Text style={[styles.Text, {paddingLeft:11, padding:5,}]}>──────────────────</Text>

           <Text style={[styles.Text,{padding:20, fontSize:23}]}>Venha nos conhecer</Text>
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