import { FlatList, StyleSheet, Text, View } from "react-native"
import AllCategories from "../Data/Categories.json"
import CategoryItem from "./CategoriesListItem/CategoryItem"
import { colors } from "../Global/Colors"

const Categories = ({ setCategorySelected }) => {
	return (
		<>
			<View style={styles.containerText}>
				<Text style={styles.text}>Categories</Text>
			</View>
			<FlatList
				data={AllCategories}
				keyExtractor={(item) => item}
				renderItem={({ item }) => (
					<CategoryItem
						setCategorySelected={setCategorySelected}
						category={item}
					/>
				)}
			/>
		</>
	)
}

export default Categories

const styles = StyleSheet.create({
	containerText: {
		backgroundColor: colors.primary,
		width: "100%",
		padding: 10,
	},
	text: {
		color: "grey",
		fontSize: 15,
		fontFamily: "CybordPunkFont",
	},
})
