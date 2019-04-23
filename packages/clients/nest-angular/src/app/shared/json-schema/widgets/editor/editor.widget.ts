import { Component } from '@angular/core';
import { ControlWidget } from '@delon/form';

@Component({
  selector: 'sf-editor',
  template: `
  <sf-item-wrap [id]="id" [schema]="schema" [ui]="ui" [showError]="showError" [error]="error" [showTitle]="schema.title">
    <editor
      [ngModel]="value" name="sf.editor" (ngModelChange)="_change($event)"></editor>
  </sf-item-wrap>
  `,
  preserveWhitespaces: false,
})
// tslint:disable-next-line: component-class-suffix
export class EditorWidget extends ControlWidget {
  static readonly KEY = 'editor';

  _change(value: string) {
    this.setValue(value);
    if (this.ui.onContentChanged) this.ui.onContentChanged(value);
  }
}
