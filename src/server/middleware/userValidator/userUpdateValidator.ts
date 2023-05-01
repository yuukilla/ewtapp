import { NextFunction, Response } from "express";
import { Request } from "express-jwt";
import { ValidationError } from "../../utils/types";

/**
 * userUpdateValidator is a middleware that validates the user information in 
 * the request in order to log the user.
 * If the request is malformed it responds accordingly and returns, stopping
 * the flow of the express.
 * If the request is well formed it passes control to the next handler.
 * 
 * @param req Request
 * @param res Response
 * @param next NextFunction
 * @returns
 */
export default function userUpdateValidator(
  req : Request,
  res : Response,
  next: NextFunction
) {

  const errors: ValidationError = {};
  errors.body = [];

  if ( !req.body ) {
    errors.body.push("Request body can not be empty.");
    return res.status(400).json({ errors });
  }

  const { user } = req.body;
  if ( !user ) {
    errors.body.push("\"user\" Object must be defined.");
    return res.status(400).json({ errors });
  }

  if ( typeof user != "object" ) {
    errors.body.push("\"user\" must be an object.");
    return res.status(400).json({ errors });
  }

  const optional_fields = [
    "username", "email", "password", "firstName", "lastName", "image"
  ];
  for ( const key of Object.keys(user) ) {
    if ( typeof key != "string" && key in optional_fields ) {
      errors.body.push(`"${key}" must be a string.`);
    }
    if ( !optional_fields.includes(key) ) {
      errors.body.push(`"${key}" is not one of the fields accepted.`);
    }
  }

  if ( errors.body.length ) return res.status(400).json({ errors });
  next();
}

