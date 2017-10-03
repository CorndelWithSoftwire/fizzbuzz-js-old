/*
 * A class representing a rule to apply to the FizzBuzz game, with
 * the following properties:
 * 
 *   `name`      - A name for the rule
 *   `predicate` - A predicate function that determines if the rule
 *                 applies to a given number.
 *   `applier`   - A function which takes the list of components
 *                 that will currently be displayed for this number,
 *                 and returns the new list of components after this
 *                 rule has been applied.
 */
class Rule {
    constructor(name, predicate, applier) {
        this.name = name;
        this.predicate = predicate;
        this.applier = applier;
    }
}

const modulusPredicate = modulus => index => index % modulus === 0;

const appendComponentApplier = component => components => components.concat([component]);

const setComponentsApplier = newComponents => _ => newComponents;

const insertBeforeApplier = (component, predicate) => components => {
    let index = components.findIndex(predicate);
    return index === -1 
        ? components.concat([component])
        : components.slice(0, index).concat([component], components.slice(index));
}

const reverseComponentsApplier = () => components => components.slice().reverse();

export const RULES = [
    new Rule('Fizz', modulusPredicate(3), appendComponentApplier('Fizz')),
    new Rule('Buzz', modulusPredicate(5), appendComponentApplier('Buzz')),
    new Rule('Bang', modulusPredicate(7), appendComponentApplier('Bang')),
    new Rule('Bong', modulusPredicate(11), setComponentsApplier(['Bong'])),
    new Rule('Fezz', modulusPredicate(13), insertBeforeApplier('Fezz', component => component.charAt(0) === 'B')),
    new Rule('Reverse', modulusPredicate(17), reverseComponentsApplier()),
];