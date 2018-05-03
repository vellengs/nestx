import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { getTimeDistance, yuan, SimpleTableColumn } from '@delon/abc';
import { _HttpClient } from '@delon/theme';

@Component({
    selector: 'app-dashboard-page',
    templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {


    constructor(private http: _HttpClient, public msg: NzMessageService) { }

    ngOnInit() {

    }

}
