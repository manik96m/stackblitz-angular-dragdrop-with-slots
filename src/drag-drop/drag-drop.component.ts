import {
  Component,
  ViewEncapsulation,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.css'],
  imports: [DragDropModule],
  standalone: true,
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class DragDropComponent {
  @ViewChild('preview') previewContainer!: ElementRef;

  constructor() {}
}
