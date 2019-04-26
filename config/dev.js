module.exports = {
  ENV: "DEV",
  PORT: 3000,
  MONGO_URI: "mongodb://localhost/govdata",
  getEnv: function() {
    return this.ENV;
  }
};
