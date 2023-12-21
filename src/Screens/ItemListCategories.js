import { StyleSheet } from "react-native"
import Header from "../Components/Header"
import Search from "../Components/Search"
import uuid from "react-native-uuid"
import allItems from "../Data/Items.json"
import { useEffect, useState } from "react"
import AddItem from "../Components/ListItem/AddItem"
import ConfirmDelete from "../Components/ListItem/ConfirmDelete"
import EditItem from "../Components/ListItem/EditItem"
import ListItem from "../Components/ListItem"

const ItemListCategories = ({ navigation, route }) => {
	const { category } = route.params

	const [keyword, setKeyword] = useState("")
	const [items, setItems] = useState(allItems)

	const [newTitleItem, setNewTitleItem] = useState("")
	const [newPriceItem, setNewPriceItem] = useState("")
	const [newStockItem, setNewStockItem] = useState("")

	const [editTitleItem, setEditTitleItem] = useState("")
	const [editPriceItem, setEditPriceItem] = useState("")
	const [editStockItem, setEditStockItem] = useState("")

	const [itemSelected, setItemSelected] = useState({})
	const [confirmDeleteVisible, setConfirmDeleteVisible] = useState(false)
	const [editVisible, setEditVisible] = useState(false)

	const handlerEditItem = () => {
		const editItem = {
			id: uuid.v4(),
			title: editTitleItem,
			price: editPriceItem,
			stock: editStockItem,
		}
		setItems((current) => current.filter((item) => item.id !== itemSelected.id))
		setItems((current) => [...current, editItem])
		setEditVisible(false)
		setEditStockItem("")
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

	const handlerAddItem = () => {
		const newItem = {
			id: uuid.v4(),
			title: newTitleItem,
			price: newPriceItem,
			stock: newStockItem,
		}

		setItems((current) => [...current, newItem])
		setNewStockItem("")
		setNewTitleItem("")
		setNewPriceItem("")
	}

	useEffect(() => {
		if (category) {
			const itemsCategory = allItems.filter(
				(item) => item.category === category
			)
			const itemsFiltered = itemsCategory.filter((item) =>
				item.title.includes(keyword)
			)
			setItems(itemsFiltered)
		} else {
			const itemsFiltered = allItems.filter((item) =>
				item.title.includes(keyword)
			)
			setItems(itemsFiltered)
		}
	}, [keyword])

	return (
		<>
			<Search setKeyword={setKeyword} />
			<AddItem
				valueTitle={newTitleItem}
				valuePrice={newPriceItem}
				valueStock={newStockItem}
				onChangeTitle={setNewTitleItem}
				onChangePrice={setNewPriceItem}
				onChangeStock={setNewStockItem}
				addItem={handlerAddItem}
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
				valueStock={editStockItem}
				onChangeTitle={setEditTitleItem}
				onChangePrice={setEditPriceItem}
				onChangeStock={setEditStockItem}
				item={itemSelected}
				visible={editVisible}
				onCancel={handlerEdit}
				onEdit={handlerEditItem}
			/>
			<ListItem
				navigation={navigation}
				items={items}
				onConfirmDelete={handlerConfirmDelete}
				onEdit={handlerEdit}
				style={styles.container}
			/>
		</>
	)
}

export default ItemListCategories

const styles = StyleSheet.create({
	container: {
		width: "100%",
	},
})
