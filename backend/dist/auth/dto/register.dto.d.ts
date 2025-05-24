import { z } from 'zod';
export declare const RegisterSchema: z.ZodEffects<z.ZodObject<{
    name: z.ZodString;
    email: z.ZodString;
    password: z.ZodString;
    confirmPassword: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    password: string;
    email: string;
    confirmPassword: string;
}, {
    name: string;
    password: string;
    email: string;
    confirmPassword: string;
}>, {
    name: string;
    password: string;
    email: string;
    confirmPassword: string;
}, {
    name: string;
    password: string;
    email: string;
    confirmPassword: string;
}>;
export type RegisterDto = z.infer<typeof RegisterSchema>;
