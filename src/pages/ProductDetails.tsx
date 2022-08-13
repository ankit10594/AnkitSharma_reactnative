import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';
import {getProductDetails} from '../apis/index';

import LoadingModal from '../components/LoadingModal';
import {NavigationProp} from '@react-navigation/native';

import {ProductInterface} from '../interfaces';

interface ProductDetailsProps {
  navigation: NavigationProp<any, any>;
  route: any;
}

const ProductDetails = ({navigation, route}: ProductDetailsProps) => {
  const [loading, setLoading] = React.useState(false);
  const [productData, setProductData] = React.useState<ProductInterface>();

  React.useEffect(() => {
    let data = route.params;
    setLoading(true);
    console.log(data.product_id);
    navigation.setOptions({
      title: data.product_name,
    });
    getProductDetails(data.product_id)
      .then(res => {
        setLoading(false);
        console.log(res);
        if (res.data && res.data?.message === 'Success') {
          setProductData(res.data.product);
        }
      })
      .finally(() => setLoading(false));
  }, [navigation, route.params]);

  return (
    <ScrollView style={styles.container}>
      <LoadingModal visible={loading} />

      {productData ? (
        <View>
          <Image source={{uri: productData.avatar}} style={styles.imageStyle} />
          <View style={styles.textContent}>
            <Text style={styles.textStyles}>{productData.name}</Text>
            <Text style={styles.priceText}>$ {productData.price}</Text>
            <Text style={styles.textDescriptions}>
              {productData.description}
            </Text>
          </View>
        </View>
      ) : null}
    </ScrollView>
  );
};

export default ProductDetails;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textStyles: {
    color: 'black',
    fontSize: 21,
  },
  imageStyle: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
  },
  textContent: {
    padding: 10,
  },
  textDescriptions: {
    fontSize: 15,
    color: '#999999',
  },
  priceText: {
    fontSize: 25,
    color: '#000',
    fontWeight: 'bold',
  },
});
