import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ListRenderItem,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {CaregoryListInterface} from '../interfaces';

interface CaregoryListProps {
  categoryList: CaregoryListInterface[];
  OnPress: (category_id: string) => void;
  selectedCategory: string;
}

export default function CategoryList({
  categoryList,
  selectedCategory,
  OnPress,
}: CaregoryListProps) {
  const __renderItem: ListRenderItem<CaregoryListInterface> = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          OnPress(item.name);
        }}>
        <Text
          style={
            selectedCategory === item.name
              ? styles.selectedCategory
              : styles.categoryName
          }>
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.categoryContainer}>
      {categoryList.length > 0 ? (
        <FlatList
          data={categoryList}
          horizontal={true}
          renderItem={__renderItem}
          keyExtractor={item => item._id}
        />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  categoryContainer: {
    marginVertical: 10,
  },
  categoryName: {
    color: '#fff',
    backgroundColor: 'black',
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 50,
  },
  selectedCategory: {
    color: '#000',
    backgroundColor: 'white',
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#000',
  },
});
