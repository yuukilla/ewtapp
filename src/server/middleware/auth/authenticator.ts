import { Request } from "express";
import { expressjwt as jwt } from "express-jwt";

if (!process.env.JWT_SECRET) {
  throw new Error("JWT_SECRET missing in enviroment.");
}

/**
 * Function that recieves a request with possibly an authorization token in the
 * headers and returns this token.
 *
 * @param req Request
 * @returns token|undefined
 */
function getTokenInHeader(req: Request) {
  const authorization = req.headers.authorization;
  if (!authorization) return;
  if (authorization.split(" ").length != 2) return;
  const [tag, token] = authorization.split(" ");
  if (tag === "Token" || tag === "Bearer") return token;
  return;
}

export const authenticate = jwt({
  algorithms: ["HS256"],
  secret: process.env.JWT_SECRET,
  getToken: getTokenInHeader
});

export const optionalAuthenticate = jwt({
  algorithms: ["HS256"],
  secret: process.env.JWT_SECRET,
  getToken: getTokenInHeader
});
