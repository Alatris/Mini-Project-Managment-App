import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
export declare class TaskController {
    private readonly taskService;
    constructor(taskService: TaskService);
    create(createTaskDto: CreateTaskDto): Promise<import("./task.entity").Task>;
    findAll(): Promise<import("./task.entity").Task[]>;
    findOne(id: string): Promise<import("./task.entity").Task>;
    update(id: string, updateTaskDto: UpdateTaskDto): Promise<void>;
    remove(id: string): Promise<void>;
}
