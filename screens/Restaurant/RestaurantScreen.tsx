import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useLayoutEffect} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  ArrowLeftIcon,
  ChevronRightIcon,
  LocationMarkerIcon,
  QuestionMarkCircleIcon,
  StarIcon,
} from 'react-native-heroicons/outline';
import CartNotification from '../../components/Cart/CartNotification';
import {useDispatch} from 'react-redux';
import {setRestaurant} from '../../redux/restaurant/restaurantSlice';
import useRestaurant, {getRestaurant} from '../../services/getRestaurant';
import {urlFor} from '../../sanity';
import {IRestaurant} from '../../components/FeaturedSection/Restaurant';
import DishItem from '../../components/Restaurant/DishItem';

const RestaurantScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const {
    params: {restaurent},
  } = useRoute<any>();

  // const { data: restaurant, status, error } = useRestaurant(params?.id);

  console.log('RestaurantScreen', restaurent);

  useEffect(() => {
    // dispatch(setRestaurant({_id}))
    // getRestaurant(params?.id).then((res) => console.log('RestaurantScreen res', res)).catch((err) => console.log('err', err))
  }, []);

  return (
    <>
      <CartNotification />
      <ScrollView>
        <View className="relative">
          <Image
            source={{
              // uri: 'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-Clipart.png',
              uri: urlFor(restaurent?.image).url(),
            }}
            className="w-full h-56 bg-gray-300 p-4"
          />
          <TouchableOpacity
            //@ts-ignore
            className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full"
            onPress={navigation.goBack}>
            <ArrowLeftIcon size={20} color="#00CCBB" />
          </TouchableOpacity>
        </View>
        <View className="bg-white">
          <View className="px-4 pt-4">
            <Text className="text-3xl font-bold"> {restaurent?.name} </Text>
            <View className="flex-row space-x-2 my-1">
              <View className="flex-row items-center space-x-1">
                <StarIcon color="green" opacity={0.5} size={22} />
                <Text className="text-xs text-gray-500">
                  <Text className="text-green-500">{restaurent?.rating}</Text> .{' '}
                  {restaurent?.type?.title}
                </Text>
              </View>
              <View className="flex-row items-center space-x-1">
                <LocationMarkerIcon color="gray" opacity={0.4} size={22} />
                <Text
                  className="text-xs text-gray-500 w-[200px]"
                  numberOfLines={1}>
                  Nearby . {restaurent?.address}
                </Text>
              </View>
            </View>
            <Text className="text-gray-500 mt-2 pb-4">
              {restaurent?.short_description}
            </Text>
          </View>
          <TouchableOpacity
            //@ts-ignore
            className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
            <QuestionMarkCircleIcon color="gray" opacity={0.6} size={20} />
            <Text className="pl-2 flex-1 text-md font-bold">
              Have a food allegry?
            </Text>
            <ChevronRightIcon color="#00CCBB" />
          </TouchableOpacity>
        </View>
        <View className="pb-36">
          <Text className="px-4 pt-6 mb-3 font-bold text-xl"> Menu </Text>

          {restaurent?.dishes.map((dish: any) => (
            <DishItem key={dish._id} id={dish._id} dishData={dish} />
          ))}
        </View>
      </ScrollView>
    </>
  );
};

export default RestaurantScreen;
