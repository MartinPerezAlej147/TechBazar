import { useFonts } from "expo-font"
import Navigator from './src/Navigator/Navigator'
import { fonts } from './src/Global/Fonts'


const App = () => {

	const [fontLoaded] = useFonts(fonts)

	if (!fontLoaded) return null

	return (
		<Navigator />
	)
}

export default App
