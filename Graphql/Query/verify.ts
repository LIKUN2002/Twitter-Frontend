import { graphql } from "../../gql";

export const verifyUserGoogleTokenQuery = graphql(`
#graphql
query VerifyuserGoogleToken($token:String!)
{
    verifyGoogleToken(token: $token)
}
`);