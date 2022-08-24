import {View, Text, ScrollView, FlatList} from 'react-native';
import React, {FC} from 'react';
import {ArrowRightIcon} from 'react-native-heroicons/outline';
import RestuarantCard from './RestuarantCard';
import useRestaurants from '../../services/getRestaurants';
interface FeaturedSectionProps {
  id: string;
  title: string;
  describtion: string;
  featuredCategory: string;
}

const FeaturedSection: FC<FeaturedSectionProps> = ({
  id,
  title,
  describtion,
  featuredCategory,
}) => {

  const {data: restaurants, status, error} = useRestaurants();

  return (
    <View>
      <View className="my-4">
        <View className="mt-4 flex-row items-center justify-between px-4">
          <Text className="font-bold text-lg">{title}</Text>
          <ArrowRightIcon color="#00CCBB" />
        </View>
        <Text className="text-xs text-gray-500 px-4">{describtion}</Text>
      </View>
      <FlatList
        data={restaurants}
        renderItem={RestuarantCard}
        keyExtractor={item => item._id}
        ListEmptyComponent={() => <Text>looding...</Text>}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default FeaturedSection;
