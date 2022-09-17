import 'react-native';
import Cartslice, { addToCart, removeFromCart, 
    selectCartItemsTotal, selectCartItemsQuantity, selectMemoizedItemsQuantity } from './cartSlice'
import { Item, State } from './cartSlice'
import { RootState } from "../store";
import { IRestaurant } from '../../components/FeaturedSection/Restaurant';

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

  describe("selectors", () => {
    beforeEach(() => {
      selectMemoizedItemsQuantity.resetRecomputations();
    })

    it('should return 0 with empty cart', () => {
      const initialState: RootState = {
        cart: {
          items: { },
          isEmpty: true,
          total: 0
        },
        restaurant: { restaurant: {}  as IRestaurant }
      }
      const result = selectCartItemsTotal(initialState);
      expect(result).toEqual(0);
    })

    it('test calculate cart items total', () => {
      const initialState: RootState = {
        cart: {
          items: { abc : {id: 'abc', quantity: 4, price: 100} as Item,
          abcd : {id: 'abcd', quantity: 2, price: 60} as Item },
          isEmpty: true,
          total: 0
        },
        restaurant: { restaurant: {}  as IRestaurant }
      }
      const result = selectCartItemsTotal(initialState);
      expect(result).toEqual(520);
    })

    it('test calculate cart items quantity', () => {
      const initialState: RootState = {
        cart: {
          items: { abc : {id: 'abc', quantity: 4, price: 100} as Item,
          abcd : {id: 'abcd', quantity: 2, price: 60} as Item },
          isEmpty: true,
          total: 0
        },
        restaurant: { restaurant: {}  as IRestaurant }
      }
      const result = selectCartItemsQuantity(initialState);
      expect(result).toEqual(6);
    })

    it('should not compute again with same state', ()=> {
      const initialState: RootState = {
        cart: {
          items: { abc : {id: 'abc', quantity: 4, price: 100} as Item,
          abcd : {id: 'abcd', quantity: 2, price: 60} as Item },
          isEmpty: true,
          total: 0
        },
        restaurant: { restaurant: {}  as IRestaurant }
      }
      const result = selectMemoizedItemsQuantity(initialState);
      expect(result).toEqual(6);
      expect(selectMemoizedItemsQuantity.recomputations()).toEqual(1);
      selectMemoizedItemsQuantity(initialState);
      expect(selectMemoizedItemsQuantity.recomputations()).toEqual(1);
    })

    it('should Recompute with different state', ()=> {
      const initialState: RootState = {
        cart: {
          items: { abc : {id: 'abc', quantity: 4, price: 100} as Item,
          abcd : {id: 'abcd', quantity: 2, price: 60} as Item },
          isEmpty: true,
          total: 0
        },
        restaurant: { restaurant: {}  as IRestaurant }
      }
      const result = selectMemoizedItemsQuantity(initialState);
      expect(result).toEqual(6);
      expect(selectMemoizedItemsQuantity.recomputations()).toEqual(1);
      selectMemoizedItemsQuantity({...initialState, cart: {  items: { abc : {id: 'abc', quantity: 2, price: 100} as Item,
      abcd : {id: 'abcd', quantity: 2, price: 60} as Item },
      isEmpty: true,
      total: 0}});
      expect(selectMemoizedItemsQuantity.recomputations()).toEqual(2);
    })
    
  })
  
})

