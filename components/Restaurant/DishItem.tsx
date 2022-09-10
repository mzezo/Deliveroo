import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import Currency from 'react-currency-formatter';
import {MinusCircleIcon, PlusCircleIcon} from 'react-native-heroicons/outline';
import {useDispatch, useSelector} from 'react-redux';
import {
  addToCart,
  removeFromCart,
  selectCartItem,
} from '../../redux/cart/cartSlice';
import {urlFor} from '../../sanity';
import {RootState} from '../../redux/store';

const DishItem = ({id, dishData}: any) => {
  const [isPressed, setIsPressed] = useState(false);
  const dispatch = useDispatch();
  const cartItem = useSelector((state: RootState) => selectCartItem(state, id));

  const addItemToCartHandler = () => {
    dispatch(
      addToCart({
        id,
        item: {...dishData, ...cartItem, price: dishData?.price, id: dishData?._id},
      }),
    );
  };

  const removeItemFromCart = () => {
    dispatch(removeFromCart({id}));
  };

  return (
    <>
      <TouchableOpacity
        //@ts-ignore
        className="bg-white border p-4 border-gray-200"
        onPress={() => setIsPressed(pressed => !pressed)}>
        <View className="flex-row">
          <View className="flex-1 pr-2">
            <Text className="text-lg mb-1"> {dishData?.name} </Text>
            <Text className="text-gray-400">
              {' '}
              {dishData?.short_description}{' '}
            </Text>
            <Text className="text-gray-400 mt-2">
              <Currency quantity={dishData?.price} currency="GBP" />
            </Text>
          </View>
          <View>
            <Image
              style={{
                borderWidth: 1,
                borderColor: '#F3F3F4',
              }}
              source={{
                uri: urlFor(dishData?.image).url(),
              }}
              className="h-20 w-20 bg-gray-300 p-4"
            />
          </View>
        </View>
      </TouchableOpacity>
      {isPressed && (
        <View className="bg-white px-4">
          <View className="flex-row items-center space-x-2 pb-2">
            <TouchableOpacity onPress={removeItemFromCart}>
              <MinusCircleIcon
                color={cartItem?.quantity! > 0 ? '#00CCBB' : 'gray'}
                size={40}
              />
            </TouchableOpacity>
            <Text> {cartItem?.quantity || 0} </Text>
            <TouchableOpacity onPress={addItemToCartHandler}>
              <PlusCircleIcon color="#00CCBB" size={40} />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default DishItem;
