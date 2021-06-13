import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState, selectParksComponentViewModel } from 'src/app/reducers';
import { ParkViewModel } from 'src/app/view-models/parks';

@Component({
  selector: 'app-parks',
  templateUrl: './parks.component.html',
  styleUrls: ['./parks.component.css']
})
export class ParksComponent implements OnInit {

  model$!: Observable<ParkViewModel>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.model$ = this.store.select(selectParksComponentViewModel);
  }

}
