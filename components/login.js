import React, { Component } from 'react';
import { Image, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  handleRegister = () => {
    this.props.navigation.navigate('Register');
  }
  handleHome = () => {
    this.props.navigation.navigate('Home');
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.imageprofile} source={require('../assets/logo.png')} />

        <Text style={styles.title}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor={this.state.username ? 'black' : '#C6C6C6'}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor={this.state.password ? 'black' : '#C6C6C6'}
          secureTextEntry={true}
        />

        <TouchableOpacity style={[styles.loginButton, { marginTop: 20 }]} onPress={this.handleLogin}>
          <Text style={styles.loginButtonText}onPress={this.handleHome}>Login</Text>
        </TouchableOpacity>
        <Text style={[styles.orText, { marginTop: 15, color: '#D9D9D9' }]}> ─────── Atau ───────</Text>
        <TouchableOpacity
          style={styles.buttonGoogle} >
          <Image 
            source={require("../assets/google.png")}
            style={styles.imageGoogle}
          />
          <Text style={styles.textButton2}>Login With Google</Text>
        </TouchableOpacity>

        <Text style={[styles.loginText, { marginTop: 15 }]}>Belum punya akun? <Text style={styles.registerLink} onPress={this.handleRegister}>Register</Text></Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    marginTop: 15,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#D9D9D9',
    borderWidth: 1,
    borderRadius: 6,
    paddingLeft: 10,
    marginBottom: 10,
    color: 'black',
  },
  loginButton: {
    width: '100%',
    height: 40,
    backgroundColor: '#1A7ECC',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
  },
  orText: {
    color: '#D2D2D2',
    fontSize: 16,
  },
  registerLink: {
    color: '#1A7ECC',
    fontSize: 14,
  },
  imageprofile: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
  buttonGoogle: {
    height: 40,
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    marginTop: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor:'black',
  },
  imageGoogle: {
    marginLeft: 90,
    width: 40,
    height: 40,
  },
  textButton2: {
    marginTop: 10,
    paddingLeft: 15,
    alignItems: 'center',
    color: 'black',
    fontWeight: 'bold',
  },
});

export default Login;