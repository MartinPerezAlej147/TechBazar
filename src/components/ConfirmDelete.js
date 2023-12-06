import { Modal, View, Button, StyleSheet, Text } from "react-native"
import { colors } from "../Global/Colors"

const ConfirmDelete = ({ item, visible, onCancel, onDelete }) => {
	return (
		<Modal visible={visible}>
			<View>
				<View style={styles.confirmDeleteContent}>
					<Text style={styles.labelText}>¿Seguro que quiere eliminar?</Text>
					<Text style={styles.labelText}>Titulo</Text>
					<Text style={styles.fieldText}>{item.title}</Text>
					<Text style={styles.labelText}>Precio</Text>
					<Text style={styles.fieldText}>{item.price}</Text>
				</View>
				<Button title="Si" onPress={() => onDelete(item)} />
				<Button title="No" onPress={() => onCancel(item, false)} />
			</View>
		</Modal>
	)
}
const styles = StyleSheet.create({
	confirmDeleteContent: {
		backgroundColor: colors.primary,
		width: "100%",
		padding: 10,
		gap: 10,
	},
	labelText: {
		color: colors.white,
		fontSize: 30,
		textAlign: "center",
		backgroundColor: colors.primaryVariant,
	},
	fieldText: {
		fontStyle: "italic",
		color: colors.white,
		flexDirection: "column",
		margin: 10,
		fontSize: 20,
		textAlign: "center",
	},
})
export default ConfirmDelete
