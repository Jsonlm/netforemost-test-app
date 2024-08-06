import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Meal } from 'src/app/core/entities/meal';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.page.html',
  styleUrls: ['./card-list.page.scss'],
})
export class CardListPage implements OnInit {

  @Input() itemsList: Meal[] = [];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToDetails(id: string | undefined) {
    this.router.navigateByUrl(`/details/${id}`);
  }

}
