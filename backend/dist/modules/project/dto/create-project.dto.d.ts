import { z } from 'zod';
export declare const CreateProjectSchema: z.ZodObject<{
    title: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    title: string;
    description?: string | undefined;
}, {
    title: string;
    description?: string | undefined;
}>;
export type CreateProjectDto = z.infer<typeof CreateProjectSchema>;
export declare class CreateProjectSwaggerDto {
    title: string;
    description?: string;
}
