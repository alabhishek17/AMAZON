import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

 export const productList=createApi({
    reducerPath:'productIteam',
    baseQuery:fetchBaseQuery({baseUrl:"https://real-time-amazon-data.p.rapidapi.com", 
        headers: {
            'x-rapidapi-key': 'be8121cb02mshc41e2b8ffe7322dp193598jsn52c63d92b682',
            'x-rapidapi-host': 'real-time-amazon-data.p.rapidapi.com'
        }}),
    endpoints:(builder)=>({
        getProductIteam:builder.query({
            query:({ query, page, country, sort_by, product_condition }) => ({
                url: 'search',
                params: { query, page, country, sort_by, product_condition },
              }),
        }),
        getProductsByCategory:builder.query({
            query:(name)=>`${name}`
              
        }),
        getProductsByPhone:builder.query({
            query:(name)=>`${name}`
              
        }),
        getProductsByFashion:builder.query({
            query:(name)=>`${name}`
              
        }),
        getProductsByComputer:builder.query({
            query:(name)=>`${name}`
              
        }),
        getProductsByMusicalInstrument:builder.query({
            query:(name)=>`${name}`
              
        }),
        getProductsByPrimeVideo:builder.query({
            query:(name)=>`${name}`
              
        }),
        getProductsByGames:builder.query({
            query:(name)=>`${name}`
              
        }),
        getProductsBySports:builder.query({
            query:(name)=>`${name}`
              
        }),
        getProductsByAmazonDevices:builder.query({
            query:(name)=>`${name}`
              
        }),
        getProductsByAmazonFresh:builder.query({
            query:(name)=>`${name}`
              
        }),
    }),
});

console.log(productList);
export const {useGetProductIteamQuery,useGetProductsByCategoryQuery,useGetProductsByPhoneQuery,useGetProductsByFashionQuery,useGetProductsByComputerQuery,
              useGetProductsByMusicalInstrumentQuery,useGetProductsByPrimeVideoQuery,useGetProductsByGamesQuery,useGetProductsBySportsQuery,useGetProductsByAmazonDevicesQuery,
              useGetProductsByAmazonFreshQuery
} = productList;


// const url = 'https://real-time-amazon-data.p.rapidapi.com/search?query=Phone&page=1&country=US&sort_by=RELEVANCE&product_condition=ALL';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': '2ded85df57mshbeb5cc1a7fdc43dp134befjsn76d5c76c3d50',
// 		'x-rapidapi-host': 'real-time-amazon-data.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }