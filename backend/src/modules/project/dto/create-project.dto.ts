import { z } from 'zod';
import { ApiProperty } from '@nestjs/swagger';

export const CreateProjectSchema = z.object({
    title: z.string().min(3),
    description: z.string().optional(),
});

export type CreateProjectDto = z.infer<typeof CreateProjectSchema>;

export class CreateProjectSwaggerDto {
    @ApiProperty({ minLength: 3, example: 'My Project' })
    title: string;

    @ApiProperty({ required: false, example: 'Project description' })
    description?: string;
}