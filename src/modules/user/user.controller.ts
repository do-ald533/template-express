import {
  Controller,
  Param,
  Body,
  Get,
  Post,
  Put,
  Delete,
  JsonController,
} from "routing-controllers";
import { Service } from "typedi";
import { CreatorService } from "./services";
import { CreateUserDto } from "./dtos";

@JsonController("/users")
@Service()
export class UserController {
  constructor(private creatorService: CreatorService) {}
  @Get()
  getAll() {
    return ''
  }

  @Get("/users/:id")
  getOne(@Param("id") id: number) {
    return "This action returns user #" + id;
  }

  @Post()
  async post(@Body() user: CreateUserDto) {
   return await this.creatorService.create(user)
  }

  @Put("/users/:id")
  put(@Param("id") id: number, @Body() user: any) {
    return "Updating a user...";
  }

  @Delete("/users/:id")
  remove(@Param("id") id: number) {
    return "Removing user...";
  }
}
