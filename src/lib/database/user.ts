import { Post } from "@/types/Post";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getAllPosts() {
  const posts = await prisma.post.findMany();
  prisma.$disconnect();
  return posts;
}

export async function getPost(id: number): Promise<Post> {
  const post = await prisma.post.findFirst({
    where: {
      id: id,
    },
  });

  if (post === null) {
    return Promise.reject(new Error("Database returned null"));
  }

  prisma.$disconnect();
  return post;
}
