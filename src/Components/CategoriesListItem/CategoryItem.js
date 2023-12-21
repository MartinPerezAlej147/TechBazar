import { Pressable, StyleSheet, Text, View } from "react-native"
import { colors } from "../../Global/Colors"
import CardShadow from "../../Wrappers/CardShadow"

const CategoryItem = ({ category, navigation }) => {
	return (
		<Pressable onPress={() => navigation.navigate("Category", { category })}>
			<CardShadow style={styles.container}>
				<Text style={styles.text}>{category}</Text>
			</CardShadow>
		</Pressable>
	)
}

export default CategoryItem

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.tertiary,
		width: "80%",
		marginHorizontal: "10%",
		margin: 5,
		padding: 10,
		justifyContent: "center",
		alignItems: "center",
	},
	text: {
		color: "white",
	},
})
