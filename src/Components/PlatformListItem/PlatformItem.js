import { Pressable, StyleSheet, Text, View } from "react-native"
import { colors } from "../../Global/Colors"
import CardShadow from "../../Wrappers/CardShadow"

const PlatformItem = ({ platform, navigation }) => {
	return (
		<Pressable onPress={() => navigation.navigate("Platforms", { platform })}>
			<CardShadow style={styles.container}>
				<Text style={styles.text}>{platform}</Text>
			</CardShadow>
		</Pressable>
	)
}

export default PlatformItem

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
