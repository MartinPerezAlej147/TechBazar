import { StyleSheet } from "react-native"
import Search from "../Components/Search"
import uuid from "react-native-uuid"
import { useGetGamesQuery } from "../App/Services/ShopServices"
import { useEffect, useState } from "react"
import AddItem from "../Components/ListItem/AddItem"
import ConfirmDelete from "../Components/ListItem/ConfirmDelete"
import EditItem from "../Components/ListItem/EditItem"
import ListItem from "../Components/ListItem"
import ActivityLoader from "../Components/ActivityLoader"

const ItemListPlatforms = ({ navigation, route }) => {
	const { platform } = route.params
	const { data, isSuccess, isError, error, isLoading } =
		useGetGamesQuery(platform)
	const [errorMessage, setErrorMessage] = useState("")
	const [info, setInfo] = useState(true)
	const [loading, setLoading] = useState(true)
	const [keyword, setKeyword] = useState("")

	const [items, setItems] = useState()

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
		if (isSuccess && data.length === 0) setInfo(false)
		if (isSuccess && data) setLoading(false)
		if (isError && error) setErrorMessage(error.error)
		if (!isLoading) {
			const dataArray = Object.values(data)
			const gamesFiltered = dataArray.filter((game) =>
				game.title.includes(keyword)
			)
			setItems(gamesFiltered)
		}
	}, [keyword, data, isSuccess, isError, error])

	if (!info)
		return (
			<View>
				<Text>No games detected</Text>
			</View>
		)
	if (errorMessage) {
		console.log(errorMessage)
		return (
			<View>
				<Text>Error while finding games</Text>
			</View>
		)
	}
	if (loading) return <ActivityLoader />

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
				navigation={navigation}
				route={route}
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

export default ItemListPlatforms

const styles = StyleSheet.create({
	container: {
		width: "100%",
	},
})
