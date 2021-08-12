import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { TreeNode } from 'primeng/api';
import { map } from 'rxjs/operators';

@Component({
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {

  public files!: TreeNode[];

  constructor(private http: HttpClient) { }

  async ngOnInit(): Promise<void> {
    this.http.get('assets/tree.json').pipe(
      map((response: any) => response.data as TreeNode[]),
    ).subscribe((response: TreeNode[]) => {
      this.files = response;
    });
  }

}
