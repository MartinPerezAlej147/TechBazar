import { View, FlatList, StyleSheet } from "react-native"
import CardItem from "./CardItem"

const ListItem = ({ navigation, items, onConfirmDelete, onEdit }) => {
	return (
		<View style={styles.listContainer}>
			<FlatList
				data={items}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => (
					<CardItem
						navigation={navigation}
						item={item}
						onConfirmDelete={onConfirmDelete}
						onEdit={onEdit}
					/>
				)}
			/>
		</View>
	)
}
const styles = StyleSheet.create({
	listContainer: {
		width: "100%",
	},
})

export default ListItem
