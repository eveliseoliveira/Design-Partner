// Flyweight: A função `makeLocation` cria e retorna objetos DeliveryLocation (Flyweight) com base nos dados intrínsecos, evitando duplicação desnecessária de objetos.
// Estado Intrínseco: Os dados bairro, rua e cidade são considerados o estado intrínseco do objeto DeliveryLocation, pois são compartilhados por várias instâncias.
// Estado Extrínseco: Os dados name, numero e complemento são considerados o estado extrínseco passado para o método `deliver`, pois variam de uma entrega para outra.

import { DeliveryFactory } from './delivery-factory';

export const deliveryContext = function (
  factory: DeliveryFactory,
  name: string,
  bairro: string,
  numero: string,
  rua: string,
  cidade: string,
  complemento: string,
): void {
  const location = factory.makeLocation({ bairro, rua, cidade });
  location.deliver(name, numero, complemento);
};
