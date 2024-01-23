import { createSlice } from "@reduxjs/toolkit"
import allItems from "../../Data/Items.json"
import allCategories from "../../Data/Categories.json"

const initialState = {
	value: {
		items: allItems,
		categories: allCategories,
		itemSelected: {},
		itemsFilteredByCategory: [],
	},
}

export const shopSlice = createSlice({
	name: "shop",
	initialState,
	reducers: {
		setItemsFilteredByCategory: (state, actions) => {
			state.value.itemsFilteredByCategory = state.value.items.filter(
				(item) => item.category == actions.payload
			)
		},
		setItemSelected: (state, actions) => {
			state.value.itemSelected = state.value.items.find(
				(item) => item.id === actions.payload
			)
		},
	},
})

export const { setProductsFilteredByCategory, setProductSelected } =
	shopSlice.actions

export default shopSlice.reducer
