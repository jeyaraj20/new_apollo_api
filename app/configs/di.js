"use strict";

const serviceLocator = require("../lib/service_locator");
const config = require("./configs")();

serviceLocator.register("logger", () => {
  return require("../lib/logger").create(config.application_logging);
});
serviceLocator.register("imageFilter", () => {
  return require("../helper/general_helper");
});
serviceLocator.register("html-pdf", () => {
  return require("html-pdf");
});
serviceLocator.register("multer", () => {
  return require("multer");
});

serviceLocator.register("jwtHelper", () => {
  return require("../helper/jwt_helper");
});

serviceLocator.register("moment", () => {
  return require("moment");
});
serviceLocator.register("razorpay", () => {
  return require("razorpay");
});

serviceLocator.register("jwt", () => {
  return require("jsonwebtoken");
});
serviceLocator.register("fetch", () => {
  return require("node-fetch");
});

serviceLocator.register("bluebird", () => {
  return require("bluebird");
});

serviceLocator.register("jsonwebtoken", () => {
  return require("jsonwebtoken");
});

serviceLocator.register("jsend", () => {
  return require("../lib/jsend");
});

serviceLocator.register("failAction", () => {
  return require("../lib/failAction").verify;
});

serviceLocator.register("trimRequest", () => {
  return require("../utils/trimRequest").all;
});

serviceLocator.register("generateOTP", () => {
  return require("../utils/random").generateOTP;
});

serviceLocator.register("httpStatus", () => {
  return require("http-status");
});

serviceLocator.register("mongoose", () => {
  return require("mongoose");
});

serviceLocator.register("fs", () => {
  return require("fs");
});

serviceLocator.register("path", () => {
  return require("path");
});

serviceLocator.register("util", () => {
  return require("util");
});

serviceLocator.register("handlebars", () => {
  return require("handlebars");
});

serviceLocator.register("_", () => {
  return require("underscore");
});

serviceLocator.register("nodemailer", () => {
  return require("nodemailer");
});

serviceLocator.register("glob", () => {
  return require("glob");
});

serviceLocator.register("bcrypt", () => {
  return require("bcrypt");
});

serviceLocator.register("crypto", () => {
  return require("crypto");
});
serviceLocator.register("Adminmenu", (serviceLocator) => {
 return require("../services/Adminmenu");
});
serviceLocator.register("Homecategory", (serviceLocator) => {
  return require("../services/Homecategory");
 });
serviceLocator.register("Image", (serviceLocator) => {
  return require("../services/Image");
 });
 serviceLocator.register("Location", (serviceLocator) => {
   return require("../services/Location");
  });
 serviceLocator.register("Login", (serviceLocator) => {
   return require("../services/Login");
  });
   serviceLocator.register("Student", (serviceLocator) => {
    return require("../services/Student");
   });
   
  
module.exports = serviceLocator;
