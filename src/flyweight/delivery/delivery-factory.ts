import { DeliveryFlyweight } from './delivery-flyweight';
import { DeliveryLocationData, DeliveryLocationDictionary } from './delivery-types';
import { DeliveryLocation } from './delivery-location';

export class DeliveryFactory {
  private locations: DeliveryLocationDictionary = {};

  makeLocation(locationData: DeliveryLocationData): DeliveryFlyweight {
    const key = this.getLocationKey(locationData);
    if (!this.locations[key]) {
      this.locations[key] = new DeliveryLocation(locationData);
    }
    return this.locations[key];
  }

  private getLocationKey(locationData: DeliveryLocationData): string {
    return `${locationData.bairro}-${locationData.rua}-${locationData.cidade}`;
  }

  getLocations(): DeliveryLocationDictionary {
    return this.locations;
  }
}
