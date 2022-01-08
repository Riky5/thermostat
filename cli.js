import readline from 'readline';
import { Thermostat } from "./thermostat.js";
import util from 'util';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const question = util.promisify(rl.question).bind(rl);
const thermostat = new Thermostat();

async function thermoQuestion() {
  console.log(`The temperature is ${thermostat.initTemp}`);
  try {
    const answer = await question(`Enter command `);
    console.log(answer);
      if (answer === 'up') {
        thermostat.up();
      } else {
        thermostat.down();
      }
      thermoQuestion();
    } catch (err) {
      console.log('Question rejected', err);
    }
}

thermoQuestion();