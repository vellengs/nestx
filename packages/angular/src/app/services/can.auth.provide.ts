import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd';
import { UserService } from '@services/user.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CanAuthProvide implements CanActivate {

    constructor(private userSrv: UserService,
        public router: Router,
        public httpClient: HttpClient,
        private msg: NzMessageService) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        return new Observable((observer) => {
            if (this.userSrv.isLogin) {
                observer.next(true);
                observer.complete();
                return;
            } else {
                this.userSrv.isUnAuthenticated(this.httpClient).then((res) => {
                    observer.next(true);
                    observer.complete();
                }, (error) => {
                    observer.next(false);
                    observer.complete();
                });
            }
        });
    }

}
