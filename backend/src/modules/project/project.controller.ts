import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { ProjectService } from './project.service';
import {CreateProjectDto, CreateProjectSchema} from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';

@Controller('projects')
export class ProjectController {
    constructor(private readonly projectService: ProjectService) {}

    @Post()
    createProject(
        @Body() body: unknown,
    ) {
        const data: CreateProjectDto = CreateProjectSchema.parse(body);
        return this.projectService.create(data);
    }

    @Get()
    findAll() {
        return this.projectService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.projectService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateProjectDto: UpdateProjectDto) {
        return this.projectService.update(+id, updateProjectDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.projectService.remove(+id);
    }
}