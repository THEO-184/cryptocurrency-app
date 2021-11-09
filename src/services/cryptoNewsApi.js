import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://bing-news-search1.p.rapidapi.com";
const cryptoNewsApiHeaders = {
	"x-bingapis-sdk": "true",
	"x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
	"x-rapidapi-key": "85814451f4mshd9c546f3630d557p186fb3jsnf47f7ad3792f",
};

const createRequest = (url) => ({ url, headers: cryptoNewsApiHeaders });

const cryptoNewsApi = createApi({
	reducerPath: "cryptoNewsApi",
	baseQuery: fetchBaseQuery({ baseUrl }),
	endpoints: (builder) => ({
		getCryptoNews: builder.query({
			query: ({ newsCategory, count }) =>
				createRequest(
					`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&Count=${count}`
				),
		}),
	}),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;

export default cryptoNewsApi;
