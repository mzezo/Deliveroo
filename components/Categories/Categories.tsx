import { ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import CategoryCard from './CategoryCard'
import sanityClient from '../../sanity'

const Categories = () => {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // sanityClient.fetch(
    //   `*[_type == "category"]`
    // ).then((data) => console.log('categories', data))

    // sanityClient.fetch(
    //   `*[_type == "category" && _id == $id][0]`, {id: '7511388b-856e-4dd2-8ad9-9ece787c8d69'}
    // ).then((data) => console.log('categories2', data))


  }, []);

  return (
    <ScrollView 
        contentContainerStyle={{
            paddingHorizontal:15,
            paddingTop: 15
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
    >
      <CategoryCard imgUrl='https://links.papareact.com/gn7' title="testing" />
      <CategoryCard imgUrl='https://links.papareact.com/gn7' title="testing" />
      <CategoryCard imgUrl='https://links.papareact.com/gn7' title="testing" />
      <CategoryCard imgUrl='https://links.papareact.com/gn7' title="testing" />
      <CategoryCard imgUrl='https://links.papareact.com/gn7' title="testing" />
      <CategoryCard imgUrl='https://links.papareact.com/gn7' title="testing" />
      <CategoryCard imgUrl='https://links.papareact.com/gn7' title="testing" />
      <CategoryCard imgUrl='https://links.papareact.com/gn7' title="testing" />
    </ScrollView>
  )
}

export default Categories