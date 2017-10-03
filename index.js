function fizzFezzBuzzBangBong(limit) {
    for (let i = 1; i <= limit; i++) {
        let output = '';
        let fezz = false;

        if (i % 3 === 0) {
            output += 'Fizz';
        }

        if (i % 13 === 0) {
            output += 'Fezz';
            fezz = true;
        }
        
        if (i % 5 === 0) {
            output += 'Buzz';
        }

        if (i % 7 === 0) {
            output += 'Bang';
        }

        if (i % 11 === 0) {
            output = fezz ? 'FezzBong' : 'Bong';
        }

        if (output.length === 0) {
            output = i.toString();
        }

        console.log(output);
    }
}

fizzFezzBuzzBangBong(200);