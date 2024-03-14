import 'dotenv/config'
import 'reflect-metadata';
import { createExpressServer, useContainer } from 'routing-controllers';
import { Container } from 'typedi';
import { UserController } from './modules/user/user.controller';

useContainer(Container);

createExpressServer({
  controllers: [UserController],
  validation: true
}).listen(3000);