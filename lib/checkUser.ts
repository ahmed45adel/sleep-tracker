import { currentUser } from '@clerk/nextjs/server';

import { db } from '@/lib/db';

export const checkUser = async () => {
  const user = await currentUser();
  if (!user) {
    return null;
  }

  // Check if the user is already in the database
  const loggedInUser = await db.user.findUnique({
    where: {
      clerkUserId: user.id,
    },
  });

  // If user is in database, return user
  if (loggedInUser) {
    return loggedInUser;
  }
};
