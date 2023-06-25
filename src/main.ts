import { DeliveryFactory } from './flyweight/delivery/delivery-factory';
import { deliveryContext } from './flyweight/delivery/delivery-context';

const factory = new DeliveryFactory();

function readLine(prompt: string): Promise<string> {
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });
 
  return new Promise<string>((resolve) => {
    readline.question(prompt, (input: string) => {
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

  deliveryContext(factory, name, bairro, numero, rua, cidade, complemento); 
  console.log('\n---\n');
  console.log(factory.getLocations());
}

createDelivery().catch((error: any) => console.error(error));
