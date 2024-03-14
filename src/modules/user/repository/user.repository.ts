import { Service } from "typedi";
import { PrismaService } from "../../../shared/services/prisma.service";
import { Prisma, User } from "@prisma/client";

@Service()
export class UserRepository {
	constructor(private prisma: PrismaService) {}

	async create(user: Prisma.UserCreateInput): Promise<User> {
		return await this.prisma.user.create({
			data: user,
		});
	}
}
