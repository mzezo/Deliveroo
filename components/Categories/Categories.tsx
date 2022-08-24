import {FlatList, ScrollView, Text} from 'react-native';
import React from 'react';
import CategoryCard from './CategoryCard';
import useCategories from '../../services/getCategories';

const Categories = () => {
  const {data: categories, status, error} = useCategories();

  return (
    <FlatList
      data={categories}
      renderItem={CategoryCard}
      keyExtractor={item => item._id}
      ListEmptyComponent={() => <Text>looding...</Text>}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default Categories;
