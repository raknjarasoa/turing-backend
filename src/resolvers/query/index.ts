import { IContext } from '../../utils';
import {
  User,
  FragmentableArray,
  Product
} from '../../generated-prisma-client';

export function users(
  root: any,
  args: any,
  ctx: IContext,
  info: any
): FragmentableArray<User> {
  return ctx.prisma.users();
}

export function products(
  root: any,
  args: any,
  ctx: IContext,
  info: any
): FragmentableArray<Product> {
  return ctx.prisma.products();
}
