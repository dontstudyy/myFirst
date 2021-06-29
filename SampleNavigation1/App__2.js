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
   TextInput,
 } from 'react-native';
 import Hook from './Components/Hook'
 import { NavigationContainer } from '@react-navigation/native';
 import {createStackNavigator} from '@react-navigation/stack';
 //import 'react-native-gesture-handler';


 const Stack = createStackNavigator();
 

 function HomeScreen({ navigation, route }) {
  React.useEffect( () => {
    if (route.params?.post) {
        //alert(route.params.post);
    }
  }, [route.params?.post]);

   return (
     <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
       <Button 
          title = "Create post" 
          onPress={() => navigation.navigate('CreatePost', {})}>
        </Button>
       <Text style={{ margin: 10 }}>Post: {route.params?.post}</Text>
     </View>
   );
 }
 

 function CreatePostScreen({ navigation, route}) {
   const [postText, setPostText] = React.useState('');

   return(
     <>
        <TextInput
          multiline
          placeholder="What's on your mind?"
          style={{padding: 10, backgroundColor: 'white'}}
          value={postText}
          onChangeText={setPostText}
        ></TextInput>
        <Button
          title="Done"
          onPress={() => {
            navigation.navigate('Home', { post: postText });
          }}
        ></Button>
     </>
   );
 }
 
 
 
 const App: () => Node = () => {
 
   return (
     <NavigationContainer>
       <Stack.Navigator mode="modal">
          <Stack.Screen name="Home"    component={HomeScreen}></Stack.Screen >
          <Stack.Screen name="CreatePost" component={CreatePostScreen}></Stack.Screen>
       </Stack.Navigator>
     </NavigationContainer>
   );
 };
 
 const styles = StyleSheet.create({
 
 });
 
 export default App;
 