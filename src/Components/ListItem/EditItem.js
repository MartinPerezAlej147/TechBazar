import { colors } from "../../Global/Colors"
import { Modal, View, TextInput, Button, StyleSheet } from "react-native"

const EditItem = ({
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
				<Button title="Editar" onPress={() => onEdit(item)} />
				<Button title="Cancelar" onPress={() => onCancel(item, false)} />
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
})

export default EditItem
