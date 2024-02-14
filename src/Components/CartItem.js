import { StyleSheet, Text, View } from "react-native"
import { colors } from "../Global/Colors"

const CartItem = ({ item }) => {
	return (
		<View style={styles.container}>
			<View style={styles.textContainer}>
				<Text style={styles.text1}>{item.title}</Text>
				<Text style={styles.text2}>$ {item.price}</Text>
			</View>
		</View>
	)
}

export default CartItem

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.green3,
		margin: 10,
		padding: 10,
		height: 100,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		borderRadius: 10,
		borderWidth: 2,
	},
	textContainer: {
		width: "70",
		gap: 5,
	},
	text1: {
		fontSize: 15,
		color: colors.lightGray,
		fontFamily: "CybordPunkFont",
	},
	text2: {
		fontSize: 10,
		color: colors.lightGray,
		fontFamily: "CybordPunkFont",
	},
})
