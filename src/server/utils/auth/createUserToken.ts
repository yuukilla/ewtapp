import { User } from "@prisma/client";
import jwt from "jsonwebtoken";

/**
 * Creates a token containing the user
 * information for the future authorization.
 * 
 * @param user User information to create the token
 * @returns the token created
 */
export default function createUserToken(user: User) {
  if (!process.env.JWT_SECRET)
    throw new Error("JWT_SECRET missing in enviroment.");
  const tokenObject = {
    user: {
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email
    }
  };
  const userJSON = JSON.stringify(tokenObject);
  const token    = jwt.sign(userJSON, process.env.JWT_SECRET);
  

  return token;
}
