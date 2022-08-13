import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ListRenderItem,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {ProductInterface} from '../interfaces';

interface ProductsProps {
  products: ProductInterface[];
  OnPress: (product_id: string, product_name: string) => void;
}

export default function Products({products, OnPress}: ProductsProps) {
  const __renderItem: ListRenderItem<ProductInterface> = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          OnPress(item._id, item.name);
        }}
        style={styles.proCard}>
        <Image source={{uri: item.avatar}} style={styles.imageAvatar} />
        <View style={styles.textContent}>
          <Text style={styles.productHeading}>{item.name}</Text>
          <Text style={styles.productPrice}>$ {item.price}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.proContainer}>
      {products.length > 0 ? (
        <FlatList
          data={products}
          renderItem={__renderItem}
          numColumns={2}
          keyExtractor={item => item._id}
          contentContainerStyle={styles.paddingB}
        />
      ) : null}
    </View>
  );
}
const styles = StyleSheet.create({
  proContainer: {
    marginHorizontal: 10,
  },

  imageAvatar: {
    width: '100%',
    height: 180,
    resizeMode: 'contain',
    backgroundColor: '#FAFAFA',

    borderRightWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 5,
    borderBottomWidth: 0,
  },
  proCard: {
    backgroundColor: 'white',
    width: '48%',
    margin: 5,

    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 5,
  },
  productHeading: {
    color: 'black',
    fontSize: 14,
  },
  productPrice: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  textContent: {
    padding: 10,
  },
  paddingB: {
    paddingBottom: 100,
  },
});
