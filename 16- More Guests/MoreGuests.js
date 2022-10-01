var guests = ['Einstein', 'Newton', 'Kepler'];
console.log('Hey ' + guests[0] + ', you are invited to my party');
console.log('Hey ' + guests[1] + ', you are invited to my party');
console.log('Hey ' + guests[2] + ', you are invited to my party');

console.log('\nI found a bigger table\n');

guests.unshift('Darwin');
guests.splice(2, 0, 'Copernicus');
guests.push('Curie');

console.log('Hey ' + guests[0] + ', you are invited to my party');
console.log('Hey ' + guests[1] + ', you are invited to my party');
console.log('Hey ' + guests[2] + ', you are invited to my party');
console.log('Hey ' + guests[3] + ', you are invited to my party');
console.log('Hey ' + guests[4] + ', you are invited to my party');
console.log('Hey ' + guests[5] + ', you are invited to my party');
