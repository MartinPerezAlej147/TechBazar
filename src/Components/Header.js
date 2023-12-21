import { StyleSheet, Text, View, TouchableOpacity } from "react-native"
import { colors } from "../Global/Colors"

const Header = () => {
	return (
		<View style={styles.container}>
			<TouchableOpacity>
				<Text style={styles.text}>TechBazar</Text>
			</TouchableOpacity>
		</View>
	)
}

export default Header

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		backgroundColor: colors.primaryVariant,
		width: "100%",
		height: 100,
		justifyContent: "center",
		alignItems: "center",
	},
	backImage: {
		padding: 10,
		margin: 10,
		height: 25,
		width: 25,
	},
	backImageContainer: {
		backgroundColor: colors.secondary,
		margin: 10,
		borderRadius: 50,
	},
	text: {
		color: "white",
		fontSize: 50,
		fontFamily: "NewtonHowardFont",
	},
})
