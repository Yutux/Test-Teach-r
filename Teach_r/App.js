import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground, SafeAreaView, Image} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import TeachItem from './Components/TeacherItem/Index';
// import NavigationContainer from '@react-navigation/native';
// import createStackNavigator from 'react-navigation-stack';



export default function App() {

  const carouselItems = [
    {
      title: 'test 1',
      picture: './assets/images/ModelY.jpeg',
    },
    {
      title: 'test 2',
      picture: './assets/images/ModelS.jpeg',
    },
    {
      title: 'test 3',
      picture: './assets/images/Model3.jpeg',
    },
  ];

  function renderItem({ item}) {
    return(
      <View style={styles.carouselItemContainer}>
        <Text style={styles.carouselItemTitle}>{item.title}</Text>
        <Image style={styles.carouselItemImage} source={item.picture} />
      </View>
    );
  }

  // const Stack = createStackNavigator();

  // function HomeScreen() {
  //   return (
  //     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
  //       <Text>Home Screen</Text>
  //     </View>
  //   );
  // }

  return (
    <View style={styles.container}>
    {/*<TeachItem /> */}
      <Carousel
        layout={'default'}
        layoutCardOffset={9}
        data={carouselItems}
        sliderWidth={300}
        itemWidth={300}
        renderItem={renderItem}
      />
      {/* <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'My home' }}
        />
      </Stack.Navigator>
    </NavigationContainer> */}
      <StatusBar style="auto" />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  carouselItemTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
  },
  carouselItemContainer:{
    backgroundColor: '#333',
    borderRadius: 4,
    height: 300,
    padding: 20,
    marginTop: 20,
  },

  carouselItemImage: {
    width: '100%',
    height: 200,
    borderRadius: 4,
  }

});

