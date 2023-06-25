// Estado Intrínseco: A interface `DeliveryLocationData` define a estrutura dos dados intrínsecos que descrevem a localização da entrega.
// Estado Extrínseco: A interface `DeliveryLocationDictionary` define a estrutura dos dados extrínsecos que mapeiam as localizações da entrega.

import { DeliveryLocation } from './delivery-location';

export type DeliveryLocationData = {
  readonly bairro: string;
  readonly rua: string;
  readonly cidade: string;
};

export type DeliveryLocationDictionary = { [k: string]: DeliveryLocation };
