import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { GridComponent } from './grid/grid.component';
import { HttpClientModule } from '@angular/common/http';
import { MenuModule } from 'primeng/menu';
import { NgModule } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TreeComponent } from './tree/tree.component';
import { TreeModule } from 'primeng/tree';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TreeComponent,
    GridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenuModule,
    TreeModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
