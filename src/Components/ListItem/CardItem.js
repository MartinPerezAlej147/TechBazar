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

const CardItem = ({ navigation, item, onConfirmDelete, onEdit }) => {
	const [isEnabled, setIsEnabled] = useState(false)
	const toggleSwitch = () => setIsEnabled((previousState) => !previousState)
	return (
		<View style={isEnabled ? styles.cardItemActive : styles.cardItemInactive}>
			<Switch
				thumbColor={isEnabled ? colors.secondary : colors.error}
				onValueChange={toggleSwitch}
				value={isEnabled}
			/>
			<TouchableOpacity
				onPress={() => navigation.navigate("ItemDetails", { id: item.id })}
				styles={styles.card}
			>
				<Image
					style={styles.image}
					resizeMode="cover"
					source={{ uri: item.thumbnail }}
				/>
				<Text style={styles.card}>{item.title}</Text>
				<Text style={styles.card}> $ {item.price}</Text>
				<Text style={styles.card}>{item.stock}</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.imageContainer}
				onPress={() => onEdit(item, true)}
			>
				<Image
					style={styles.iconsImage}
					source={require("../../Sources/lapiz.png")}
				/>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.imageContainer}
				onPress={() => onConfirmDelete(item, true)}
			>
				<Image
					style={styles.iconsImage}
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
		flexDirection: "row",
		width: "100%",
		color: colors.white,
	},
	iconsImage: {
		margin: 5,
		height: 20,
		width: 20,
	},
	imageContainer: {
		backgroundColor: colors.secondary,
		borderRadius: 8,
	},
	image: {
		width: 50,
		height: 50,
	},
})
export default CardItem
