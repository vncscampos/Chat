import { getCustomRepository, Repository } from 'typeorm';

import { Connection } from '../entity/Connection';
import { ConnectionsRepository } from '../repositories/ConnectionsRepository';

interface IConnectionCreate {
    admin_id?: string,
    user_id: string,
    socket_id: string,
    id?: string
}

class ConnectionsService {
    private connectionsRepository: Repository<Connection>;

    constructor() {
        this.connectionsRepository = getCustomRepository(ConnectionsRepository);
    }

    async create({ socket_id, user_id, admin_id, id }: IConnectionCreate) {
        const connection = this.connectionsRepository.create({
            socket_id,
            user_id,
            admin_id,
            id
        });

        await this.connectionsRepository.save(connection);

        return connection;
    }

    async findByUserId(user_id: string) {
        const connection = await this.connectionsRepository.findOne({
            user_id,
        });

        if (!connection) {
            throw new Error('User does not exist');
        }

        return connection;
    }
}

export { ConnectionsService }