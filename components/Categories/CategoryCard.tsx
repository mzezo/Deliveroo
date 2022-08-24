import { Text, TouchableOpacity, Image } from 'react-native'
import React, { FC } from 'react'
import { urlFor } from "../../sanity"
import { ICategory } from './Categories.d'

interface CategoryCardProps {
    item: ICategory
}

const CategoryCard: FC<CategoryCardProps> = ({ item }) => {
  return (
    <TouchableOpacity 
        //@ts-ignore
        className="relative mx-1"
    >
        <Image 
            source={{
                uri: urlFor(item.image).url()
            }}
            className='h-36 w-36 rounded'
        />
        <Text className='absolute bottom-1 left-1 text-white font-bold'>{ item.title }</Text>
    </TouchableOpacity>
  )
}

export default CategoryCard;
