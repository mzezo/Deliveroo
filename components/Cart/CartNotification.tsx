import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectCartItems, selectCartTotal } from '../../redux/cart/cartSlice'
import { useNavigation } from '@react-navigation/native'
import Currency from "react-currency-formatter"

const CartNotification = () => {

  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const navigation = useNavigation();

  return (
    <View className='absolute bottom-10 w-full z-50'>
      <TouchableOpacity
        //@ts-ignore
        onPress={() => navigation.navigate('Cart', {})}
        //@ts-ignore
        className='bg-[#00CCBB] mx-5 p-4 rounded-lg flex-row items-center space-x-1'
      >
        <Text className='text-white font-extrabold text-lg bg-[#01A296] py-1 px-2'>
            { Object.keys(cartItems)?.length }
        </Text>
        <Text className='flex-1 text-white font-extrabold text-lg text-center'>
            View Cart
        </Text>
        <Text className='text-lg text-white font-extrabold'>
            <Currency quantity={cartTotal} currency="EGP" />
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default CartNotification