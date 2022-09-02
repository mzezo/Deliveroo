import React, {FC} from 'react';
import {View, Text, FlatList} from 'react-native';
import {ArrowRightIcon} from 'react-native-heroicons/outline';
import RestuarantCard from './RestuarantCard';
import useRestaurants from '../../services/getRestaurants';
import { NavigationProp } from '@react-navigation/native';
interface FeaturedSectionProps {
  id: string;
  title: string;
  describtion: string;
  featuredCategory: string;
  navigation: any
}

const FeaturedSection: FC<FeaturedSectionProps> = ({
  id,
  title,
  describtion,
  featuredCategory,
  navigation
}) => {
  const { data: restaurants, status, error } = useRestaurants();
  console.log('restaurants', restaurants)
 
  return (
    <View>
      <View className="my-4">
        <View className="mt-4 flex-row items-center justify-between px-4">
          <Text className="font-bold text-lg">{title}</Text>
          <ArrowRightIcon color="#00CCBB" />
        </View>
        <Text className="text-xs text-gray-500 px-4">{describtion}</Text>
      </View>
      <View>
        <FlatList
          data={restaurants}
          // renderItem={RestuarantCard.bind(navigation)}
          renderItem={({item}) => <RestuarantCard item={item} navigation={navigation} />}
          keyExtractor={item => item._id}
          // ListEmptyComponent={() => <Text>looding...</Text>}
          horizontal={true}
          showsHorizontalScrollIndicator={false} 
        />
      </View>
    </View>
  );
};

export default FeaturedSection;
