import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { signinWithGoogle } from "@/coreComponents/helper/auth";

interface MyProfile {
  id: string;
  name: string;
  email: string;
  image: string;
  // Otros campos que tenga tu objeto Profile
}

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async signIn(params) {
      try {
        const { user } = params;

        if (!user) {
          console.error("Perfil no disponible en el inicio de sesión.");
          return false;
        }

        // Asegúrate de que profile sea del tipo MyProfile
        const myProfile = user as MyProfile;

        // Llama a tu función signinWithGoogle para manejar la autenticación con Google
        const result = await signinWithGoogle({
          googleId: myProfile.id,
          email: myProfile.email,
          name: myProfile.name,
          image: myProfile.image,
          // Otros campos que desees enviar
        });

        return !!result; // Devuelve true si la función signinWithGoogle tiene éxito
      } catch (error) {
        console.error("Error al guardar el usuario de Google:", error);
        return false;
      }
    },
  },
});

// Peticiones by handler
export { handler as GET, handler as POST };