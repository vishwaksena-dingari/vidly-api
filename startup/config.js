module.exports = function () {
  if (!process.env.JWT_PRIVATE_KEY) {
    throw new Error("FATAL ERROR: JWT PRIVATE KEY is not defined");
  }

  // if (!config.get("jwtPrivateKey")) {
  //   console.log("FATAL ERROR: jwtPrivateKey is not defined");
  //   process.exit(1);
  // }
};
