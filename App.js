import { useState } from "react"
import { View, StyleSheet } from "react-native"
import uuid from "react-native-uuid"
import ConfirmDelete from "./src/components/ConfirmDelete"
import AddItem from "./src/components/AddItem"
import EditItem from "./src/components/EditItem"
import ListItem from "./src/components/ListItem"

const App = () => {
	const [newTitleItem, setNewTitleItem] = useState("")
	const [newPriceItem, setNewPriceItem] = useState("")
	const [newQuantityItem, setNewQuantityItem] = useState("")
	const [editTitleItem, setEditTitleItem] = useState("")
	const [editPriceItem, setEditPriceItem] = useState("")
	const [editQuantityItem, setEditQuantityItem] = useState("")
	const [items, setItems] = useState([])
	const [itemSelected, setItemSelected] = useState({})
	const [confirmDeleteVisible, setConfirmDeleteVisible] = useState(false)
	const [editVisible, setEditVisible] = useState(false)

	const handlerAddItem = () => {
		const newItem = {
			id: uuid.v4(),
			title: newTitleItem,
			price: newPriceItem,
			quantity: newQuantityItem,
		}

		setItems((current) => [...current, newItem])
		setNewQuantityItem("")
		setNewTitleItem("")
		setNewPriceItem("")
	}
	const handlerEditItem = () => {
		const editItem = {
			id: uuid.v4(),
			title: editTitleItem,
			price: editPriceItem,
			quantity: editQuantityItem,
		}
		setItems((current) => current.filter((item) => item.id !== itemSelected.id))
		setItems((current) => [...current, editItem])
		setEditVisible(false)
		setEditQuantityItem("")
		setEditTitleItem("")
		setEditPriceItem("")
	}

	const handlerConfirmDelete = (item, visible) => {
		setItemSelected(item)
		setConfirmDeleteVisible(visible)
	}
	const handlerDeleteItem = () => {
		setItems((current) => current.filter((item) => item.id !== itemSelected.id))
		setConfirmDeleteVisible(false)
	}
	const handlerEdit = (item, visible) => {
		setItemSelected(item)
		setEditVisible(visible)
	}
	return (
		<View style={styles.container}>
			<AddItem
				valueTitle={newTitleItem}
				valuePrice={newPriceItem}
				valueQuantity={newQuantityItem}
				onChangeTitle={setNewTitleItem}
				onChangePrice={setNewPriceItem}
				onChangeQuantity={setNewQuantityItem}
				addItem={handlerAddItem}
			/>
			<ListItem
				items={items}
				onConfirmDelete={handlerConfirmDelete}
				onEdit={handlerEdit}
			/>
			<ConfirmDelete
				item={itemSelected}
				visible={confirmDeleteVisible}
				onCancel={handlerConfirmDelete}
				onDelete={handlerDeleteItem}
			/>
			<EditItem
				valueTitle={editTitleItem}
				valuePrice={editPriceItem}
				valueQuantity={editQuantityItem}
				onChangeTitle={setEditTitleItem}
				onChangePrice={setEditPriceItem}
				onChangeQuantity={setEditQuantityItem}
				item={itemSelected}
				visible={editVisible}
				onCancel={handlerEdit}
				onEdit={handlerEditItem}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "start",
		alignItems: "center",
		marginTop: 50,
	},
})
export default App
