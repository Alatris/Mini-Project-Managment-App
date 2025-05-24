import { User } from '../user/user.entity';
import { Task } from '../task/task.entity';
export declare class Project {
    id: number;
    title: string;
    description: string;
    owner: User;
    tasks: Task[];
}
