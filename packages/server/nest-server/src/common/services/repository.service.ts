import { Injectable } from "@nestjs/common";
import { Repository, ObjectID, getManager } from "typeorm";
import { ResultList } from "../interfaces/result.interface";

export interface Id {
    id: string | number | Date | ObjectID;
}

@Injectable()
export class RepositoryService<T extends Id> {

    constructor(
        private repository: Repository<T>
    ) { }

    async findAll(page: number, size: number, query: any): Promise<ResultList<T>> {
        return new Promise<ResultList<T>>(async (x) => {
            let result: ResultList<T> = {
                list: await this.repository.find({ skip: size * (page - 1), take: size }),
                count: await this.repository.count(),
                query: {
                    page: page,
                    size: size
                }
            }
            x(result);
        })
    }

    async findOne(id: string | number | Date | ObjectID): Promise<T> {
        return await this.repository.findOne(id);
    }

    async create(entity: any): Promise<any> {
        return await this.repository.save(entity);
    }

    async update(entity: T): Promise<any> {
        let index = await this.repository.findOne(entity.id);
        if (index) {
            Object.assign(index, entity);
            await getManager().transaction(async transactionalEntityManager => {
                await transactionalEntityManager.save(index);
            })

            return index
        }
    }

    async remove(id: string | number | Date | ObjectID): Promise<any> {
        let entity = await this.repository.findOne(id);
        return await this.repository.remove(entity);
    }

}