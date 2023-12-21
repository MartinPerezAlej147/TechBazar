import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../Screens/Home'
import ItemListCategories from '../Screens/ItemListCategories'
import ItemDetail from '../Screens/ItemDetail'
import Header from '../Components/Header'
const Stack = createNativeStackNavigator()

const Navigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='Home'
                screenOptions={
                    ({ }) => {
                        return {
                            header: () => <Header />
                        }

                    }
                }
            >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Category" component={ItemListCategories} />
                <Stack.Screen name="ItemDetails" component={ItemDetail} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigator
