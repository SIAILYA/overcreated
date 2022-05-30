export default () => ({
  port: parseInt(process.env.PORT, 10) || 5000,
  database: {
    mongoURI: process.env.MONGO_URI,
  }
});
