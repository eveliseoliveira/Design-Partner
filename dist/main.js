"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const delivery_factory_1 = require("./flyweight/delivery/delivery-factory");
const delivery_context_1 = require("./flyweight/delivery/delivery-context");
const factory = new delivery_factory_1.DeliveryFactory();
function readLine(prompt) {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    return new Promise((resolve) => {
        readline.question(prompt, (input) => {
            readline.close();
            resolve(input);
        });
    });
}
async function createDelivery() {
    const name = await readLine('Nome: ');
    const bairro = await readLine('Bairro: ');
    const numero = await readLine('Número: ');
    const rua = await readLine('Rua: ');
    const cidade = await readLine('Cidade: ');
    const complemento = await readLine('Complemento: ');
    (0, delivery_context_1.deliveryContext)(factory, name, bairro, numero, rua, cidade, complemento);
    console.log('\n---\n');
    console.log(factory.getLocations());
}
createDelivery().catch((error) => console.error(error));
