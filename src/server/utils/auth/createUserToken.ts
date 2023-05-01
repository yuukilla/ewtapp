import { User } from "@prisma/client";
import jwt from "jsonwebtoken";

/**
 * Creates a token containing the user information for future authorization.
 *
 * @param user User information to create the token
 * @returns the token created
 */
export default function createUserToken(user: User) {
  if (!process.env.JWT_SECRET)
    throw new Error(
      "[utils.auth][createUserToken]: JWT_SECRET is missing in enviroment."
  );

  const tokenObject = {
    user: {
      id        : user.id,
      username  : user.username,
      email     : user.email,
      firstName : user.firstName,
      lastName  : user.lastName,
      role      : user.role
    }
  };
  const userJSON = JSON.stringify(tokenObject);
  const token    = jwt.sign(userJSON, process.env.JWT_SECRET);

  return token;
}

