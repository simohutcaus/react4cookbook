import React from 'react';
import { StyleSheet, Text, View, Dimensions, FlatList, ScrollView, Image, TextInput} from 'react-native';
import { Button, Card, ListItem, Header, Badge, PricingCard, SocialIcon } from 'react-native-elements';
import { createStackNavigator, createAppContainer, StackActions, NavigationActions } from 'react-navigation';

class App extends React.Component {

constructor(props) {
  super(props)

  let { width, height } = Dimensions.get('window')
  console.log(width, height)

  this.state = {
    label: 'test',
    items: [],
    text: '',
    results: 0
  }
  


}

_handleButtonPress = () => {
  this.setState({label: 'test3'});
  return fetch('https://facebook.github.io/react-native/movies.json')
  .then((response) => response.json())
  .then((responseJson) => {
    console.log(responseJson.movies[0].title);
    this.setState({label: responseJson.movies[0].title})
    this.setState({ items: responseJson.movies});
    this.setState({results: responseJson.movies.length})
    console.log(this.state.items);
    return responseJson.movies;
  })
  .catch((error) => {
    console.error(error);
  });
}

_onButtonPress() {
  console.log('pressed')
}

_OnButton2() {
  alert('test');
}

  render() {
    return (
      
      <View style = {styles.container}>
      <Header
  leftComponent={{ icon: 'menu', color: '#fff', onPress: () => alert('pressed') }}
  centerComponent={{ text: 'KITCHEN SINK', style: { color: '#fff' } }}
  rightComponent={{ icon: 'home', color: '#fff' }}
/>
      <View style = {styles.redbox}>
      <Badge value={this.state.results} status="success" />
      <SocialIcon
  type='twitch' onLongPress={this._OnButton2}
/>
      </View>
      <View></View>
      <View style={styles.yellowbox}>
      <ScrollView>
          <Text style={{fontSize:96}}>Scroll me plz</Text>
          <Image source={{uri: "https://cdn.images.express.co.uk/img/dynamic/73/590x/Formula-1-s-new-logo-905311.jpg", width: 512, height: 512 }} />
          <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
          <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
          <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
          <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
          <Text style={{fontSize:96}}>If you like</Text>
          <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
          <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
          <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
          <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
          <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
          <Text style={{fontSize:96}}>Scrolling down</Text>
          <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
          <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
          <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
          <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
          <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
          <Text style={{fontSize:96}}>What's the best</Text>
          <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
          <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
          <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
          <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
          <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
          <Text style={{fontSize:96}}>Framework around?</Text>
          <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
          <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
          <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
          <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
          <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
          <Text style={{fontSize:80}}>React Native</Text>
        </ScrollView>
      </View>
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
      </View>
      <View style={styles.bluebox}>
      <View style={styles.Button}>
      <Button title="Solid Button" onPress={this._handleButtonPress} style={styles.text}/>
      <Button title="Solid Button" onPress={this._handleButtonPress} style={styles.text}/>
      <Button
          title="Go to Details"
          onPress={() => {
            this.props.navigation.dispatch(StackActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'Details' })
              ],
            }))
          }}
        />
      </View>
      </View>
      <View style={styles.yellowbox}>
      <View style={styles.Button}>
      <Button title="Solid Button" onPress={this._onButtonPress} style={styles.text}/>
      </View>
      </View>
   </View>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Home"
          onPress={() => {
            this.props.navigation.dispatch(StackActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'Home' })
              ],
            }))
          }}
        />
      </View>
      
    );
  }  
}

const styles = StyleSheet.create ({
  container: {
     flexDirection: 'column',
     flex: 1,
     alignItems: 'center',
     alignSelf: 'stretch',
     backgroundColor: 'white',
     justifyContent: 'space-around'
  },
  redbox: {
     width: '100%',
     height: 100,
     backgroundColor: 'red',
     justifyContent: 'space-around',  
     alignItems: 'center'
  },
  text: {
    alignSelf: 'center'

  },


  bluebox: {
     width: '100%',
     height: 100,
     backgroundColor: 'black',
     justifyContent: 'space-around'
  },
  Button: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },

  yellowbox: {
     width: '100%',
     height: 100,
     backgroundColor: 'yellow',
     justifyContent: 'space-around'
  },
})

const AppNavigator = createStackNavigator({
  Home: {
    screen: App,
  },
  Details: {
    screen: DetailsScreen
  }
}, {
    initialRouteName: 'Home',
});

export default createAppContainer(AppNavigator);
