var guests = ['Einstein', 'Newton', 'Kepler'];
console.log('Hey ' + guests[0] + ', you are invited to my party');
console.log('Hey ' + guests[1] + ', you are invited to my party');
console.log('Hey ' + guests[2] + ', you are invited to my party');

console.log('\n' + guests[1] + ' cannot make it to the party\n');
guests[1] = 'Darwin';

console.log('Hey ' + guests[0] + ', you are invited to my party');
console.log('Hey ' + guests[1] + ', you are invited to my party');
console.log('Hey ' + guests[2] + ', you are invited to my party');