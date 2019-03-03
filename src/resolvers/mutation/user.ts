import { User, UserCreateInput } from '../../generated-prisma-client';
import { IContext } from '../../utils';

export async function createUser(
  root: any,
  args: { data: UserCreateInput },
  context: IContext
): Promise<User> {
  return await context.prisma.createUser(args.data);
}
