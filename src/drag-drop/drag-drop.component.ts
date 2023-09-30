import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.css'],
  imports: [DragDropModule],
  standalone: true,
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class DragDropComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
