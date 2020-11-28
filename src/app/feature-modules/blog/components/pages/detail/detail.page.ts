import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPageComponent implements OnInit {
  id = this.route.snapshot.paramMap.get('id');

  constructor(private readonly route: ActivatedRoute) {}

  ngOnInit(): void {}
}
