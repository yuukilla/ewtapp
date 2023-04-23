import prisma from "../prisma";

export default async function userCreatePrisma(
  username:  string,
  firstName: string,
  lastName:  string,
  email:     string,
  password:  string,
  role:      string
) {
  const user = await prisma.user.create({
    data: {
      username,
      firstName,
      lastName,
      email,
      password,
      role
    }
  })
  return user;
}
