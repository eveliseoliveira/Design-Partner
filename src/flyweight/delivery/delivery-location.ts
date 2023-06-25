// Flyweight: A classe `DeliveryLocation` atua como um objeto flyweight, pois é compartilhada por várias entregas, evitando duplicação desnecessária de objetos.
// Estado Intrínseco: O objeto `intrinsicState` contém os dados bairro, rua e cidade, que são o estado intrínseco do objeto DeliveryLocation, compartilhado por várias instâncias.
// Estado Extrínseco: Os dados name, numero e complemento são o estado extrínseco passado para o método `deliver`, pois variam de uma entrega para outra.

import { DeliveryFlyweight } from './delivery-flyweight';
import { DeliveryLocationData as LocationData } from './delivery-types';

export class DeliveryLocation implements DeliveryFlyweight {
  constructor(private readonly intrinsicState: LocationData) {}

  deliver(name: string, numero: string, complemento: string): void {
    console.log('');
    console.log('##################');
    console.log('Entrega para', name);
    console.log('Em', this.intrinsicState.bairro, this.intrinsicState.rua, this.intrinsicState.cidade);
    console.log('Número:', numero);
    console.log('Complemento:', complemento);
    console.log('##################');
  }
}

export type DeliveryLocationData = {
  readonly bairro: string;
  readonly rua: string;
  readonly cidade: string;
};

export type DeliveryLocationDictionary = { [k: string]: DeliveryLocation };
