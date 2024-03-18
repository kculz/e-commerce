import React, { Component, useState } from "react";
import { Button, Image, KeyboardAvoidingView, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { CheckBox } from "react-native-web";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();
  
  handleLogin = () => {
    // Implement your login logic here
  };
    return (
     <SafeAreaView style={{flex:1, backgroundColor:"white", alignItems:"center"}}>
      <View>
        <Image 
        style={{width:150, height:100}} 
        source={{ uri:"https://mabiyshop.com/images/no-item-in-cart.gif"}}
         />
      </View>

      <KeyboardAvoidingView>
        <View style={{alignItems:"center"}}>
         <Text style={{fontSize: 20, fontWeight:"bold", marginTop:10,color:"#4682B4"}}>Login into your account.</Text>
        </View>

        <View style={{marginTop:50}}>
          <View style={{flexDirection:"row", alignItems:"center", gap:5, backgroundColor:"lightgray", padding:5, borderRadius:5 }}>
            <MaterialCommunityIcons style={{color:"grey"}} name="email-outline" size={24} color="black" />
            <TextInput 
            style={{marginVertical:10, width:300, color:"gray", fontSize: email? 18 : 18}}
             placeholder="Enter your email"
             value={email}
             onChangeText={(text) => setEmail(text)}
             />
          </View>
        </View>

        <View style={{marginTop:20}}>
          <View style={{flexDirection:"row", alignItems:"center", gap:5, backgroundColor:"lightgray", padding:5, borderRadius:5 }}>
          <MaterialCommunityIcons name="lock-outline" size={24} color="gray" />
            <TextInput  
            style={{marginVertical:10, width:300, color:"gray", fontSize: password? 18 : 18}}
            placeholder="Enter your password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
            />
          </View>
        </View>

        <View style={{flexDirection:"row", justifyContent:"space-between", marginTop:15}}>
          <TouchableOpacity>
            <Text style={{color:"gray", fontSize:16}}>Keep me logged in</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
            <Text style={{color:"blue", fontSize:16}}>Forgot password</Text>
          </TouchableOpacity>
        </View>

        <View style={{marginTop:20}} />

       
        <Pressable style={{width:200, backgroundColor:"#4682B4", padding:10, borderRadius:6, alignItems: "center", marginRight:"auto", marginLeft:"auto"}}>
            <Text style={{fontSize:20, color:"white", fontWeight:"bold"}}>Login</Text>
         </Pressable>

         <TouchableOpacity onPress={() => navigation.navigate("Register")} style={{marginTop:10, fontSize:16, alignItems:"center"}}>
          <Text>Don't have an account? Sign up.</Text>
         </TouchableOpacity>
       
      </KeyboardAvoidingView>
     </SafeAreaView>
    );
  

}

const styles = StyleSheet.create({

});

export default LoginScreen;
