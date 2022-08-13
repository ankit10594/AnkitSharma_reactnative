import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Button,
  Alert,
} from 'react-native';
import React from 'react';
import {NavigationProp} from '@react-navigation/native';
import {addProduct} from '../apis/index';
import LoadingModal from '../components/LoadingModal';
interface AddProductProps {
  navigation: NavigationProp<any, any>;
}
export default function AddProduct({navigation}: AddProductProps) {
  const [productData, setProductData] = React.useState({
    name: '',
    price: 0,
    category: '',
    description: '',
    avatar: '',
    developerEmail: 'ankit10594@hotmail.com',
  });
  const [loading, setLoading] = React.useState(false);
  const setValue = (key: string, val: string) => {
    setProductData({
      ...productData,
      [key]: val,
    });
  };

  const submitData = () => {
    setLoading(true);
    addProduct(productData)
      .then(res => {
        if (res.data.message === 'Success') {
          Alert.alert('Success!', 'Product successfully added');
          navigation.goBack();
          setLoading(false);
        }
      })
      .finally(() => setLoading(false));
  };
  return (
    <ScrollView style={styles.container}>
      <LoadingModal visible={loading} />
      <Text style={styles.WelcomeText}>
        Enter correct details to enter the product, for image copy the url and
        paste here
      </Text>
      <View style={styles.inputCOntainer}>
        <TextInput
          style={styles.textInput}
          value={productData.name}
          placeholder="Enter Product Name"
          onChangeText={text => {
            setValue('name', text);
          }}
        />
        <TextInput
          style={styles.textInput}
          value={productData.price.toString()}
          placeholder="Enter Price"
          onChangeText={text => {
            setValue('price', text);
          }}
        />
        <TextInput
          style={styles.textInput}
          value={productData.category}
          placeholder="Enter Category"
          onChangeText={text => {
            setValue('category', text);
          }}
        />
        <TextInput
          style={styles.textInput}
          value={productData.description}
          placeholder="Enter Description"
          onChangeText={text => {
            setValue('description', text);
          }}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Enter Avatar"
          value={productData.avatar}
          onChangeText={text => {
            setValue('avatar', text);
          }}
        />
        <View style={styles.gap} />
        <Button
          title="Add product"
          onPress={() => {
            submitData();
          }}
          color="#000"
        />
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  WelcomeText: {
    color: 'black',
    padding: 15,
  },
  textInput: {
    backgroundColor: '#cccccc',
    color: 'black',
    marginVertical: 5,
    borderRadius: 5,
  },
  inputCOntainer: {
    padding: 15,
  },
  gap: {
    marginTop: 20,
  },
});
