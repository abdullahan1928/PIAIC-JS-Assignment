var guests = ['Einstein', 'Newton', 'Kepler', 'Copernicus', 'Curie', 'Darwin'];
console.log('Hey ' + guests[0] + ', you are invited to my party');
console.log('Hey ' + guests[1] + ', you are invited to my party');
console.log('Hey ' + guests[2] + ', you are invited to my party');
console.log('Hey ' + guests[3] + ', you are invited to my party');
console.log('Hey ' + guests[4] + ', you are invited to my party');
console.log('Hey ' + guests[5] + ', you are invited to my party');

console.log('\nI can only invite two people for dinner for which I am very sorry\n');
var guestsLength = guests.length;
for (var i = 0; i < guestsLength - 2; i++) {
    var removedGuest = guests.pop();
    console.log('Sorry ' + removedGuest + ', you are not invited to my party');
}

console.log('\nHey ' + guests[0] + ', you are still invited to my party');
console.log('Hey ' + guests[1] + ', you are still invited to my party');

guests.pop();
guests.pop();

console.log('\nThis is empty list' + guests);