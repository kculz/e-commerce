import React, { Component } from "react";
import { Button, Image, KeyboardAvoidingView, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

export default class LoginScreen extends Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <ScrollView style={styles.content}>
          <Text style={styles.title}>Welcome back</Text>
          <Image 
            style={styles.image}
            source={{
              uri: 'https://assets-v2.lottiefiles.com/a/5f52011c-1167-11ee-bb7a-87ae82e79a64/8z4Q87i182.gif'
            }}
          />

          <View style={styles.form}>
            <TextInput placeholder="Enter email" style={styles.input} />
            <TextInput placeholder="Enter password" style={styles.input} secureTextEntry />
            <Button title="Login" color="black" onPress={this.handleLogin} />
          </View>
        </ScrollView>
      </ScrollView>
    );
  }

  handleLogin = () => {
    // Implement your login logic here
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
    width: '80%',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  form: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    backgroundColor: 'lightgray',
    padding: 10,
    marginBottom: 10,
  },
});