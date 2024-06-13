// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//  export const productCategoryApi=createApi({
//     reducerPath:'productCategory',
//     baseQuery:fetchBaseQuery({baseUrl:"https://real-time-amazon-data.p.rapidapi.com/products-by-category?category_id=2478868012&page=1&country=US&sort_by=RELEVANCE&product_condition=ALL", 
//         headers: {
//             'x-rapidapi-key': '2ded85df57mshbeb5cc1a7fdc43dp134befjsn76d5c76c3d50',
//             'x-rapidapi-host': 'real-time-amazon-data.p.rapidapi.com'
//         }}),
//     endpoints:(builder)=>({
//         getProductCategory:builder.query({
//             query:()=>"",
//         }),
//     }),
// });

// console.log(productCategoryApi);
// export const {useGetProductCategoryQuery} = productCategoryApi;