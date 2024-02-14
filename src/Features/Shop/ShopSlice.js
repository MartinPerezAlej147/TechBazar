import { createSlice } from "@reduxjs/toolkit"
import allGames from "../../Data/games.json"
import allPlatforms from "../../Data/platforms.json"

const initialState = {
	value: {
		games: allGames,
		plataforms: allPlatforms,
		gameSelected: {},
		gamesFilteredByPlatform: [],
	},
}

export const shopSlice = createSlice({
	name: "shop",
	initialState,
	reducers: {
		setGamesFilteredByPlataform: (state, actions) => {
			state.value.gamesFilteredByPlatform = state.value.games.filter(
				(game) => game.platform == actions.payload
			)
		},
		setGameSelected: (state, actions) => {
			state.value.gameSelected = state.value.games.find(
				(game) => game.id === actions.payload
			)
		},
	},
})

export const { setGamesFilteredByPlataform, setGameSelected } =
	shopSlice.actions

export default shopSlice.reducer
