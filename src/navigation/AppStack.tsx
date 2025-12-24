import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home/HomeScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';
const Stack = createNativeStackNavigator();

const AppStack = () => {

    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
        }}
            initialRouteName='Home'

        >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
    )
}

export default AppStack
