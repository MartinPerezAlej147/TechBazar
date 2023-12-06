import { useState } from "react"
import { colors } from "../../Global/Colors"
import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	Image,
	Switch,
} from "react-native"

const CardItem = ({ item, onConfirmDelete, onEdit }) => {
	const [isEnabled, setIsEnabled] = useState(false)
	const toggleSwitch = () => setIsEnabled((previousState) => !previousState)
	return (
		<View style={isEnabled ? styles.cardItemActive : styles.cardItemInactive}>
			<Switch
				thumbColor={isEnabled ? colors.secondary : colors.error}
				onValueChange={toggleSwitch}
				value={isEnabled}
			/>
			<Text style={styles.card}>{item.title}</Text>
			<Text style={styles.card}> $ {item.price}</Text>
			<Text style={styles.card}>{item.quantity}</Text>
			<TouchableOpacity
				style={styles.imageContainer}
				onPress={() => onEdit(item, true)}
			>
				<Image
					style={styles.image}
					source={require("../../Sources/lapiz.png")}
				/>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.imageContainer}
				onPress={() => onConfirmDelete(item, true)}
			>
				<Image
					style={styles.image}
					source={require("../../Sources/cruz.png")}
				/>
			</TouchableOpacity>
		</View>
	)
}
const styles = StyleSheet.create({
	cardItemActive: {
		backgroundColor: colors.error,
		flexDirection: "row",
		padding: 10,
		margin: 10,
		justifyContent: "space-around",
		alignItems: "center",
	},
	cardItemInactive: {
		backgroundColor: colors.tertiary,
		flexDirection: "row",
		padding: 10,
		margin: 10,
		justifyContent: "space-around",
		alignItems: "center",
	},

	card: {
		color: colors.white,
	},
	image: {
		margin: 5,
		height: 20,
		width: 20,
	},
	imageContainer: {
		backgroundColor: colors.secondary,
		borderRadius: 8,
	},
})
export default CardItem
