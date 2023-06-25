"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeliveryLocation = void 0;
class DeliveryLocation {
    constructor(intrinsicState) {
        this.intrinsicState = intrinsicState;
    }
    deliver(name, numero, complemento) {
        console.log('');
        console.log('##################');
        console.log('Entrega para', name);
        console.log('Em', this.intrinsicState.bairro, this.intrinsicState.rua, this.intrinsicState.cidade);
        console.log('Número:', numero);
        console.log('Complemento:', complemento);
        console.log('##################');
    }
}
exports.DeliveryLocation = DeliveryLocation;
