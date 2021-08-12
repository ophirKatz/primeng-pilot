import { Component, OnInit } from '@angular/core';

import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  items!: MenuItem[];

  constructor() { }

  ngOnInit() {
    this.items = [
      { label: 'Tree', routerLink: 'tree' },
      { label: 'Grid', routerLink: 'grid' },
      { label: 'DataView', routerLink: 'dataview' },
      { label: 'Table', routerLink: 'table' },
      { label: 'Line Chart', routerLink: 'linechart' }
    ];
  }

}
