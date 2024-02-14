import { colors } from "../../Global/Colors"
import { Modal, View, TextInput, Button, StyleSheet, Image } from "react-native"
import { useEffect, useState } from "react"
import * as ImagePicker from "expo-image-picker"
import ActivityLoader from "../../Components/ActivityLoader"
import {
	usePostGameImageMutation,
	useGetGameQuery,
} from "../../App/Services/ShopServices"

const EditItem = ({
	navigation,
	newTitleItem,
	newPriceItem,
	newStockItem,
	onChangeTitle,
	onChangePrice,
	onChangeStock,
	item,
	visible,
	onCancel,
	onEdit,
}) => {
	const [image, setImage] = useState("")
	const [triggerGameImage] = usePostGameImageMutation()
	const [loading, setLoading] = useState(true)
	const { data, isSuccess } = useGetGameQuery(item.id)

	useEffect(() => {
		if (isSuccess && data) {
			setImage(data.thumbnail)
			setLoading(false)
		}
	}, [isSuccess])

	const pickImage = async () => {
		const { granted } = await ImagePicker.requestCameraPermissionsAsync()

		if (granted) {
			let result = await ImagePicker.launchCameraAsync({
				mediaTypes: ImagePicker.MediaTypeOptions.Images,
				allowsEditing: true,
				aspect: [4, 3],
				quality: 0.3,
				base64: true,
			})

			if (!result.canceled) {
				setImage("data:image/jpeg;base64," + result.assets[0].base64)
			}
		}
	}
	const confirmImage = () => {
		triggerGameImage({ item, image })
		navigation.goBack()
	}

	if (loading) return <ActivityLoader />

	return (
		<Modal visible={visible}>
			<View>
				<View style={styles.inputContainer}>
					<TextInput
						style={styles.input}
						placeholder={item.title}
						value={newTitleItem}
						placeholderTextColor={colors.white}
						onChangeText={(t) => onChangeTitle(t)}
					/>
					<TextInput
						style={styles.input}
						placeholder={String(item.price)}
						placeholderTextColor={colors.white}
						value={newPriceItem}
						onChangeText={(t) => onChangePrice(t)}
						keyboardType="numeric"
					/>
					<TextInput
						style={styles.input}
						placeholder={String(item.stock)}
						placeholderTextColor={colors.white}
						value={newStockItem}
						onChangeText={(t) => onChangeStock(t)}
						keyboardType="numeric"
					/>
				</View>
				<Image
					source={image ? { uri: image } : require("../../Sources/noimage.png")}
					style={styles.image}
				/>
				<Button title="Take photo" onPress={pickImage} />
				<Button title="Save photo" onPress={confirmImage} />

				<Button title="Edit" onPress={() => onEdit(item)} />
				<Button title="Cancel" onPress={() => onCancel(item, false)} />
			</View>
		</Modal>
	)
}
const styles = StyleSheet.create({
	inputContainer: {
		backgroundColor: colors.primary,
		flexDirection: "row",
		alignItems: "center",
		width: "100%",
		justifyContent: "space-around",
		marginTop: 30,
	},
	input: {
		paddingHorizontal: 10,
		paddingVertical: 5,
		width: 100,
		color: colors.white,
	},
	container: {
		flex: 1,
		alignItems: "center",
		marginTop: 20,
	},
	image: {
		width: 100,
		height: 100,
	},
})

export default EditItem
