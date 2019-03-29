import { Injectable, Get, Param, Post, Body, Put, Delete, ParseIntPipe, Query } from "@nestjs/common";
import { Id, RepositoryService } from "./repository.service";
import { ResultList } from "../interfaces/result.interface";
import { ObjectID } from "typeorm";

@Injectable()
export class ControllerService<T extends Id> {

    constructor(private readonly service: RepositoryService<T>) { }

    @Get(':size/:index')
    async findAll(
        @Param('index', new ParseIntPipe()) index: number = 1,
        @Param('size', new ParseIntPipe()) size: number = 10,
        @Query() query: any): Promise<ResultList<T>> {
        return await this.service.findAll(index, size, query);
    }

    @Get(':id')
    async findOne(@Param('id') id: string | number | Date | ObjectID): Promise<T> {
        return await this.service.findOne(id);
    }

    @Post()
    async create(@Body() entity: any): Promise<T> {
        return await this.service.create(entity);
    }

    @Put()
    async update(@Body() entity: any): Promise<T> {
        return await this.service.update(entity);
    }

    @Delete(':id')
    async remove(@Param('id') id: string): Promise<T> {
        return await this.service.remove(id);
    }

}
