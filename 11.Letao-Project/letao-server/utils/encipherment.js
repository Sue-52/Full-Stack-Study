const crypto = require("crypto");

module.exports.encipherment = (password) => {
  return crypto.createHash("MD5").update(password).digest("hex");
};
