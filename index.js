function fizzBuzzBang(limit) {
    for (let i = 1; i <= limit; i++) {
        let output = '';

        if (i % 3 === 0) {
            output += 'Fizz';
        }
        
        if (i % 5 === 0) {
            output += 'Buzz';
        }

        if (i % 7 === 0) {
            output += 'Bang';
        }

        if (output.length === 0) {
            output = i.toString();
        }

        console.log(output);
    }
}

fizzBuzzBang(200);