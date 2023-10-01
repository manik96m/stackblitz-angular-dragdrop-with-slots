import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { DragDropComponent } from './drag-drop/drag-drop.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, DragDropComponent],
  template: `
    <div>
      <app-drag-drop>
        <div slot="item1" style="z-index: 1001">ITEM 1 IN SLOT</div>
        <div slot="item2">ITEM 2 IN SLOT</div>
      </app-drag-drop>
    </div>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
