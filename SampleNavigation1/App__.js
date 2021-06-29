/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {
   SafeAreaView,
   StyleSheet,
   Text,
   View,
   Button,
 } from 'react-native';
 import Hook from './Components/Hook'
 import 'react-native-gesture-handler';
 import { NavigationContainer } from '@react-navigation/native';
 import {createStackNavigator} from '@react-navigation/stack';
 const Stack = createStackNavigator();
 
 function HomeScreen({navigation}) {
   return (
     <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
       <Text>Hi HomeScreen 입니다.!!!</Text>
       <Button title = "프로필 페이지로 이동" 
         onPress={() => navigation.navigate(
           'Profile', {
             //itemId: 86=,
             otherParam: 'anything you want here',
       })}></Button>
       <Button title="Hook Test" onPress={() => navigation.push('Hook')}></Button>
     </View>
   );
 }
 
 function ProfileScreen({ route, navigation}) {
 
   const { itemId } = route.params; // const itemId = route.params.itemId;
   const { otherParam } = route.params;
 
   return(
     <View style = {{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
       <Text>안녕하세여 ProfileScreen 입니다.</Text>
       <Text>itemId: {itemId}</Text>
       <Text>otherParam: {otherParam}</Text>
       {/* <Text>otherParam: {JSON.stringify(otherParam)}</Text> */}
 
 
       <Button title="Push" onPress={() => navigation.push('Profile')}></Button>
       <Button title="Go Back" style = {{marginTop: 10,}} onPress={() => navigation.goBack()}></Button>
       <Button title="홈으로 이동" onPress={() => navigation.popToTop()}></Button>
     </View>
   );
 }
 
 
 
 const App: () => Node = () => {
 
   return (
     <NavigationContainer>
       <Stack.Navigator>
         <Stack.Screen name="Home"    component={HomeScreen} options={{ title: 'welcome' }}></Stack.Screen >
         <Stack.Screen name="Profile" initialParams={{itemId: 10000}} component={ProfileScreen}></Stack.Screen>
         <Stack.Screen name="Hook" initialParams={{itemId: 10001}} component={Hook}></Stack.Screen>
       </Stack.Navigator>
     </NavigationContainer>
   );
 };
 
 const styles = StyleSheet.create({
 
 });
 
 export default App;
 