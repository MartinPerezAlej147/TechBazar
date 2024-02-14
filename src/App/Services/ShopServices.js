import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { base_url } from "../../Firebase/DB"

export const shopApi = createApi({
	reducerPath: "shopApi",
	baseQuery: fetchBaseQuery({ baseUrl: base_url }),
	endpoints: (builder) => ({
		getGames: builder.query({
			query: (platform) =>
				`games.json?orderBy="platform"&equalTo="${platform}"`,
		}),
		getGame: builder.query({
			query: (id) => `games/${id}.json`,
		}),
		getPlatforms: builder.query({
			query: () => "platforms.json",
		}),
		getOrders: builder.query({
			query: (localId) => `orders/${localId}.json`,
			transformResponse: (response) => {
				if (!response) return []
				const data = Object.keys(response).map((key) => ({
					id: key,
					...response[key],
				}))
				return data
			},
			providesTags: ["order"],
		}),
		postOrders: builder.mutation({
			query: ({ localId, order }) => ({
				url: `orders/${localId}.json`,
				method: "POST",
				body: order,
			}),
			providesTags: ["order"],
		}),
		postGameImage: builder.mutation({
			query: ({ item, image }) => ({
				url: `/games/${item.id}/thumbnail.json`,
				method: "PUT",
				body: image,
			}),
			providesTags: ["image"],
		}),
	}),
})

export const {
	useGetGamesQuery,
	useGetGameQuery,
	useGetPlatformsQuery,
	useGetOrdersQuery,
	usePostGameImageMutation,
	usePostOrdersMutation,
} = shopApi
