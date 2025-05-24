"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProjectSwaggerDto = exports.CreateProjectSchema = void 0;
const zod_1 = require("zod");
const swagger_1 = require("@nestjs/swagger");
exports.CreateProjectSchema = zod_1.z.object({
    title: zod_1.z.string().min(3),
    description: zod_1.z.string().optional(),
});
class CreateProjectSwaggerDto {
    title;
    description;
}
exports.CreateProjectSwaggerDto = CreateProjectSwaggerDto;
__decorate([
    (0, swagger_1.ApiProperty)({ minLength: 3, example: 'My Project' }),
    __metadata("design:type", String)
], CreateProjectSwaggerDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, example: 'Project description' }),
    __metadata("design:type", String)
], CreateProjectSwaggerDto.prototype, "description", void 0);
//# sourceMappingURL=create-project.dto.js.map