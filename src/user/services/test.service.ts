import { Service } from "typedi";

@Service()
export class UserTestService {
    public hello() {
        return 'hello world!'
    }
}