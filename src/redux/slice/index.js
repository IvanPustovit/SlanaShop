// import { createSlice, createStore } from "@reduxjs/toolkit";

// const initialState = {
//   amount: 0,
//   inCartValue: [],
// };

// const stateShop = createSlice({
//   name: "product",
//   initialState,
//   reducers: {
//     PlusMinusItem: (state, index, type) => {
//       // const newState = [...state];
//       const element = { ...state[index] };
//       let ins = state.inCartValue.indexOf((el) => el.id);

//       switch (type) {
//         case "plus":
//           return (state.inCartValue[ins].amountInCart += 1);

//         case "minus":
//           element.amountInCart = element.amountInCart - 1;

//           // element.amountInCart = element.amountInCart - 1;
//           break;
//         default:
//           break;
//       }
//       // newState[index] = element;
//     },
//     plus: (state, action, index, name) => {
//       let ins = state.inCartValue.indexOf((el) => el.payload);
//       console.log(index);
//       // state.inCartValue[ins].amountInCart += 1;
//     },
//     minus: (state, action) => {
//       if (state.amount === 0) {
//         return;
//       }
//       state.amount -= 1;
//     },
//     setInCart: (state, item) => {
//       state.inCartValue.push(item.payload);
//     },
//   },
// });

// export const { plus, minus, setInCart, PlusMinusItem } = stateShop.actions;
// export const amount = (state) => state.product.amount;
// export const inCartProduct = (state) => state.product.inCartValue;

// export default stateShop.reducer;
