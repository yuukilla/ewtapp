import prisma from "../prisma";

interface UpdateFields {
  username?: string;
  firstName: string;
  lastName : string;
  email    : string;
  password : string;
}

export default async function userUpdatePrisma(
  username: string,
  info: UpdateFields
) {
  if (!username) return null;
  const user = prisma.user.update({
    where: { username }, data: info
  });
  return user;
}
