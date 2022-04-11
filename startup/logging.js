const winston = require("winston");
require("winston-mongodb");
require("express-async-errors");

module.exports = function () {
  // process.on("uncaughtException", (ex) => {
  //   console.log("WE GOT AN UNCAUGHT EXCEPTION");
  //   winston.error(ex.message, ex);
  // });
  winston.exceptions.handle(
    new winston.transports.Console({
      format: winston.format.simple(),
    }),
    new winston.transports.File({ filename: "uncaughtExceptions.log" })
  );

  process.on("unhandledRejection", (ex) => {
    throw ex;
  });
  // winston.rejections.handle(
  //   new winston.transports.File({ filename: "unhandledRejections.log" })
  // );

  winston.add(new winston.transports.File({ filename: "logfile.log" }));

  winston.add(
    new winston.transports.Console({
      format: winston.format.simple(),
    })
  );

  winston.add(
    new winston.transports.MongoDB({
      db: `${process.env.DB_URI}`,
      level: "info",
      options: {
        useUnifiedTopology: true,
      },
    })
  );
};
