const numbers = [];
const minimum = 1;
// asaqida maximum-ma (infinity-de yaza bilersiz)
// ve ya BigInt("1234567890123456789012345678901234567890") =de yaza bilersiz;
const maximum = 100;
// numbers arrayni minimumdan maximuma qeder doldurduq
for (let i = minimum; i <= maximum; i++) {
    numbers.push(i);
}
// funksiya array massivinden bir random reqem qoturur ve onu massivden silir
function randomNum() {
    if (numbers.length == 0) {
        // number arr- de reqem sati bitende asqidaki yazini qaytarir
        return document.getElementById('your2').innerHTML = `
        <p>Maximum reqem bitdi</p>
        `
    }
    // asaqidaki const math.random istifade ederek random reqem tapir(0-dan 1-kimi),
    // ve o random reqemi numbers massivin uzunluquna vurur.
    // Math.floor ilede onu "yumrulayir".
    const randomIndex = Math.floor(Math.random() * numbers.length);
    // asaqidaki const ise splice metodu ile randomindex le tapilmis random reqemi silir,
    const randomNumber = numbers.splice(randomIndex, 1)[0];
    // innerHeight.html ile alinmis random reqem ekranda qosterilir +consolda
    document.getElementById('your').innerHTML += `
        <p>${console.log(randomNumber), randomNumber}</p>
        `;
    // ve netice olaraq funksiya randomNumber - qaytarir
    return randomNumber;
}
console.log(randomNum());