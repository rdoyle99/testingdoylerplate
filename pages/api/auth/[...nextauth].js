import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import TwitterProvider from "next-auth/providers/twitter";
import EmailProvider from "next-auth/providers/email";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "@/lib/mongodb.js";
import * as Amplitude from "@amplitude/node";

export default NextAuth({
  // TODO Configure one or more authentication providers
  providers: [
    TwitterProvider({
      clientId: process.env.TWITTER_ID,
      clientSecret: process.env.TWITTER_SECRET,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    EmailProvider({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
      // maxAge: 24 * 60 * 60, // How long email links are valid for (default 24h)
    }),
  ],
  adapter: MongoDBAdapter(clientPromise),
  callbacks: {
    async signIn(user, account, profile) {
      var client = Amplitude.init("7832f3cc52faf9e0aa0369e6855a40b5");
      client.logEvent({
        event_type: "Node.js Event",
        user_id: "datamonster@gmail.com",
        location_lat: 37.77,
        location_lng: -122.39,
        ip: "127.0.0.1",
        event_properties: {
          keyString: "valueString",
          keyInt: 11,
          keyBool: true,
        },
      });

      // Send any events that are currently queued for sending.
      // Will automatically happen on the next event loop.
      client.flush();
      return true;
    },
  },
});
