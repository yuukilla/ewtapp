import { NextFunction, Request, Response } from "express";
import { ValidationError } from "../../utils/types";

/**
 * userLoginValidator is a middleware that validates the user information in 
 * the request in order to log the user.
 * If the request is malformed it responds accordingly and returns, stopping
 * the flow of the express.
 * If the request is well formed, it passes control to the next handler.
 * @param req Request
 * @param res Response
 * @param next NextFunction
 */
export default async function userLoginValidator(
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

  const { username, password } = user;

  // Username
  if ( !username ) {
    errors.body.push("\"username\" property in the user can not be empty.");
  }
  else if ( typeof username != "string" ) {
    errors.body.push("\"username\" property must be a string.");
  }

  // Password 
  if ( !password ) {
    errors.body.push("\"password\" property in the user can not be empty.");
  }
  else if ( typeof password != "string" ) {
    errors.body.push("\"password\" property must be a string.");
  }

  if ( errors.body.length ) return res.status(400).json({ errors });
  next();
}

