import { NextFunction, Request, Response } from "express";
import createUserToken from "../../utils/auth/createUserToken";
import userGetUsernamePrisma from "../../utils/db/user/userGetUsernamePrisma";
import { compareWithHash } from "../../utils/hashPasswords";
import userViewer from "../../view/userViewer";

/**
 * Users controller for the login function sending a valid
 * jwt token in the response if login is successful.
 *
 * @param req Request with a body property containing a json
 *                    with user properties.
 * @param res Response
 */
export default async function userLogin(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { username, password } = req.body.user;

  try {
    // Get the user with given username'
    const user = await userGetUsernamePrisma(username);
    if (!user) return res.sendStatus(404);
    
    // Compare the user password given with the one stored
    if (!compareWithHash(password, user.password)) return res.sendStatus(403);

    // Create the user token for future authentication
    const token = createUserToken(user);

    // Create the user view containing the authentication token
    const userView = userViewer(user, token);

    return res.json(userView);
  } catch (error) {
    return next(error)
  }
}
