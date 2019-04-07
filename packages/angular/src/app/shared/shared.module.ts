import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// delon
import { AlainThemeModule } from '@delon/theme';
import { DelonABCModule } from '@delon/abc';
import { DelonChartModule } from '@delon/chart';
import { DelonACLModule } from '@delon/acl';
import { DelonFormModule } from '@delon/form';

// i18n
import { TranslateModule } from '@ngx-translate/core';

// region: third libs
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CountdownModule } from 'ngx-countdown';
import { UEditorModule } from 'ngx-ueditor';
import { NgxTinymceModule } from 'ngx-tinymce';
import { BaseListComponent } from '@shared/base/base.list.component';
import { BaseComponent } from '@shared/base/base.component';
import { BaseStandComponent } from '@shared/base/base.stand.component';
import { BaseTreeTableComponent } from '@shared/base/base.tree.table';
import { BaseDetailComponent } from '@shared/base/base.detail.component';
import { BaseSelectorComponent } from '@shared/base/base.selector';
import { BaseTreeSelectorComponent } from '@shared/base/base.tree.selector';
import { TransferSelectorComponent } from '@shared/base/transfer.selector';
import { UMeditorModule } from 'ngx-umeditor';

const THIRDMODULES = [
    NgZorroAntdModule,
    CountdownModule,
    UEditorModule,
    UMeditorModule,
    NgxTinymceModule
];
// endregion

// region: your components & directives
const COMPONENTS = [
    BaseComponent,
    BaseListComponent,
    BaseStandComponent,
    BaseTreeTableComponent,
    BaseDetailComponent,
    BaseSelectorComponent,
    BaseTreeSelectorComponent,
    TransferSelectorComponent
];
const DIRECTIVES = [];
// endregion

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        ReactiveFormsModule,
        AlainThemeModule.forChild(),
        DelonABCModule,
        DelonChartModule,
        DelonACLModule,
        DelonFormModule,
        // third libs
        ...THIRDMODULES
    ],
    declarations: [
        // your components
        ...COMPONENTS,
        ...DIRECTIVES
    ],
    entryComponents: [
        ...COMPONENTS,
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        AlainThemeModule,
        DelonChartModule,
        DelonABCModule,
        DelonACLModule,
        DelonFormModule,
        // i18n
        TranslateModule,
        // third libs
        ...THIRDMODULES,
        // your components
        ...COMPONENTS,
        ...DIRECTIVES
    ]
})
export class SharedModule { }
