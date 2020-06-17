import { createAction } from "@reduxjs/toolkit";

export const addToShop = createAction("ADD_TO_SHOP");
export const getItems = createAction("GET_ITEM");
export const deleteItem = createAction("DELETE_ITEM");

export const addToCart = createAction("ADD_TO_CART");
export const deleteToCart = createAction("DELETE_TO_CART");
export const plusAmountItem = createAction("PLUS_AMOUNT_ITEM");
export const minusAmountItem = createAction("MINUS_AMOUNT_ITEM");
export const totalAmount = createAction("TOTAL_AMOUNT");
export const totalPrice = createAction("TOTAL_PRICE");

export const setUser = createAction("SET_USER");
