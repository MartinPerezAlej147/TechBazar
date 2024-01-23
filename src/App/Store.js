import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"
import { shopApi } from "./Services/ShopServices"
import { authApi } from "./Services/Auth"
import shopReducer from "../Features/Shop/ShopSlice"
import cartReducer from "../Features/Cart/CartSlice"
import authReducer from "../Features/Auth/AuthSlice"

export const store = configureStore({
	reducer: {
		shop: shopReducer,
		cart: cartReducer,
		auth: authReducer,
		[shopApi.reducerPath]: shopApi.reducer,
		[authApi.reducerPath]: authApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(shopApi.middleware, authApi.middleware),
})

setupListeners(store.dispatch)
