import { Exclude } from "class-transformer";

export class UserEntity {
	id: number;
	name: string | null;
	email: string;

    @Exclude()
    dateOfBirth: Date

    @Exclude()
    createdAt: Date;


	constructor(partial: Partial<UserEntity>) {
		Object.assign(this, partial);
	}
}
