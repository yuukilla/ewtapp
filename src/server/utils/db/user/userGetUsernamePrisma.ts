import prisma from "../prisma";

export default async function userGetUsernamePrisma(username: string) {
  if (!username) return null;

  const user = await prisma.user.findUnique({
    where: { username }
  });

  return user;
}
