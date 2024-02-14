import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native"
import React, { useEffect, useState } from "react"
import allProduct from "../Data/games.json"
import { useDispatch } from "react-redux"
import { addItem } from "../Features/Cart/CartSlice"
import { colors } from "../Global/Colors"

const ItemDetail = ({ route }) => {
	const { id } = route.params

	const [product, setProduct] = useState({})
	const dispatch = useDispatch()
	const images = product.images ? product.images : []

	useEffect(() => {
		const productFinded = allProduct.find((product) => product.id === id)
		setProduct(productFinded)
	}, [id])
	return (
		<View style={styles.container}>
			<View style={styles.content}>
				<Image
					style={styles.image}
					source={{ uri: images[2] }}
					resizeMode="cover"
					s
				/>
				<View style={styles.containerText}>
					<Text style={styles.title}>{product.title}</Text>
					<Text style={styles.description}>{product.description}</Text>
				</View>
				<View style={styles.containerPrice}>
					<Text style={styles.price}>$ {product.price}</Text>
				</View>
				<View style={styles.buyNow}>
					<TouchableOpacity onPress={() => dispatch(addItem(product))}>
						<Text style={styles.buyNowText}>Buy Now</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	)
}

export default ItemDetail

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.tertiary,
		width: "100%",
		flex: 1,
		justifyContent: "start",
		alignItems: "center",
	},
	content: {
		width: "100%",
	},

	image: {
		width: "100%",
		height: 300,
	},
	containerText: {
		gap: 25,
		paddingHorizontal: 5,
		paddingVertical: 25,
	},
	containerPrice: {
		width: "100%",
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
		marginVertical: 10,
	},
	title: {
		fontSize: 30,
		fontWeight: "bold",
		color: "white",
	},
	description: {
		fontSize: 15,
		color: "white",
	},
	price: {
		color: "white",
		fontSize: 40,
	},
	buyNow: {
		backgroundColor: colors.primary,
		paddingVertical: 5,
		paddingHorizontal: 10,
		borderRadius: 5,
		backgroundColor: colors.primaryVariant,
		padding: 10,
		justifyContent: "center",
		alignItems: "center",
	},
	buyNowText: {
		color: "white",
		fontSize: 20,
	},
})
