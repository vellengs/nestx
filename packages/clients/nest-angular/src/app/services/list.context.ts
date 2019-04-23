import { Injectable, EventEmitter } from '@angular/core';
import { SettingsService, ModalHelper } from '@delon/theme';
import { CoreService } from 'generated';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ListContext {

    public onConfigReady: EventEmitter<any> = new EventEmitter();
    public onEntriesLoaded: EventEmitter<any> = new EventEmitter();

    constructor(
        public client: HttpClient,
        public settings: SettingsService,
        public coreService: CoreService,
        public modalHelper: ModalHelper,

    ) { }

    async init(domain: string, params?: any) {
        const configUrl = `api/${domain}/config`;
        const config = await this.client.get(configUrl, params).toPromise();
        return config;
    }

    async load() {

    }

    async add() {

    }

    async edit() {

    }

    async remove() {

    }

    async removeBatch() {

    }

}
