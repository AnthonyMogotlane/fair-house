import { Component, OnInit } from '@angular/core';
import { HousingListService } from 'src/app/housing-list.service';
import { HousingLocation } from 'src/app/housing-location';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  constructor(private housingListService: HousingListService) { }

  title = 'fair-house';
 

  housingLocationList: HousingLocation[] = []

  ngOnInit(): void {
    this.housingLocationList = this.housingListService.getHousingList();
  }
}
