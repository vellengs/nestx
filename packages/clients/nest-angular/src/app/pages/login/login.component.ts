import { Router } from '@angular/router';
import { Component, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd';
import { UserService } from '@services/user.service';
import { StartupService } from '@core/startup/startup.service';

@Component({
    selector: 'app-pages-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.less']
})
export class CustomLoginComponent implements OnDestroy {

    form: FormGroup;
    error = '';
    type = 0;
    loading = false;
    count = 0;
    interval$: any;
    links;

    constructor(
        fb: FormBuilder,
        private router: Router,
        public msg: NzMessageService,
        public userService: UserService,
        private start: StartupService
    ) {
        this.form = fb.group({
            userName: [null, [Validators.required, Validators.minLength(5)]],
            password: [null, Validators.required],
            mobile: [null, [Validators.required, Validators.pattern(/^1\d{10}$/)]],
            remember: [true]
        });
    }

    get userName() { return this.form.controls.userName; }
    get password() { return this.form.controls.password; }
    get mobile() { return this.form.controls.mobile; }

    async submit() {
        try {

            this.error = '';
            this.userName.markAsDirty();
            this.userName.updateValueAndValidity();
            this.password.markAsDirty();
            this.password.updateValueAndValidity();
            if (this.userName.invalid || this.password.invalid) return;

            this.loading = true;
            const res = await this.userService.login({
                username: this.userName.value,
                password: this.password.value
            });
            this.start.load();
            this.loading = false;
            if (res) {
                this.router.navigate(['/']);
            } else {
                this.msg.error('用户名或密码无效, 登录失败');
            }
            
        } catch (ex) {
            console.log('error', ex);
        }
    }

    switch() {

    }

    ngOnDestroy(): void {
        if (this.interval$) {
            clearInterval(this.interval$);
        }
    }
}
