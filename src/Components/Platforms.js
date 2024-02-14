import { StyleSheet, View, Text, FlatList } from "react-native"
import { useGetPlatformsQuery } from "../App/Services/ShopServices"
import { colors } from "../Global/Colors"
import PlatformItem from "./PlatformListItem/PlatformItem"

const Platforms = ({ navigation, route }) => {
	const { data: platforms, isLoading, error } = useGetPlatformsQuery()

	return (
		<>
			<View style={styles.containerText}>
				<Text style={styles.text}>Platforms</Text>
			</View>
			<FlatList
				data={platforms}
				keyExtractor={(item) => item}
				renderItem={({ item }) => (
					<PlatformItem platform={item} navigation={navigation} />
				)}
			/>
		</>
	)
}

export default Platforms

const styles = StyleSheet.create({
	containerText: {
		backgroundColor: colors.primary,
		width: "100%",
		padding: 10,
	},
	text: {
		color: "grey",
		fontSize: 15,
		fontFamily: "CybordPunkFont",
	},
})
