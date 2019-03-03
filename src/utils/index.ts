import Stripe from 'stripe';
import { verify } from 'jsonwebtoken';

import { Prisma } from '../generated-prisma-client';

export const stripe = new Stripe(process.env.STRIPE_SECRET);

export interface IContext {
  prisma: Prisma;
}

export function hasPermission(user, permissionsNeeded): void {
  const matchedPermissions = user.permissions.filter((permissionTheyHave) =>
    permissionsNeeded.includes(permissionTheyHave)
  );
  if (!matchedPermissions.length) {
    throw new Error(
      `You do not have sufficient permissions : ${permissionsNeeded} You Have: ${
        user.permissions
      }`
    );
  }
}

export function getUserId(context: any): string {
  const Authorization = context.request.get('Authorization');
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '');
    const { userId } = verify(token, process.env.APP_SECRET) as {
      userId: string;
    };
    return userId;
  }

  throw new Error('Not authorized');
}
