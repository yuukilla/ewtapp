import { Request } from "express";
import { expressjwt as jwt } from "express-jwt";

if ( !process.env.JWT_SECRET ) {
  throw new Error(
    "[middleware.auth][authenticator]: JWT_SECRET is missing in enviroment."
  );
}

/**
 * Function that receives a request with possibly an authorization token in the
 * headers and returns this token.
 *
 * @param req Request
 * @returns token
 */
function getTokenInHeader( req: Request ) {
  const authorization = req.headers.authorization;
  
  if ( !authorization ) return;
  if ( authorization.split(" ").length != 2 ) return;

  const [ tag, token ] = authorization.split(" ");
  if ( tag === "Token" || tag === "Bearer" ) return token;

  return;
}

// Middleware that does not throw errors, only if user is able to authenticate.
export const authenticate = jwt({
  algorithms: [ "HS256" ],
  secret    : process.env.JWT_SECRET,
  getToken  : getTokenInHeader
});

// Middleware that does not throw errors. The authentication is optional.
export const optionalAuthenticate = jwt({
  algorithms: [ "HS256" ],
  secret    : process.env.JWT_SECRET,
  credentialsRequired: false,
  getToken  : getTokenInHeader
});

