import { Service } from "typedi";
import { PrismaClient } from "@prisma/client";

@Service()
export class PrismaService extends PrismaClient {
	constructor() {
		super();
		this.$connect();
	}
}
