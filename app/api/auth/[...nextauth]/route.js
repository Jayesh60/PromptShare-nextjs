import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google"
import {
    connectToDb
} from '@utils/database'
import User from "@models/user";

// export const runtime = "edge"

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
            authorizationUrl: 'https://accounts.google.com/o/oauth2/v2'
        })
    ],
    callbacks: {
        async session({
            session
        }) {
            const sessionUser = await User.findOne({
                email: session.user.email
            })
            session.user.id = await sessionUser._id.toString()
            return session;
        },
        async signIn({
            profile
        }) {
            try {
                await connectToDb();
                const userExists = await User.findOne({
                    'email': profile.email
                });
                if (!userExists) {
                    await User.create({
                        email: profile.email,
                        username: profile.name.replace(" ", ""),
                        image: profile.picture
                    })
                }
                return true;
            } catch (error) {
                console.log(error)
                return false;
            }

        },

    }

})

export {
    handler as POST, handler as GET
};