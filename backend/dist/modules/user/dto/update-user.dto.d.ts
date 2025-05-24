import { z } from 'zod';
export declare const UpdateUserSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    email: z.ZodOptional<z.ZodString>;
    password: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    name?: string | undefined;
    password?: string | undefined;
    email?: string | undefined;
}, {
    name?: string | undefined;
    password?: string | undefined;
    email?: string | undefined;
}>;
export type UpdateUserDto = z.infer<typeof UpdateUserSchema>;
