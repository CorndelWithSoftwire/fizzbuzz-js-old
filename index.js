import { prompt } from 'readline-sync';
import { RULES } from './rules';
import fizzbuzz from './fizzbuzz';

function promptForLimit() {
    let response;
    do {
        console.log('\nPlease enter the number you\'d like to FizzBuzz up to');
        response = +prompt();
    } while (isNaN(response));
    return response;
}

function promptForEnabledRules() {
    console.log('\nPlease enter the rules that you would like to apply (comma-separated)');
    RULES.forEach((rule, ix) => console.log(`  ${ix + 1}) ${rule.name}`));
    
    const ruleIndices = prompt().split(',').map(x => parseInt(x, 10));
    return RULES.filter((_, ix) => ruleIndices.includes(ix + 1));
}

const limit = promptForLimit();
const enabledRules = promptForEnabledRules();

console.log('\n');
for (let result of fizzbuzz(limit, enabledRules)) {
    console.log(result);
}