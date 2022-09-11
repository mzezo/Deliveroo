import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux';
import { selectRestaurant } from '../../redux/restaurant/restaurantSlice';
import { XIcon } from 'react-native-heroicons/outline';
import * as Progress from 'react-native-progress';
import MapView, { Marker } from 'react-native-maps';

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
            <Progress.Bar indeterminate={true}  color="#00CCBB" />
            <Text className='mt-3 text-gray-400'> Your Order To Restaurant is being prepared </Text>
        </View>
      </SafeAreaView>
      <MapView
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        className='flex-1 -mt-10 z-0'
        mapType='standard'
      >
        <Marker
          coordinate={{
            latitude: 37.78825,
            longitude: -122.4324
          }}
        />
      </MapView>
      <SafeAreaView className='bg-white flex-row items-center space-x-5 h-28'>
        <Image source={{
            uri: 'https://links.paperreact.com/wru'
          }}
          className='h-12 w-12 bg-gray-300 p-4 rounded-full ml-5'
        />
        <View className='flex-1'>
          <Text className='text-lg'>Mohamed zezo</Text>
          <Text className='text-gray-400'>Your Rider</Text>
        </View>
        <Text className='text-[#00CCBB] text-lg mr-5 font-bold'>call</Text>
      </SafeAreaView>
    </View>
  )
}

export default DeliveryScreen