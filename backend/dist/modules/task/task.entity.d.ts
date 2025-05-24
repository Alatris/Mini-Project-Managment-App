import { Project } from '../project/project.entity';
import { User } from '../user/user.entity';
export declare enum TaskStatus {
    TODO = "todo",
    IN_PROGRESS = "in_progress",
    DONE = "done"
}
export declare class Task {
    id: number;
    title: string;
    description: string;
    status: TaskStatus;
    project: Project;
    assignedUser: User;
}
