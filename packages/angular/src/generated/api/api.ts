export * from './cms.service';
import { CmsService } from './cms.service';
export * from './core.service';
import { CoreService } from './core.service';
export const APIS = [CmsService, CoreService];
