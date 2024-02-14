import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native"
import { colors } from "../Global/Colors"
import { deleteAllSession } from "../DataBase"
import { useDispatch } from "react-redux"
import { clearUser } from "../Features/Auth/AuthSlice"

const Header = () => {
	const dispatch = useDispatch()
	const onLogout = () => {
		deleteAllSession().then((result) => console.log(result))
		dispatch(clearUser())
	}

	return (
		<View style={styles.container}>
			<TouchableOpacity>
				<Text style={styles.text}>PlayerParadise</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.imageContainer} onPress={() => onLogout}>
				<Image
					style={styles.iconsImage}
					source={require("../Sources/logout.png")}
				/>
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
	imageContainer: {
		backgroundColor: colors.secondary,
		borderRadius: 8,
	},
	iconsImage: {
		margin: 5,
		height: 20,
		width: 20,
	},
})
