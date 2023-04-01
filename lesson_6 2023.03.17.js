
let str = 'webbrain  ';
let newstr = str.replace('web', 'IT');
let newstr1 = str.repeat(10);
console.log(newstr1);
console.log(newstr.repeat(10));

// =================================================================

let ism = 'siroj';
let natija = ('');
let r = [];
for (let i = 0; i < ism.length; i++) {
    natija = ism.charAt(i);
    r.unshift(natija);
}
    console.log(r.join(''));

// ==================================================================

let = ismlar = '#fozil#web#brain#';
console.log(ismlar.replace("#fozil#web#brain#", "(fozil)web(brain)"));

// ==================================================================

let fozil = '          fozil          ';
let newfozil = fozil.trim().toLocaleLowerCase();
console.log(newfozil[newfozil.length -1] === 'l');

// ==================================================================

var str2 = 'Web';
var str3 = 'Brain';
var newstr3 = str2;
str2 = str3;
str3 = newstr3;
console.log(str2);
console.log(str3);

// ==================================================================

let yil = 2020;
yil % 4 == 0 && console.log('Kabisa yili');
yil % 4 !== 0 && console.log('Kabisa yili emas');
