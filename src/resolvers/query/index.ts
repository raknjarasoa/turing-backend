import {
  FragmentableArray,
  Product,
  ProductPromise,
  ProductWhereUniqueInput,
  User,
  UserWhereUniqueInput
} from '../../generated-prisma-client';
import { IContext } from '../../utils';

export function products(
  root: any,
  args: any,
  ctx: IContext,
  info: any
): FragmentableArray<Product> {
  return ctx.prisma.products();
}

export function product(
  root: any,
  args: { where: ProductWhereUniqueInput },
  ctx: IContext,
  info: any
): ProductPromise {
  return ctx.prisma.product(args.where);
}

export function users(
  root: any,
  args: any,
  ctx: IContext,
  info: any
): FragmentableArray<User> {
  return ctx.prisma.users();
}

export async function user(
  root: any,
  args: { where: UserWhereUniqueInput },
  ctx: IContext,
  info: any
): Promise<User> {
  return await ctx.prisma.user(args.where);
}
