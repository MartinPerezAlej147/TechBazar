import { colors } from "../../Global/Colors"
import {
	View,
	TextInput,
	StyleSheet,
	Image,
	TouchableOpacity,
} from "react-native"

const AddItem = ({
	valueTitle,
	valuePrice,
	valueStock,
	onChangeTitle,
	onChangePrice,
	onChangeStock,
	addItem,
}) => {
	return (
		<View style={styles.inputContainer}>

			<TextInput
				style={styles.input}
				placeholder="Nombre"
				placeholderTextColor={colors.white}
				value={valueTitle}
				onChangeText={(t) => onChangeTitle(t)}
			/>
			<TextInput
				style={styles.input}
				placeholder="Precio"
				placeholderTextColor={colors.white}
				value={valuePrice}
				onChangeText={(t) => onChangePrice(t)}
				keyboardType="numeric"
			/>
			<TextInput
				style={styles.input}
				placeholder="Stock"
				placeholderTextColor={colors.white}
				value={valueStock}
				onChangeText={(t) => onChangeStock(t)}
				keyboardType="numeric"
			/>

			<TouchableOpacity onPress={addItem} style={styles.addImageContainer}>
				<Image
					style={styles.addImage}
					source={require("../../Sources/mas.png")}
				/>
			</TouchableOpacity>
		</View>
	)
}
const styles = StyleSheet.create({
	inputContainer: {
		backgroundColor: colors.primary,
		flexDirection: "row",
		alignItems: "center",
		width: "100%",
		justifyContent: "space-around",
	},
	input: {
		paddingHorizontal: 10,
		paddingVertical: 5,
		width: 100,
		color: colors.white,
	},
	addImage: {
		padding: 10,
		margin: 10,
		height: 25,
		width: 25,
	},
	addImageContainer: {
		backgroundColor: colors.secondary,
		margin: 10,
		borderRadius: 50,
	},
})

export default AddItem
