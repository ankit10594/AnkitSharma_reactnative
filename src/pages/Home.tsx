import {StyleSheet, View} from 'react-native';
import React from 'react';

import CategoryList from '../components/CategoryList';
import FloatingAddButton from '../components/FloatingAddButton';
import Products from '../components/Products';
import {getCategory, getProduct} from '../apis/index';

import LoadingModal from '../components/LoadingModal';
import {NavigationProp} from '@react-navigation/native';

interface HomeProps {
  navigation: NavigationProp<any, any>;
}

const Home = ({navigation}: HomeProps) => {
  const [categoryList, setCategoryList] = React.useState([]);
  const [allProducts, setAllProducts] = React.useState<any>([]);
  const [selectedCategory, setSelectedCategory] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    getCategory()
      .then(res => {
        console.log(res.data?.message);
        if (res.data && res.data?.message === 'Success') {
          res.data.categories.unshift({
            name: 'All',
            _id: '0',
            __v: 0,
            updatedAt: new Date(),
            createdAt: new Date(),
          });
          setCategoryList(res.data.categories);
          getAllProducts();
        }
      })
      .finally(() => setLoading(false));
  }, [navigation]);

  const getCategoryReleatedProduct = (category_id: string) => {
    setSelectedCategory(category_id);
    let filtered_products = allProducts.filter(
      (item: any) => item.category === category_id,
    );
    if (category_id === 'All') {
      getAllProducts();
    } else {
      setAllProducts(filtered_products);
    }
  };

  const getAllProducts = () => {
    setLoading(true);
    getProduct()
      .then(res => {
        console.log(res.data);
        if (res.data && res.data?.message === 'Success') {
          setAllProducts(res.data.products.reverse());
        }
      })
      .finally(() => setLoading(false));
  };

  const getIdReleatedProduct = (product_id: string, product_name: string) => {
    navigation.navigate('ProductDetails', {
      product_id,
      product_name,
    });
  };

  return (
    <View style={styles.container}>
      <LoadingModal visible={loading} />
      <FloatingAddButton
        onPress={() => {
          navigation.navigate('AddProduct');
        }}
      />
      <CategoryList
        categoryList={categoryList}
        selectedCategory={selectedCategory}
        OnPress={(category_id: string) => {
          getCategoryReleatedProduct(category_id);
        }}
      />
      <View>
        <Products
          products={allProducts}
          OnPress={(product_id: string, product_name: string) => {
            getIdReleatedProduct(product_id, product_name);
          }}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  textStyles: {
    color: 'black',
  },
});
