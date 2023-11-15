import {gql, request} from "graphql-request";

export const getCarsList = async  ()=>{
    const query = gql`
        query CarLists {
            carLists {
                carAvg
                createdAt
                id
                price
                publishedAt
                updatedAt
                carType
                carBrand
                stage
                publishedBy {
                    name
                }
            }
        }
    `
    const result = await request("https://api-ap-southeast-2.hygraph.com/v2/clowbr7qh5mlr01uq9r6b5eth/master",query);
    return result;
}