import NextAuth from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialProvider({
      name: "credentials",
      credentials: {
        username: {
          label: "Email",
          type: "text",
          placeholder: "mani@test.com",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      // My authorize function where I called my graphql mutation for token and session.
      async authorize(credentials, req) {
        try {
          // const { data } = await axios({
          //     url: API_URL,
          //     method: 'post',
          //     data: {
          //         query: `mutation {
          //             login(
          //             mobileNumber: "4738291046",
          //             mobileCountryCode: "00",
          //             password: "admin123"
          //             ) {
          //             expiresAt
          //             accessToken
          //             }
          //         }`
          //     }
          // })
          // if (data) {
          //     console.log(data,'dataaa');
          //     return data
          // }
          // else {
          //     return null
          // }
        } catch (err) {
          return null;
        }
      },
    }),
  ],
});
