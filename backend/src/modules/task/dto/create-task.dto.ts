export class CreateTaskDto {
    title: string;
    projectId: number;
    assigneeId?: number;
}