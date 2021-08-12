import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CalendarModule } from 'primeng/calendar';
import { ChartModule } from 'primeng/chart';
import { DropdownModule } from 'primeng/dropdown';
import { GridComponent } from './grid/grid.component';
import { HttpClientModule } from '@angular/common/http';
import { LinechartComponent } from './linechart/linechart.component';
import { MenuModule } from 'primeng/menu';
import { MultiSelectModule } from 'primeng/multiselect';
import { NgModule } from '@angular/core';
import { ProgressBarModule } from 'primeng/progressbar';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TableComponent } from './table/table.component';
import { TableModule } from 'primeng/table';
import { TreeComponent } from './tree/tree.component';
import { TreeModule } from 'primeng/tree';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TreeComponent,
    GridComponent,
    TableComponent,
    LinechartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CalendarModule,
    ChartModule,
    MenuModule,
    MultiSelectModule,
    ProgressBarModule,
    TableModule,
    TreeModule,
    DropdownModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
