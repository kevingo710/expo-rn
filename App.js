import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Provider } from 'react-redux';
import MyDrawer from './routes/MyDrawer';
import store from './store/store';
export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer >
      <MyDrawer />
    </NavigationContainer>

    </Provider>

  );
}


