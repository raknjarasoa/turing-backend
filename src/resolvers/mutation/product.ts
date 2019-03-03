import { Product, ProductCreateInput } from '../../generated-prisma-client';
import { IContext } from '../../utils';

export async function createProduct(
  root: any,
  args: { data: ProductCreateInput },
  context: IContext
): Promise<Product> {
  return await context.prisma.createProduct(args.data);
}
