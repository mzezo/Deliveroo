import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { FC } from 'react'
import { LocationMarkerIcon, StarIcon } from 'react-native-heroicons/outline'
import { urlFor } from '../../sanity'
import { useNavigation } from '@react-navigation/native'

interface RestuarantCardProps {
    id: string
    imgUrl: string
    title: string
    rating: number
    genre: string
    address: string
    short_description: string
    dishes: any[]
    lng: string
    lat: string
}

const RestuarantCard: FC<RestuarantCardProps> = ({
    id,
    imgUrl,
    title,
    rating,
    genre,
    address,
    short_description,
    dishes,
    lng, 
    lat
}) => {

  const navigation = useNavigation();

  return (
   <TouchableOpacity 
        //@ts-ignore
        className="bg-white mr-3 shadow"
        //@ts-ignore
        onPress={() => {navigation.navigate('Restaurant', {id})}}
    >
       <Image
          source={{
              uri: imgUrl
            //   uri: urlFor(imgUrl).url()
          }}
          className="h-36 w-64 rounded-sm"
        />
        <View className='px-3 pb-4'>
            <Text className='font-bold text-lg pt-2'>{title}</Text>
            <View className='flex-row items-center space-x-1'>
                <StarIcon color="green" opacity={0.5} size={22} />
                <Text className='text-xs text-gray-500'>
                    <Text className='text-green-500'>{rating}</Text>. {genre}
                </Text>
            </View>
            <View className='flex-row items-center space-x-1'>
                <LocationMarkerIcon color="gray" opacity={0.4} size={22} />
                <Text className='text-xs text-gray-500'>Nearby . {address}</Text>

            </View>

        </View>
   </TouchableOpacity>
  )
}

export default RestuarantCard