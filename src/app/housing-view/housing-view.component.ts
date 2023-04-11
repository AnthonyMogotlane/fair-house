import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HousingLocation } from '../housing-location';
import { HousingListService } from '../housing-list.service';

@Component({
  templateUrl: './housing-view.component.html',
  styleUrls: ['./housing-view.component.css']
})
export class HousingViewComponent implements OnInit {

  selectedLocation: HousingLocation | undefined;

  constructor(private router: Router, private route: ActivatedRoute, private housingListService: HousingListService) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.selectedLocation = this.housingListService.getHousingList().find(location => location.id === id)
  }

  updateLocatingSelectedEvent(housingLocation: HousingLocation): void {
    this.selectedLocation = housingLocation;
  }

  backToHomePage(): void {
    this.router.navigate(["/home"]);
  }
}
