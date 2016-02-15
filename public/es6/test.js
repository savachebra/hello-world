// es6 feature: block-scoped "let" declaration
let sentences = [
    { subject: 'PubJavaScript', verb: 'is', object: 'great' },
    { subject: 'PubElephants', verb: 'are', object: 'large' },
];
// es6 feature: object destructuring
function say({ subject, verb, object }) {
    // es6 feature: template strings
    console.log(`${subject} ${verb} ${object}`);
}
// es6 feature: for..of
for(let s of sentences) {
    say(s);
}