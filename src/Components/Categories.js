import { StyleSheet } from "react-native"
import { useGetCategoriesQuery } from "../App/Services/ShopServices"
import { colors } from "../Global/Colors"
import CategoryItem from "./CategoriesListItem/CategoryItem"

const Categories = ({ navigation, route }) => {
	const { data, isLoading, error } = useGetCategoriesQuery()

	return (
		<>
			<View style={styles.containerText}>
				<Text style={styles.text}>Categories</Text>
			</View>
			<FlatList
				data={data.Categories}
				keyExtractor={(item) => item}
				renderItem={({ item }) => (
					<CategoryItem category={item} navigation={navigation} />
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
