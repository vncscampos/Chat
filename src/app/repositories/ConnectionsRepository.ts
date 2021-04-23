import { EntityRepository, Repository } from 'typeorm';

import { Connection } from '../entity/Connection';

@EntityRepository(Connection)
class ConnectionsRepository extends Repository<Connection> { }

export { ConnectionsRepository }