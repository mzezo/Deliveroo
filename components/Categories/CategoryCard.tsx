import { Text, TouchableOpacity, Image } from 'react-native'
import React, { FC } from 'react'

interface CategoryCardProps  {
    imgUrl: string
    title: string
}

const CategoryCard: FC<CategoryCardProps> = ({imgUrl, title}) => {
  return (
    <TouchableOpacity 
        //@ts-ignore
        className="relative mx-1"
    >
            <Image 
                source={{
                    uri: imgUrl
                }}
                className='h-24 w-24 rounded'
            />
            
        <Text className='absolute bottom-1 left-1 text-white font-bold'>{title}</Text>
    </TouchableOpacity>
  )
}

export default CategoryCard;
