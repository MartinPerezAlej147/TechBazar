import { colors } from "../../Global/Colors"
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native"

const CardItem = ({ navigation, item, onConfirmDelete, onEdit }) => {
	return (
		<View style={styles.cardItem}>
			<TouchableOpacity
				onPress={() => navigation.navigate("ItemDetails", { id: item.id })}
			>
				<Text style={styles.cardTitle}>{item.title}</Text>
				<Image
					style={styles.image}
					resizeMode="cover"
					source={{ uri: item.thumbnail }}
				/>
				<Text style={styles.cardPrice}> $ {item.price}</Text>
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
	cardItem: {
		backgroundColor: colors.tertiary,
		padding: 10,
		margin: 10,
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
	},
	cardTitle: {
		color: colors.white,
	},
	cardPrice: {
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
