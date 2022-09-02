import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {
  AdjustmentsIcon,
  ChevronDownIcon,
  SearchIcon,
  UserIcon,
} from 'react-native-heroicons/outline';
import Categories from '../../components/Categories/Categories';
import FeaturedSection from '../../components/FeaturedSection/FeaturedSection';

const HomeScreen = ({navigation} : any) => {
  // const navigation = useNavigation();

  useLayoutEffect(() => {
    // navigation.setOptions({
    //   headerShown: false,
    // });
  }, []);

  return (
    <SafeAreaView className="bg-white pt-5">
      <View className="flex-row items-center space-x-2 mx-4 pb-2">
        <Image
          source={{
            uri: 'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-Clipart.png',
          }}
          className="h-7 w-7 rounded-full bg-gray-300 p-4"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <Text className="font-bold text-xl">
            {' '}
            Current Location
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>
        <UserIcon size={35} color="#00ccBB" />
      </View>
      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row items-center flex-1 space-x-2 bg-gray-200 px-2">
          <SearchIcon color="gray" size={20} />
          <TextInput
            placeholder="Search Your Favourite Restaurant..."
            keyboardType="default"
          />
        </View>
        <AdjustmentsIcon color="#00CCBB" />
      </View>
      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{paddingBottom: 100}}>
        {/* Categories */}
        <Categories />

        {/* Featured Section */}
        <FeaturedSection
          id="12"
          title="Featured"
          describtion="Top Restaurants"
          featuredCategory="featured"
          navigation={navigation}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
