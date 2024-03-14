import { Service } from "typedi";
import { UserRepository } from "../repository/user.repository";
import { CreateUserDto } from "../dtos/create_user.dto";
import { UserEntity } from "../entities/user.entity";

@Service()
export class CreatorService {
	constructor(private userRepository: UserRepository) {}

	public async create(userDto: CreateUserDto) {
        const user = await this.userRepository.create(userDto);

        return new UserEntity(user);
    }
}
