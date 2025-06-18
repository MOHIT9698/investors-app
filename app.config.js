import 'dotenv/config';

export default {
  expo: {
    name: "investors-app",
    slug: "your-app",
    extra: {
      API_URL: process.env.API_BASE_URL,
    },
  },
};
