"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeliveryFactory = void 0;
const delivery_location_1 = require("./delivery-location");
class DeliveryFactory {
    constructor() {
        this.locations = {};
    }
    makeLocation(locationData) {
        const key = this.getLocationKey(locationData);
        if (!this.locations[key]) {
            this.locations[key] = new delivery_location_1.DeliveryLocation(locationData);
        }
        return this.locations[key];
    }
    getLocationKey(locationData) {
        return `${locationData.bairro}-${locationData.rua}-${locationData.cidade}`;
    }
    getLocations() {
        return this.locations;
    }
}
exports.DeliveryFactory = DeliveryFactory;
