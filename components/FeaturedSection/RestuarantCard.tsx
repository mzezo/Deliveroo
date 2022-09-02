import {View, Text, Image, Pressable} from 'react-native';
import React, {FC} from 'react';
import {LocationMarkerIcon, StarIcon} from 'react-native-heroicons/outline';
import {urlFor} from '../../sanity';
import {IRestaurant} from './Restaurant';
// import {useNavigation, NavigationProp } from '@react-navigation/native';

interface RestaurantCardProps {
  item: IRestaurant;
  navigation: any;
}

const RestuarantCard: FC<RestaurantCardProps> = ({item, navigation}) => {
  // const navigation = useNavigation();

  return (
    <Pressable
      className="bg-white mr-3 shadow"
      //@ts-ignore
      onPress={() => {navigation.navigate('Restaurant', { restaurent: item })}}
    >
      <Image
        source={{
          uri: urlFor(item?.image).url(),
        }}
        className="h-36 w-64 rounded-sm"
      />
      <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{item?.name}</Text>
        <View className="flex-row items-center space-x-1">
          <StarIcon color="green" opacity={0.5} size={22} />
          <Text className="text-xs text-gray-500">
            <Text className="text-green-500">{item?.rating}</Text>.{' '}
            <Text> Fast Food</Text>
          </Text>
        </View>
        <View className="flex-row items-center space-x-1 w-full">
          <LocationMarkerIcon color="gray" opacity={0.4} size={22} />
          <Text className="text-xs text-gray-500 w-[200px]" numberOfLines={1}>
            Nearby . {item?.address}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default React.memo(RestuarantCard);
