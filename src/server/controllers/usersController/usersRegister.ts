import { NextFunction, Request, Response } from "express";
import createUserToken from "../../utils/auth/createUserToken";
import userCreatePrisma from "../../utils/db/user/userCreatePrisma";
import { hashPassword } from "../../utils/hashPasswords";
import userViewer from "../../view/userViewer";

/**
 * Users controller thats registers the user with
 * information given in the body of the request.
 *
 * @param req Request
 * @param res Request
 * @param next NextFunction
 * @returns
 */
export default async function usersRegister(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { username, firstName, lastName, email, password } = req.body.user;
  try {
    // Hash password
    const hashed = hashPassword(password);

    // Create the new user on the database
    const user = await userCreatePrisma(
      username, 
      firstName, 
      lastName, 
      email, 
      hashed, 
      "USER"
    );

    // Create the authentication token for future use
    const token = createUserToken(user);

    // Create user view with the authentication token
    const userView = userViewer(user, token);

    return res.status(201).json(userView);
  } catch (error) {
    return next(error);
  }
}
