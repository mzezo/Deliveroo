import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux';
import { selectRestaurant } from '../../redux/restaurant/restaurantSlice';
import { XIcon } from 'react-native-heroicons/outline';
import * as Progress from 'react-native-progress';

const DeliveryScreen = () => {
    const navigation = useNavigation();
    const restaurant = useSelector(selectRestaurant);

  return (
    <View className='bg-[#00CCBB] flex-1'>
      <SafeAreaView className='z-50'>
        <View className='flex-row justify-between items-center p-5'>
            <TouchableOpacity>
                <XIcon color={"White"} size={30} />
            </TouchableOpacity>
            <Text className='text-white font-light text-lg'> Order Help</Text>
        </View>
        <View className='bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md'>
            <View className='flex-row justify-between'>
                <View>
                    <Text className='text-lg text-gray-400'>Estimated Arrival</Text>
                    <Text className='text-4xl font-bold'> 45-60 Minutes</Text>
                </View>
                <Image 
                    source={{
                        uri: "https://links.papereact.com/fls"
                    }}
                    className="w-20 h-20"
                />
            </View>
            <Progress.Bar size={30} indeterminate={true}  color="#00CCBB" />
            <Text className='mt-3 text-gray-400'> Your Order To Restaurant is being prepared </Text>
        </View>
      </SafeAreaView>
    </View>
  )
}

export default DeliveryScreen