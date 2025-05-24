import { z } from 'zod';

export const CreateUserSchema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    password: z.string().min(8),
});

export type CreateUserDto = z.infer<typeof CreateUserSchema>;

export class createUserSchema {
    static partial() {

    }
}