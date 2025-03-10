import { Request, Response } from "express";

import { Contact } from "../../models/contact/contact";
import { HttpError } from "../../helpers";

const updateContact = async (req: Request, res: Response) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

export default updateContact;
