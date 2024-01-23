import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from "../Screens/Home"
import ItemListCategories from "../Screens/ItemListCategories"
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
			<Stack.Screen name="Category" component={ItemListCategories} />
			<Stack.Screen name="ItemDetails" component={ItemDetail} />
		</Stack.Navigator>
	)
}

export default StoreStack
