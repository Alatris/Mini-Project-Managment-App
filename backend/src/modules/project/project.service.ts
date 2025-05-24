import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Project } from './project.entity';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';

@Injectable()
export class ProjectService {
    constructor(
        @InjectRepository(Project)
        private projectRepository: Repository<Project>,
    ) {}

    create(createProjectDto: CreateProjectDto) {
        const project = this.projectRepository.create(createProjectDto);
        return this.projectRepository.save(project);
    }

    findAll() {
        return this.projectRepository.find();
    }

    findOne(id: number) {
        return this.projectRepository.findOne({ where: { id } });
    }

    update(id: number, updateProjectDto: UpdateProjectDto) {
        return this.projectRepository.update(id, updateProjectDto);
    }

    remove(id: number) {
        return this.projectRepository.delete(id);
    }
}