"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deliveryContext = void 0;
const deliveryContext = function (factory, name, bairro, numero, rua, cidade, complemento) {
    const location = factory.makeLocation({ bairro, rua, cidade });
    location.deliver(name, numero, complemento);
};
exports.deliveryContext = deliveryContext;
