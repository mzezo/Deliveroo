import { useAsync } from './../hooks/useAsync';
import sanityClient from "../sanity";

async function getRestaurants() {
  return await sanityClient.fetch(
    `*[_type == "restaurant"] {
      ...,
      dishes[]->,
      type->
    }`
  )
}

export default function useCategories() {
  return useAsync(getRestaurants)
}           