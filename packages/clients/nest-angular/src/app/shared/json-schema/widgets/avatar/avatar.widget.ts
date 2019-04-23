import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { UploadFile, UploadChangeParam, NzModalService } from 'ng-zorro-antd';
import { ControlWidget } from '@delon/form';

@Component({
    selector: 'sf-avatar',
    template: `
  <sf-item-wrap [id]="id" [schema]="schema" [ui]="ui" [showError]="showError" [error]="error" [showTitle]="schema.title">
    <nz-upload class="avatar-uploader"
      [nzShowUploadList]="false"
      nzListType="picture-card"
      [nzType]="i.type" 
      [nzDisabled]="disabled"
      [nzAction]="i.action"
      [nzAccept]="i.accept"
      [nzLimit]="i.limit" 
      [nzSize]="i.size"
      [nzFileType]="i.fileType" 
      [nzData]="ui.asyncData"
      [nzMultiple]="i.multiple"
      [nzName]="i.name"
       (nzChange)="change($event)"> 
        <ng-container *ngIf="!value">
          <i class="anticon anticon-plus"></i>
          <div class="ant-upload-text">点击上传</div>
          </ng-container>  
       <img *ngIf="value" [src]="imageSrc" class="avatar">
    </nz-upload>

  </sf-item-wrap>
  `,
    preserveWhitespaces: false,
})
export class AvatarWidgetComponent extends ControlWidget implements OnInit {
    i: any;
    fileList: UploadFile[] = [];
    btnType = '';
    static readonly KEY = 'avatar';

    get imageSrc() {

        if (this.value && (this.value.startsWith('/') || this.value.startsWith('http'))) {
            return this.value;
        }

        const src = `${document.location.pathname}` + this.value;
        return src;
    }

    ngOnInit(): void {
        this.i = {
            type: this.ui.type || 'select',
            text: this.ui.text || '点击上传',
            action: this.ui.action || '',
            accept: this.ui.accept || '',
            limit: this.ui.limit == null ? 0 : +this.ui.limit,
            size: this.ui.size == null ? 0 : +this.ui.size,
            fileType: this.ui.fileType || '',
            listType: this.ui.listType || 'text',
            multiple: this.ui.multiple || false,
            name: this.ui.name || 'file',
            showUploadList: false,
            withCredentials: this.ui.withCredentials || false,
            resReName: (this.ui.resReName || '').split('.'),
        };
    }

    change(args: UploadChangeParam) { 
        console.log('args:', args);
        if (args.type !== 'success') return;
        if (args.file && args.file.response) {
            const value = args.file.response.file;
            this.formProperty.setValue(value, false);
        }
    }

    handlePreview = (file: UploadFile) => {
        this.injector.get(NzModalService).create({
            nzContent: `<img src="${file.url ||
                file.thumbUrl}" class="img-fluid" />`,
            nzFooter: null,
        }).afterClose.subscribe(() => this.detectChanges());
    }
}
