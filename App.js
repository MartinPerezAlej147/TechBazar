import { useState } from "react"
import { View, StyleSheet } from "react-native"
import ItemListCategories from "./src/Screens/ItemListCategories"
import Home from "./src/Screens/Home"
import { useFonts } from "expo-font"

const App = () => {
	const [categorySelected, setCategorySelected] = useState("")

	const [fontLoaded] = useFonts({
		NewtonHowardFont: require("./assets/Fonts/NewtonHowardFont.ttf"),
		NewtonHowardItalicFont: require("./assets/Fonts/NewtonHowardFontItalic.ttf"),
		CybordPunkFont: require("./assets/Fonts/CyborgPunk.ttf"),
	})

	const handlerGoBack = () => {
		setCategorySelected("")
	}

	if (!fontLoaded) return null

	return (
		<View style={styles.container}>
			{categorySelected ? (
				<ItemListCategories
					category={categorySelected}
					handlerGoBack={handlerGoBack}
				/>
			) : (
				<Home
					setCategorySelected={setCategorySelected}
					handlerGoBack={handlerGoBack}
				/>
			)}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "start",
		marginTop: 50,
	},
})
export default App
