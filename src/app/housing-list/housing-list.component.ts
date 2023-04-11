import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { HousingLocation } from '../housing-location';

@Component({
  selector: 'app-housing-list',
  templateUrl: './housing-list.component.html',
  styleUrls: ['./housing-list.component.css']
})

export class HousingListComponent implements OnInit {

  @Input() locationList: HousingLocation[] = [];
  results: HousingLocation[] = [];
  @Output() locatingSelectedEvent: EventEmitter<HousingLocation> = new EventEmitter<HousingLocation>;

  searchHousingLocations(searchText: string) {
    if(!searchText) {
      this.results = this.locationList;
    }
    this.results = this.locationList.filter((location: HousingLocation) => location.city.toLowerCase().includes(searchText.toLowerCase()))
    console.log(this.results);
  }
  
  ngOnInit(): void {
    this.results = this.locationList;
  }

  selectHousingLocation(location: HousingLocation) {
    this.locatingSelectedEvent.emit(location);
  }
}
