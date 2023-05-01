import prisma from "../prisma";

export default async function userCreatePrisma(
  username:     string,
  email:        string,
  firstName:    string,
  lastName:     string,
  password:     string,
) {
  const user = await prisma.user.create({
    data: {
      username,
      email,
      firstName,
      lastName,
      password
    }
  })

  return user;
}

