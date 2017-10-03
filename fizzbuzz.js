/*
 * A generator function that yields successive items in the game
 * of FizzBuzz, up to and including the given limit, and applying
 * the given rules to each number.
 */
export default function* fizzbuzz(limit, rules) {
    for (let i = 1; i <= limit; i++) {
        let components = rules
            .filter(rule => rule.predicate(i))
            .reduce((curr, rule) => rule.applier(curr), []);
        yield components.length ? components.join('') : i.toString();
    }
}