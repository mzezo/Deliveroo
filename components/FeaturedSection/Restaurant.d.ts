import { SanityImage } from '../../types'

export interface IRestaurant { 
    _id: string
    image: SanityImage
    address: string
    name: string
    rating: number
    short_description: string
    dishes: any[],
    lat: number,
    lng: number
}