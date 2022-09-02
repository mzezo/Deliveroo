import sanityClient from "../sanity";
import { useAsync } from './../hooks/useAsync';


export async function getRestaurant(id: string) {
    await sanityClient.fetch( 
        `*[_type == "restaurant" && _id == $id]`, { id: id}
    )
}

export default function useRestaurant(id: string) {
    return useAsync(() => getRestaurant(id))
}   
