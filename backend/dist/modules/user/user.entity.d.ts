import { Project } from "../project/project.entity";
import { Task } from "../task/task.entity";
import { CreateUserDto } from "./dto/create-user.dto";
export declare class User {
    id: number;
    name: string;
    email: string;
    password: string;
    private userRepository;
    private bcrypt;
    create(createUserDto: CreateUserDto): Promise<any>;
    projects: Project[];
    tasks: Task[];
}
