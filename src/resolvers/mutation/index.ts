import {
  Product,
  ProductCreateInput,
  ProductUpdateInput,
  ProductWhereUniqueInput,
  User,
  UserCreateInput
} from '../../generated-prisma-client';
import { IContext } from '../../utils';

export async function createProduct(
  root: any,
  args: { data: ProductCreateInput },
  ctx: IContext
): Promise<Product> {
  return await ctx.prisma.createProduct(args.data);
}

export async function updateProduct(
  root: any,
  args: { data: ProductUpdateInput; where: ProductWhereUniqueInput },
  ctx: IContext
): Promise<Product> {
  return await ctx.prisma.updateProduct(args);
}

export async function deleteProduct(
  root: any,
  args: { where: ProductWhereUniqueInput },
  ctx: IContext
): Promise<Product> {
  return await ctx.prisma.deleteProduct(args.where);
}

export async function createUser(
  root: any,
  args: { data: UserCreateInput },
  ctx: IContext
): Promise<User> {
  return await ctx.prisma.createUser(args.data);
}
