import { User } from "@prisma/client"

export default function userViewer(
  user: User, token: string
) {
  const userView = {
    user: {
      id:        user.id,
      username:  user.username,
      email:     user.email,
      firstName: user.firstName,
      lastName:  user.lastName,
      image:     user.image,
      role:      user.role,
      token:     token
    }
  };

  return userView;
}
