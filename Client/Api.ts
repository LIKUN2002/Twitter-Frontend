import {GraphQLClient} from "graphql-request"

const isClient = typeof window !== "undefined";

export const graphqlClient  = new GraphQLClient ( "http://localhost:5000/graphql",
{
    headers: () => ({
        Authorization: isClient ? `Bearer ${window.localStorage.getItem("__Twiter_Token")}` : "",
}),
}
);

