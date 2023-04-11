import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';

@Injectable({
  providedIn: 'root'
})
export class HousingListService {

  getHousingList(): HousingLocation[] {
    return [
      {
        id: 1,
        name: "Acme Fresh Start Housing",
        city: "Chicago",
        state: "IL",
        photo: "assets/img/housing-1.jpg",
        availableUnits: 4,
        wifi: true,
        laundry: true,
      },
      {
        id: 2,
        name: "A113 Transitional Housing",
        city: "Santa Monica",
        state: "CA",
        photo: "assets/img/housing-2.jpg",
        availableUnits: 0,
        wifi: false,
        laundry: true,
      },
      {
        id: 3,
        name: "Warm Beds Housing Support",
        city: "Juneau",
        state: "AK",
        photo: "assets/img/housing-3.jpg",
        availableUnits: 1,
        wifi: false,
        laundry: false,
      }
    ]
  }

}
