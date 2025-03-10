import { Request, Response } from "express";
import { User } from "../../models/user/user";

import { HttpError, emailSender } from "../../helpers";

const resendVerifyEmail = async (req: Request, res: Response) => {
  const { email } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    throw HttpError(404, "Email not found");
  }
  if (user.verify) {
    throw HttpError(400, "Verification has already been passed");
  }

  const sendEmailOn = {
    email,
    authKey: user.verificationCode,
  };

  emailSender(sendEmailOn);

  res.json({
    message: "Verify email send success",
  });
};

export default resendVerifyEmail
