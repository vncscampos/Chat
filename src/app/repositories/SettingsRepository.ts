import { EntityRepository, Repository } from 'typeorm';

import { Settings } from '../entity/Settings';

@EntityRepository(Settings)
class SettingsRepository extends Repository<Settings> {
    
}

export { SettingsRepository }