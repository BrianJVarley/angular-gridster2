import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';

import {
  DisplayGrid,
  GridsterConfig,
  GridsterItem,
  GridType,
} from 'angular-gridster2';

@Component({
  selector: 'app-split-column',
  templateUrl: './splitColumnLayout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class SplitColumnLayoutComponent implements OnInit {
  options: GridsterConfig;
  dashboard: Array<GridsterItem>;

  ngOnInit() {
    this.options = {
      gridType: GridType.Fit,
      displayGrid: DisplayGrid.None,
      pushItems: false,
      swap: true,
      draggable: {
        enabled: true,
      },
      resizable: {
        enabled: true,
      },
      // Min / Max grid item size config
      maxItemArea: 800,
      //minItemArea: 50,
      defaultItemCols: 2,
      defaultItemRows: 2,
    };

    // Example grid items take up two columns and two rows
    // worth of grid space each
    this.dashboard = [
      { cols: 2, rows: 2, y: 2, x: 2 },
      { cols: 2, rows: 2, y: 2, x: 2 },
      { cols: 2, rows: 2, y: 2, x: 2 },
      { cols: 2, rows: 2, y: 2, x: 2 },
    ];
  }

  changedOptions() {
    if (this.options.api && this.options.api.optionsChanged) {
      this.options.api.optionsChanged();
    }
  }

  removeItem($event, item) {
    $event.preventDefault();
    $event.stopPropagation();
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
  }

  addItem() {
    this.dashboard.push({ x: 0, y: 0, cols: 2, rows: 2 });
  }
}
