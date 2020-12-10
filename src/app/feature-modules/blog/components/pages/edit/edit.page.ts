import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss']
})
export class EditPageComponent implements OnInit {
  id = this.route.snapshot.paramMap.get('id');

  constructor(private readonly route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
