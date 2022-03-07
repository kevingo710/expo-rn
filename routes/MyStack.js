import React from 'react'
import Home from '../screens/Home'
import Task from '../screens/Task'
import About from '../screens/About'
import { createStackNavigator } from '@react-navigation/stack'
const Stack = createStackNavigator();
const screenOptionsStyle =       {   headerStyle:{
    backgroundColor: 'seashell'
    },
    headerTintColor: 'blue',
    headerTitleStyle: {
        fontWeight: 'bold'
    }
    
}

const AboutStack = () => { 
    return (
        <Stack.Navigator screenOptions={screenOptionsStyle
  
        }>
        <Stack.Screen name="Done" component={About}/>
    </Stack.Navigator>
    )

 }

const HomeStack = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionsStyle
  
        }>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Task" component={Task} 

            options={({route})=>({title: route.params.task})}
            // titulo que viene del elemento double destr 
            />
        </Stack.Navigator>

    )
}

export  {HomeStack, AboutStack}
