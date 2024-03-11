import 'dotenv/config'
import 'reflect-metadata';
import { createExpressServer, useContainer } from 'routing-controllers';
import { Container } from 'typedi';
import { UserController } from './user/user.controller';

useContainer(Container);

createExpressServer({
  controllers: [UserController],
}).listen(3000);