import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useMemo, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurant } from '../../redux/restaurant/restaurantSlice';
import { removeFromCart, selectCartItem, selectCartItems, selectCartTotal } from '../../redux/cart/cartSlice';
import { XCircleIcon } from 'react-native-heroicons/outline';
import Currency from "react-currency-formatter"

const CartScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  const items = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const [groupedItemsInCart, setGroupedItemsInCart] = useState([]);
  const dispatch = useDispatch();

  useMemo(() => {
    const groupedItems = items.reduce((results, item) => {
        (results[item.id] = results[item.id] || []).push(item);
        return results;
    }, {});
    setGroupedItemsInCart(groupedItems);
  }, [])

  return (
    <SafeAreaView className='flex-1 bg-white'>
      <View className='flex-1 bg-gray-100'>
        <View className='p-5 border-b border-[#00CCBB] bg-white shadow-xs'>
          <View>
            <Text className='text-lg font-bold text-center'>Cart</Text>
            <Text className='text-center text-gray-400'>"Restaurant Title"</Text>
          </View>
          <TouchableOpacity
            //@ts-ignore
            onPress={navigation.goBack()}
            //@ts-ignore
            className="rounded-full bg-gray-100 absolute top-3 right-5"
          >
            <XCircleIcon color={"#00CCBB"} height={50} width={50}/>
          </TouchableOpacity>
        </View>
        <View className='flex-row items-center space-x-4 px-4 py-3 bg-white my-5'>
          <Image
            source={{
              uri: ''
            }}
            className="h-7 w-7 rounded-full p-4 bg-gray-300"
          />
          <Text className='flex-1'>Deliver in 40-60 Min</Text>
          <TouchableOpacity>
            <Text className='text-[#00CCBB]'>Change</Text>
          </TouchableOpacity>
        </View>
        <ScrollView className='divide-y divide-gray-300'>
          {Object.entries(groupedItemsInCart).map(([key, items]) => (
            <View 
              key={key}
              className='flex-row items-center space-x-3 bg-white py-2 px-5'  
            >
              <Text className='text-[#00CCBB]'>{items.length} x</Text>
              <Image 
                source={{
                  uri: ''
                }}
                className='w-12 h-12 rounded-full'
              />
              <Text className='flex-1'>{items[0]?.name}</Text>

              <Text className='text-gray-600'>
                <Currency  quantity={items[0]?.price} currency="EGP" />
              </Text>

              <TouchableOpacity>
                <Text
                  className='text-[#00CCBB] text-xs'
                  onPress={() => dispatch(removeFromCart({id: key}))}
                >
                  Remove
                </Text>
              </TouchableOpacity>

            </View>
          ))}
        </ScrollView>
        <View className='bg-white p-5 mt-5 space-y-4'>
          <View className='flex-row justify-between'>
             <Text className='text-gray-400'>Subtotal</Text>
             <Text className='text-gray-400'>
               <Currency quantity={cartTotal} currency="EGP" />
             </Text>
          </View>

          <View className='flex-row justify-between'>
             <Text className='text-gray-400'>Delivery Fee</Text>
             <Text className='text-gray-400'>
               <Currency quantity={9.99} currency="EGP" />
             </Text>
          </View>

          <View className='flex-row justify-between'>
             <Text >Order Total</Text>
             <Text className='font-extrabold'>
               <Currency quantity={cartTotal + 9.99} currency="EGP" />
             </Text>
          </View>
          <TouchableOpacity 
            //@ts-ignore
            className="bg-[#00CCBB] p-4 rounded-lg"
            //@ts-ignore
            onPress={() => navigation.navigate('PreparingOrderScreen')}
          >
            <Text className='text-white text-center text-lg font-bold'>
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default CartScreen