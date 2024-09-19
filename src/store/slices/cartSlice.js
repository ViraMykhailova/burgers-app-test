import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  total: 0.0,
};

const calculateTotal = (cartArr) => {
  return cartArr
    .reduce((total, item) => total + item.burgerPrice * item.count, 0.0)
    .toFixed(2);
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      let tempCart = [];

      if (
        state.cart.findIndex((item) => item.name === action.payload.name) !== -1
      ) {
        tempCart = state.cart.map((item) => {
          if (item.name === action.payload.name) {
            return {
              ...item,
              count: item.count + 1,
            };
          }
          return item;
        });

        state.cart = tempCart;
        state.total = calculateTotal(tempCart);
      } else {
        tempCart = [...state.cart, { ...action.payload, count: 1 }];

        state.cart = tempCart;
        state.total = calculateTotal(tempCart);
      }
    },
    removeFromCart: (state, action) => {
      const tempCart = state.cart.filter((item) => item.id !== action.payload);

      state.cart = tempCart;
      state.total = calculateTotal(tempCart);
    },
    increaseAmount: (state, action) => {
      const tempCart = state.cart.map((item) => {
        if (item.id === action.payload) {
          return { ...item, count: item.count + 1 };
        }
        return item;
      });

      state.cart = tempCart;
      state.total = calculateTotal(tempCart);
    },
    decreaseAmount: (state, action) => {
        const tempCart = state.cart.map(item => {
            if(item.id === action.payload) {
                return {...item,
                    count: item.count ===1 ? item.count : item.count -1 
                }
            }
            return item;
        });
        state.cart = tempCart;
        state.total = calculateTotal(tempCart);
    },
    resetCart: (state) => {
        state.cart = [];
        state.total = 0.00
    }
  },
});

export const { addItem , removeFromCart, increaseAmount, decreaseAmount, resetCart } = cartSlice.actions;

export default cartSlice.reducer;
