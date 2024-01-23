import { NavigationContainer } from "@react-navigation/native"
import TabNavigator from "./TabNavigator"
import { useEffect, useState } from "react"
import AuthStack from "./AuthStack"
import { useSelector, useDispatch } from "react-redux"
import { fechSession } from "../DataBase"
import { setUser } from "../Features/Auth/AuthSlice"

const MainNavigator = () => {
	console.log("asd")
	const dispatch = useDispatch()
	const idToken = useSelector((state) => state.auth.value.idToken)

	useEffect(() => {
		;(async () => {
			try {
				const session = await fechSession()
				if (session.rows.length) {
					const user = session.rows._array[0]
					dispatch(setUser(user))
				}
			} catch (error) {
				console.log(error)
			}
		})()
	}, [])

	console.log("asd")

	return (
		<NavigationContainer>
			{idToken ? <TabNavigator /> : <AuthStack />}
		</NavigationContainer>
	)
}

export default MainNavigator
