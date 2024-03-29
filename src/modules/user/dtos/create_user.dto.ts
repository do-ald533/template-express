import { IsDateString, IsEmail, IsOptional, IsString } from "class-validator";

export class CreateUserDto {
    @IsOptional()
    @IsString()
    name?: string;

    @IsEmail()
    email: string;

    @IsDateString()
    dateOfBirth: string;
}