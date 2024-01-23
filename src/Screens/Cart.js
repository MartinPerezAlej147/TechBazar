import { StyleSheet, Text, View, FlatList, Pressable } from "react-native"
import { usePostOrdersMutation } from "../App/Services/ShopServices"
import { colors } from "../Global/Colors"
import { useSelector } from "react-redux"
import CartItem from "../Components/CartItem"

const Cart = () => {
	const cart = useSelector((state) => state.cart.value)
	const [triggerPostOrder] = usePostOrdersMutation()

	return (
		<View style={styles.container}>
			<FlatList
				data={cart.items}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => <CartItem item={item} />}
			/>
			<View style={styles.confirmContainer}>
				<Pressable onPress={() => triggerPostOrder(cart)}>
					<Text style={styles.text}>Confirmar</Text>
				</Pressable>
				<Text style={styles.text}>Total: $ {cart.total} </Text>
			</View>
		</View>
	)
}

export default Cart

const styles = StyleSheet.create({
	cardItemActive: {
		backgroundColor: colors.error,
		flexDirection: "row",
		padding: 10,
		margin: 10,
		justifyContent: "space-around",
		alignItems: "center",
	},
	cardItemInactive: {
		backgroundColor: colors.tertiary,
		flexDirection: "row",
		padding: 10,
		margin: 10,
		justifyContent: "space-around",
		alignItems: "center",
	},

	card: {
		flexDirection: "row",
		width: "100%",
		color: colors.primary,
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
