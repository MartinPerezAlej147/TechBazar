import { StyleSheet } from "react-native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import ShopStack from "./StoreStack"
import CartStack from "./CartStack"
import { colors } from "../Global/Colors"
import OrdersStack from "./OrdersStack"
import TabIcon from "../Components/TabIcon"

const Tab = createBottomTabNavigator()

const TabNavigator = () => {
	return (
		<Tab.Navigator
			screenOptions={{
				headerShown: false,
				tabBarShowLabel: false,
				tabBarStyle: styles.tabBar,
			}}
		>
			<Tab.Screen
				name="StoreStack"
				component={ShopStack}
				options={{
					tabBarIcon: ({ focused }) => (
						<TabIcon icon="shop" label="Store" focused={focused} />
					),
				}}
			/>
			<Tab.Screen
				name="CartStack"
				component={CartStack}
				options={{
					tabBarIcon: ({ focused }) => (
						<TabIcon icon="shopping-cart" label="Cart" focused={focused} />
					),
				}}
			/>
			<Tab.Screen
				name="OrdersStack"
				component={OrdersStack}
				options={{
					tabBarIcon: ({ focused }) => (
						<TabIcon icon="list" label="Orders" focused={focused} />
					),
				}}
			/>
		</Tab.Navigator>
	)
}

export default TabNavigator

const styles = StyleSheet.create({
	tabBar: {
		backgroundColor: colors.primaryVariant,
		elevation: 4,
		position: "absolute",
		bottom: 25,
		left: 20,
		right: 20,
		borderRadius: 15,
		height: 90,
	},
})
