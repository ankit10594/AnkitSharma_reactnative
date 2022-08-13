import React, {Suspense, lazy} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Alert} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Home = lazy(() => import('./pages/Home'));
const ProductDetails = lazy(() => import('./pages/ProductDetails'));
const AddProduct = lazy(() => import('./pages/AddProduct'));

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Suspense
      fallback={
        <View style={styles.container}>
          <Text>Loading...</Text>
        </View>
      }>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="HomeScreen"
            component={Home}
            options={{
              title: 'UPayments Store',
              headerRight: () => (
                <TouchableOpacity
                  onPress={() => {
                    Alert.alert('Search Here');
                  }}>
                  <Icon name="search" color="black" size={30} />
                </TouchableOpacity>
              ),
            }}
          />
          <Stack.Screen
            name="AddProduct"
            component={AddProduct}
            options={{title: 'Add Product'}}
          />
          <Stack.Screen
            name="ProductDetails"
            component={ProductDetails}
            options={{title: 'Product'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Suspense>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
