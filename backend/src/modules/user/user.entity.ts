import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Project } from "../project/project.entity";
import { Task } from "../task/task.entity";
import {CreateUserDto} from "./dto/create-user.dto";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;
    private userRepository: any;
    private bcrypt: any;
    async create(createUserDto: CreateUserDto) {
        const hashedPassword = await this.bcrypt.hash(createUserDto.password, 10);
        const user = this.userRepository.create({
            ...createUserDto,
            password: hashedPassword
        });
        return this.userRepository.save(user);
    }

    @OneToMany(() => Project, (project) => project.owner)
    projects: Project[];

    @OneToMany(() => Task, (task) => task.assignedUser)
    tasks: Task[];
}