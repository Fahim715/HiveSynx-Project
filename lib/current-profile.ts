import { auth } from "@clerk/nextjs/server";

import { db } from "@/lib/db";

export const currentProfile = async (authObj?: any) => {
  const { userId } = authObj ? await auth() : await auth();

  if (!userId) {
    return null;
  }
  const profile = await db.profile.findUnique({
    where: {
      userId
    }
  });

  return profile;
}