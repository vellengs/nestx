import { Injectable } from '@nestjs/common';
import { SettingsService } from 'nestx-base';

@Injectable()
export class AppService {
  constructor(private readonly settingService: SettingsService) {}

  getAppSettings(name: string) {
    return this.settingService.getSettingsByName(name);
  }

  root(): object {
    return null;
  }
}
