const readline = require('readline-sync');

function promptForLimit() {
    let response;
    do {
        console.log('Please enter the number you\'d like to FizzBuzz up to');
        response = +readline.prompt();
    } while (isNaN(response));
    return response;
}

function getEnabledRules() {
    const commandLineArgs = process.argv.slice(2);

    // If no arguments were supplied, default to all of the rules.
    if (commandLineArgs.length === 0) {
        return [3, 5, 7, 11, 13, 17];
    } else {
        return commandLineArgs.map(arg => +arg);
    }
}

function fizzFezzBuzzBangBongReverse(limit, enabledRules) {
    const rules = [[3, 'Fizz'], [13, 'Fezz'], [5, 'Buzz'], [7, 'Bang'], [11, 'Bong']];

    for (let i = 1; i <= limit; i++) {
        // Get the basic components of the output for i
        let components = rules
            .filter(([key, _]) => i % key === 0 && enabledRules.includes(key))
            .map(([_, value]) => value);

        // Apply the additional 'Bong' rule.
        if (components.includes('Bong')) {
            components = components.filter(component => component == 'Bong' || component == 'Fezz');
        }

        // Apply the reversal rule
        if (i % 17 === 0 && enabledRules.includes(17)) {
            components.reverse(); 
        }

        console.log(components.length ? components.join('') : i);
    }
}

const limit = promptForLimit();
const enabledRules = getEnabledRules();
fizzFezzBuzzBangBongReverse(limit, enabledRules);