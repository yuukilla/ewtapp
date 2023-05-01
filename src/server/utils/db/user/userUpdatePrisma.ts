import prisma from "../prisma";

interface UpdateFields {
  username? :   string,
  email?    :   string,
  password? :   string,
  firstName?:   string,
  lastName? :   string,
  image?    :   string,
};

export default async function userUpdatePrisma(
  username: string,
  info    : UpdateFields
) {
  if (!username) return null;

  const user = await prisma.user.update({
    where: { username },
    data : info
  });

  return user;
}

