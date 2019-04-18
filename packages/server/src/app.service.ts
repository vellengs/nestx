import { Injectable } from '@nestjs/common';
import { SettingsService } from './core/controllers/settings.service';
@Injectable()
export class AppService {
  constructor(private readonly settingService: SettingsService) {}

  getAppSettings(name: string) {
    return this.settingService.getSettingsByName(name);
  }

  root(): string {
    return 'Hello World!';
  }
}
