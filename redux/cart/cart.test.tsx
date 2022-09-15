import 'react-native';
import Cartslice, { addToCart, removeFromCart } from './cartSlice'
import { Item, State } from './cartSlice'
import { RootState } from "../store";

describe('cart slice', () => {

  describe('add To Cart', () => {
    
    it('test add to cart', () => {
      const initialActionState = {id: '1', item: {id: '1', quantity: 0} as Item};
      const initialState: State = {
        items: {},
        isEmpty: true,
        total: 0
    }
      const action = addToCart(initialActionState)
      const result = Cartslice(initialState, action);
      expect(result.items[initialActionState.id].quantity).toEqual(1);

    });

    it('test add to cart multiple times', () => {
      const initialActionState = {id: 'abc', item: {id: 'abc', quantity: 0} as Item};
      const initialState = undefined
      const action = addToCart(initialActionState)
      let result = Cartslice(initialState, action);
      expect(result.items[initialActionState.id].quantity).toEqual(1);
    });
  })

  describe('remove From Cart', () => {
    it('test remove From Cart', () => {
      const initialState: State = {
        items: { abc : {id: 'abc', quantity: 4} as Item},
        isEmpty: true,
        total: 0
      }
      const action = removeFromCart({id: 'abc'})
      let result = Cartslice(initialState, action);
      expect(result.items['abc'].quantity).toEqual(3);
      result = Cartslice(result, action);
      result = Cartslice(result, action);
      expect(result.items['abc'].quantity).toEqual(1);
    });

    it('test remove item From Cart', () => {
      const initialState: State = {
        items: { abc : {id: 'abc', quantity: 1} as Item},
        isEmpty: true,
        total: 0
      }
      const action = removeFromCart({id: 'abc'})
      let result = Cartslice(initialState, action);
      expect(result.items).toMatchObject({})
    });
  })
})

