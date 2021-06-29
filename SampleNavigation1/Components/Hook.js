/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { Component, useState } from 'react';
 import {
   SafeAreaView,
   StyleSheet,
   Text,
   View,
   Button,
   FlatList,
 } from 'react-native';
 import 'react-native-gesture-handler';
 import { NavigationContainer } from '@react-navigation/native';
 import {createStackNavigator} from '@react-navigation/stack';
import { useEffect } from 'react';
 //const Stack = createStackNavigator();
 
/*
class Hook extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name : 'jin'
        }
    }

    changeName = () => {
        this.setState({
            name : 'kunghun'
        });
    }

    render() {
        return(
            <View style = {{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>안녕하세여 Hook 테스터입니다.</Text>
            <Button title={'이름변경'} onPress = {() => this.changeName()}></Button>
            <Text>안녕하세요 {this.state.name} 님 </Text>
            </View>
        );
    }
}
*/


 const Hook: () => React$Node = () => {
    const [name, setName] = useState('jin');

    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {
                setUsers(users);
                setLoading(false);
            });
    });


   return (
        <View style = {{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>안녕하세여 Hook 테스터입니다.</Text>
            <Button title={'이름변경'} onPress={() => setName('kung hoon')}></Button>
            <Text>안녕하세여 {name} 님</Text>

            <FlatList
                data={users}
                renderItem={({ item }) => <Text> {item.name}</Text>}    
                keyExtractor={item => item.id}
            ></FlatList>
        </View>
   );
 };

 
 const styles = StyleSheet.create({
 
 });
 
 export default Hook;
 