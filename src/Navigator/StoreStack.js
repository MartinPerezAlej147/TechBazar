import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from "../Screens/Home"
import ItemListPlatforms from "../Screens/ItemListPlatforms"
import ItemDetail from "../Screens/ItemDetail"
import Header from "../Components/Header"

const Stack = createNativeStackNavigator()

const StoreStack = () => {
	return (
		<Stack.Navigator
			initialRouteName="Home"
			screenOptions={() => {
				return {
					header: () => <Header />,
				}
			}}
		>
			<Stack.Screen name="Home" component={Home} />
			<Stack.Screen name="Platforms" component={ItemListPlatforms} />
			<Stack.Screen name="ItemDetails" component={ItemDetail} />
		</Stack.Navigator>
	)
}

export default StoreStack
