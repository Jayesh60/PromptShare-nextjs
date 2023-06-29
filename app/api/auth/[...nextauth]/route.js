import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google"
import {connectToDb} from '@utils/database'


const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId:process.env.GOOGLE_ID ,
            clientSecret: process.env.GOOGLE_SECRET,
        })
    ],
    async session({session}){

    },
    async session({profile}){
        try {
            
        } catch (error) {
            
        }

    },
})

export {handler as POSt, handler as GET};