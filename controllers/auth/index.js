const { register } = require("./register");
const { login } = require("./login");
const { logout } = require("./logout");
const { getCurrent } = require("./current");
const { subscription } = require("./subscription");
const { verifyEmail } = require("./verifyEmail");
const { resendVerifyEmail } = require("./resendVerifyEmail");

const { ctrlWrapper } = require("../../helpers");

module.exports = {
  register: ctrlWrapper(register),
  login: ctrlWrapper(login),
  logout: ctrlWrapper(logout),
  getCurrent: ctrlWrapper(getCurrent),
  subscription: ctrlWrapper(subscription),
  verifyEmail: ctrlWrapper(verifyEmail),
  resendVerifyEmail: ctrlWrapper(resendVerifyEmail),
};
