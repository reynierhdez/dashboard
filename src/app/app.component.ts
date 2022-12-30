import { Component } from '@angular/core';
import { coerceNumberProperty } from '@angular/cdk/coercion';
import {
    KtdDragEnd, KtdDragStart, KtdGridLayout, KtdResizeEnd, KtdResizeStart
} from '@katoid/angular-grid-layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dashboard';
  x = 0.1;
  y = 0.1;
  width = 0.3;
  height = 0.3;
  threeTuple = [1, 1, 1];
  greenwidth = 33;
  yellowwidth = 33;
  redwidth = 33;
  compactType: 'vertical' | 'horizontal' | null = null;
  layout: KtdGridLayout = [
    { id: 'widget', x: 0.1, y: 0.1, w: 0.3, h: 0.3 },
];

  onXChange(event: any) {
    console.log('onXChange', event);
    this.x = coerceNumberProperty((event.target as HTMLInputElement).value)

    this.layout = [
      { id: 'widget', x: this.x, y: this.y, w: this.width, h: this.height },
    ];
  }

  onYChange(event: any) {
    console.log('onYChange', event);
    this.y = coerceNumberProperty((event.target as HTMLInputElement).value)
    this.layout = [
      { id: 'widget', x: this.x, y: this.y, w: this.width, h: this.height },
    ];
  }

  onWidthChange(event: any) {
    console.log('onWidthChange', event);
    this.width = coerceNumberProperty((event.target as HTMLInputElement).value)
    this.layout = [
      { id: 'widget', x: this.x, y: this.y, w: this.width, h: this.height },
    ];
  }

  onHeightChange(event: any) {
    console.log('onHeightChange', event);
    this.height = coerceNumberProperty((event.target as HTMLInputElement).value)
    this.layout = [
      { id: 'widget', x: this.x, y: this.y, w: this.width, h: this.height },
    ];
  }

  onThreeTupleChange(event: any) {
    console.log('onThreeTupleChange', event);
    this.threeTuple = (event.target as HTMLInputElement).value.split(',').map((value) => coerceNumberProperty(value))
    
    this.redwidth = this.threeTuple[0] / (this.threeTuple[0] + this.threeTuple[1] + this.threeTuple[2]) * 100;
    this.yellowwidth = this.threeTuple[1] / (this.threeTuple[0] + this.threeTuple[1] + this.threeTuple[2]) * 100;
    this.greenwidth = this.threeTuple[2] / (this.threeTuple[0] + this.threeTuple[1] + this.threeTuple[2]) * 100;    
  }

  onDragStarted(event: KtdDragStart) {
    console.log('onDragStarted', event);
  }
  
  onResizeStarted(event: KtdResizeStart) {
    console.log('onResizeStarted', event);
  }

  onDragEnded(event: KtdDragEnd) {
    console.log('onDragEnded', event);
  }

  onResizeEnded(event: KtdResizeEnd) {
    console.log('onResizeEnded', event);
  }
  
  onLayoutUpdated(layout: KtdGridLayout) {
    console.log('on layout updated', layout);
    this.layout = layout;
    this.x = layout[0].x;
    this.y = layout[0].y;
    this.width = layout[0].w;
    this.height = layout[0].h;
  }
}
