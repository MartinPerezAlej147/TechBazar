import { StyleSheet, Text, View, FlatList, Pressable } from "react-native"
import { usePostOrdersMutation } from "../App/Services/ShopServices"
import { colors } from "../Global/Colors"
import { useSelector } from "react-redux"
import CartItem from "../Components/CartItem"

const Cart = () => {
	const cart = useSelector((state) => state.cart.value)
	const [triggerPostOrders] = usePostOrdersMutation()

	return (
		<View style={styles.container}>
			<FlatList
				data={cart.items}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => <CartItem item={item} />}
			/>
			<View style={styles.confirmContainer}>
				<Pressable onPress={() => triggerPostOrders(cart)}>
					<Text style={styles.textConfirm}>Confirmar</Text>
				</Pressable>
				<Text style={styles.text}>Total: $ {cart.total} </Text>
			</View>
		</View>
	)
}

export default Cart

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.tertiary,
		padding: 10,
		margin: 10,
		justifyContent: "space-around",
		alignItems: "center",
		fontSize: 5,
	},

	confirmContainer: {
		width: "60%",
		backgroundColor: colors.secondary,
		padding: 10,
		alignItems: "enter",
		borderRadius: 10,
		text: 10,
		textAlign: "center",
		color: "white",
		fontSize: 18,
	},
	textConfirm: {
		fontSize: 20,
	},
})
