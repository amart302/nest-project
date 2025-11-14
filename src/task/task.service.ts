import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskDto } from './task.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class TaskService {
    constructor(private prisma: PrismaService){}
    
    async getAll(){
        return await this.prisma.task.findMany();
    }

    async getById(id: string){
        const task = await this.prisma.task.findUnique({
            where: { id: +id }
        });

        if(!task) throw new NotFoundException("Task not found");

        return task;
    }

    async create(dto: TaskDto){
        return this.prisma.task.create({
            data: dto
        });
    }

    async toggleDone(id: string){
        const task = await this.getById(id);

        if(!task) throw new NotFoundException("Task not found");

        return this.prisma.task.update({
            where: { id: +id },
            data: { isDone: !task.isDone }
        });
    }
}
