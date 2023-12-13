import { StyleSheet } from "react-native"
import Header from "../Components/Header"
import Categories from "../Components/Categories"

const Home = ({ setCategorySelected, handlerGoBack }) => {
	return (
		<>
			<Header handlerGoBack={handlerGoBack} />
			<Categories setCategorySelected={setCategorySelected} />
		</>
	)
}

export default Home

const styles = StyleSheet.create({})
