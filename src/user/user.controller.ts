import {
  Controller,
  Param,
  Body,
  Get,
  Post,
  Put,
  Delete,
} from "routing-controllers";
import Container, { Inject, Service } from "typedi";
import { UserTestService } from "./services/test.service";

@Controller("/users")
@Service()
export class UserController {
  constructor(public userTestService: UserTestService) {}
  @Get()
  getAll() {
    return this.userTestService.hello();
  }

  @Get("/users/:id")
  getOne(@Param("id") id: number) {
    return "This action returns user #" + id;
  }

  @Post("/users")
  post(@Body() user: any) {
    return "Saving user...";
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
