import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, TouchableOpacity } from 'react-native';

export default function App() {
  const [todos, setTodos] = useState([{
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
  },
  {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
  },
  {
    "userId": 1,
    "id": 4,
    "title": "et porro tempora",
    "completed": true
  },
  {
    "userId": 1,
    "id": 5,
    "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
    "completed": false
  },
  {
    "userId": 1,
    "id": 6,
    "title": "qui ullam ratione quibusdam voluptatem quia omnis",
    "completed": false
  },
  {
    "userId": 1,
    "id": 7,
    "title": "illo expedita consequatur quia in",
    "completed": false
  },
  {
    "userId": 1,
    "id": 8,
    "title": "quo adipisci enim quam ut ab",
    "completed": true
  },
  {
    "userId": 1,
    "id": 9,
    "title": "molestiae perspiciatis ipsa",
    "completed": false
  },
  {
    "userId": 1,
    "id": 10,
    "title": "illo est ratione doloremque quia maiores aut",
    "completed": true
  }])

  const pressHandler = (id) => {
    let returnValue = [...todos];
    returnValue.forEach(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
    })
    setTodos(returnValue)
  }
  return (
    <View style={styles.container}>
      <FlatList
        numColumns={3}
        keyExtractor={ (item) => item.id.toString()} 
        data={todos}
        renderItem={ ({item: todo}) => 
        <TouchableOpacity onPress={()=>pressHandler(todo.id)}>
            <Text style={{
              ...styles.todo, backgroundColor: todo.completed ? 'green' : 'deeppink'
            }}>{todo.title}</Text>
        </TouchableOpacity>
      }
      
      />
      {/* <ScrollView>
        {todos.map(todo => (<View key={todo.id} style={styles.todo}>
          <Text>{todo.title}</Text>
        </View>)
        )}
      </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  todo: {
    margin: 10,
    backgroundColor: 'deeppink',
    color: 'white',
    fontSize: 10,
    padding: 10
  }

});




// import { StatusBar } from 'expo-status-bar';
// import { useState } from 'react';
// import { Button, StyleSheet, Text, TextInput, View, InputAccessoryView } from 'react-native';

// export default function App() {
//   const inputAccessoryViewID = 'uniqueID';
//   const [user, setUser] = useState("Kevingo");
//   const [fruit, setFruit] = useState({name: "orange", price: 5})
//   const pressHandler = () => {
//     setUser("Jose")
//     setFruit({name: "apple", price: 1})
//   }
//   return (
//     <View style={styles.container}>
//       <Text>{user} is eatinng {fruit.name} that cost {fruit.price}</Text>
//       <TextInput
//       style={styles.textInputStyle}
//       placeholder="Enter the username"
//       onChangeText={text=>setUser(text)}
//       />
//       <TextInput
//       style={styles.textInputStyle}
//       placeholder="Enter the fruit name"
//       onChangeText={text=>setFruit({...fruit, name: text})}
//       />
//       <TextInput
//       returnKeyType='done'
//       // inputAccessoryViewID={inputAccessoryViewID}
//       keyboardType='number-pad'
//       style={styles.textInputStyle}
//       placeholder="Enter the fruit price"
//       onChangeText={text=>setFruit({...fruit, price: text})}
//       />
//       <View style={styles.buttonStyle}><Button title='Change' onPress={pressHandler}></Button></View>
//       <StatusBar style="auto" />
//       <InputAccessoryView nativeID={inputAccessoryViewID} va style={{backgroundColor: 'red'}}>
//         <View style={{backgroundColor: 'whitesmoke'}}>
//           <View style={{alignSelf: 'flex-end', marginEnd: 15}}>
//           <Button
//           onPress={() => setText(initialText)}
//           title="Listo"
//         />
//           </View>

//         </View>

//       </InputAccessoryView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   buttonStyle: {
//     marginTop: 50,
//     backgroundColor: 'red'
//   },
//   textInputStyle:{
//     borderColor: 'black',
//     borderWidth: 1,
//     width: 300,
//     height: 50,
//     padding: 10,
//     margin: 10,
//   }
// });
