// Flyweight: A interface `DeliveryFlyweight` define o contrato para os objetos flyweight que podem realizar a entrega.

export interface DeliveryFlyweight {
  deliver(name: string, numero: string, complemento: string): void;
}
