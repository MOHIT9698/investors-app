import 'dotenv/config';

export default {
  expo: {
    name: "investors-app",
    slug: "your-app",
    extra: {
      API_URL: "https://b625-2409-40d1-81-d9be-d6b7-ad51-77db-ae25.ngrok-free.app/",
      // API_URL: process.env.API_BASE_URL,
    },
  },
};
