module.exports = {
  ENV: "PROD",
  PORT: 3000,
  MONGO_URI: "mongodb://localhost/govdata",
  getEnv: function() {
    return this.ENV;
  }
};
