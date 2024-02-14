import { useFonts } from "expo-font"
import { fonts } from "./src/Global/Fonts"
import { init } from "./src/DataBase"
import { store } from "./src/App/Store"
import { Provider } from "react-redux"
import MainNavigator from "./src/Navigator/MainNavigator"

init()
	.then(() => console.log("DB Initialized"))
	.catch((err) => console.log(err))

const App = () => {
	const [fontLoaded] = useFonts(fonts)
	if (!fontLoaded) return null

	return <Provider store={store}>{<MainNavigator />}</Provider>
}

export default App
