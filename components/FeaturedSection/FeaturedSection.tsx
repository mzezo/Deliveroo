import {View, Text, ScrollView} from 'react-native';
import React, {FC} from 'react';
import {ArrowRightIcon} from 'react-native-heroicons/outline';
import RestuarantCard from './RestuarantCard';

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
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>
      <Text className="text-xs text-gray-500 px-4">{describtion}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4">
        <RestuarantCard
          id="123"
          imgUrl="https://links.papareact.com/gn7"
          title="Yo! Sushi"
          rating={4.5}
          genre="Japanese"
          address="123 Main St"
          short_description="test Description"
          dishes={[]}
          lng="20.29"
          lat="19.23"
        />
        <RestuarantCard
          id="123"
          imgUrl="https://links.papareact.com/gn7"
          title="Yo! Sushi"
          rating={4.5}
          genre="Japanese"
          address="123 Main St"
          short_description="test Description"
          dishes={[]}
          lng="20.29"
          lat="19.23"
        />
        <RestuarantCard
          id="123"
          imgUrl="https://links.papareact.com/gn7"
          title="Yo! Sushi"
          rating={4.5}
          genre="Japanese"
          address="123 Main St"
          short_description="test Description"
          dishes={[]}
          lng="20.29"
          lat="19.23"
        />
        <RestuarantCard
          id="123"
          imgUrl="https://links.papareact.com/gn7"
          title="Yo! Sushi"
          rating={4.5}
          genre="Japanese"
          address="123 Main St"
          short_description="test Description"
          dishes={[]}
          lng="20.29"
          lat="19.23"
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedSection;
