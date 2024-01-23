import { useFonts } from "expo-font"
import MainNavigator from "./src/Navigator/MainNavigator"
import { fonts } from "./src/Global/Fonts"
import { init } from "./src/DataBase"
import { store } from "./src/App/Store"

init()
	.then(() => console.log("DB Initialized"))
	.catch((err) => console.log(err))

const App = () => {
	const [fontLoaded] = useFonts(fonts)
	if (!fontLoaded) return null

	return <Provider store={store}>{<MainNavigator />}</Provider>
}

export default App
