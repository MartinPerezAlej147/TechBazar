import React from "react"
import { View, ActivityIndicator } from "react-native"
import { colors } from "../Global/Colors"

const ActivityLoader = () => {
	return (
		<View
			style={{
				flex: 1,
				justifyContent: "center",
				alignItems: "center",
				backgroundColor: colors.primary,
			}}
		>
			<ActivityIndicator size="large" color="white" />
		</View>
	)
}

export default ActivityLoader
