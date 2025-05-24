"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserSchema = exports.CreateUserSchema = void 0;
const zod_1 = require("zod");
exports.CreateUserSchema = zod_1.z.object({
    name: zod_1.z.string().min(2),
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(8),
});
class createUserSchema {
    static partial() {
    }
}
exports.createUserSchema = createUserSchema;
//# sourceMappingURL=create-user.dto.js.map