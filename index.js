function fizzFezzBuzzBangBongReverse(limit) {
    const rules = [[3, 'Fizz'], [13, 'Fezz'], [5, 'Buzz'], [7, 'Bang'], [11, 'Bong']];

    for (let i = 1; i <= limit; i++) {
        // Get the basic components of the output for i
        let components = rules.filter(([key, _]) => i % key === 0).map(([_, value]) => value);

        // Apply the additional 'Bong' rule.
        if (components.includes('Bong')) {
            components = components.filter(component => component == 'Bong' || component == 'Fezz');
        }

        // Apply the reversal rule
        if (i % 17 === 0) {
            components.reverse(); 
        }

        console.log(components.length ? components.join('') : i);
    }
}

fizzFezzBuzzBangBongReverse(300);