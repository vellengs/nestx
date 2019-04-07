import { Component, OnInit, ChangeDetectorRef, Inject } from '@angular/core';
import { SFComponent, SFGridSchema, ObjectLayoutWidget, FormProperty } from '@delon/form';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'sf-tabs',
    template:
        ` 
<nz-tabset (nzSelectChange)="queryChange([$event])">
    <nz-tab *ngFor="let tab of tabs" [nzTitle]="titleTemplate">
        <ng-template #titleTemplate>
            {{tab.title}}
        </ng-template>
    </nz-tab>
</nz-tabset>
<div>
    <div nz-row [nzGutter]="16">  
        <ng-container *ngIf="grid; else noGrid">
        <nz-row [nzGutter]="grid.gutter">
        <ng-container *ngFor="let i of props[currentIndex]">
            <ng-container *ngIf="i.property.visible">
            <nz-col
                [nzSpan]="i.grid.span" [nzOffset]="i.grid.offset"
                [nzXs]="i.grid.xs" [nzSm]="i.grid.sm" [nzMd]="i.grid.md"
                [nzLg]="i.grid.lg" [nzXl]="i.grid.xl" [nzXXl]="i.grid.xxl">
                <sf-item [formProperty]="i.property" [fixed-label]="i.spanLabelFixed"></sf-item>
            </nz-col>
            </ng-container>
        </ng-container>
        </nz-row>
    </ng-container>
    <ng-template #noGrid>
        <ng-container *ngFor="let i of props[currentIndex]">
        <ng-container *ngIf="i.property.visible">
            <sf-item [formProperty]="i.property" [fixed-label]="i.spanLabelFixed"></sf-item>
        </ng-container>
        </ng-container>
    </ng-template> 
    </div>
</div>
        `,
    preserveWhitespaces: false,

})
export class TabsWidgetComponent extends ObjectLayoutWidget implements OnInit {

    grid: SFGridSchema;
    tabs: any = [];
    static readonly KEY = 'tabs';
    currentIndex = 0;
    props: any = {};

    ngOnInit(): void {
        this.grid = this.ui.grid;
        this.tabs = this.ui.tabs || [];
        this.tabs.forEach((tab, index) => {
            this.props[index] = this.props[index] || [];
            if (Array.isArray(tab.fields)) {
                tab.fields.forEach(element => {
                    const item = this.getFormProperty(element);
                    this.props[index].push(item);
                });
            }
        });
    }

    getFormProperty(key) {
        const property = this.formProperty.properties[key] as FormProperty;
        property.ui = property.ui || {};

        // to fixed ui widget default set by parent. 
        if (property.ui.widget === this.ui.widget) {
            property.ui.widget = property.type;
        }

        const item = {
            property: property,
            grid: property.ui.grid || this.grid || {},
            spanLabelFixed: property.ui.spanLabelFixed,
        };
        return item;
    }


    queryChange(list: any) {
        this.currentIndex = list[0].index;
    }
}
