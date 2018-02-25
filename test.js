// describe('queryFromString', () => {
//   it('returns all query string pairs in a plain object', () => {
//     expect(
//       queryFromString('?name=Bob&score=42&title=lead%20dev')
//     ).toEqual({
//       name: 'Bob',
//       score: '42',
//       title: 'lead dev',
//     });
//   });
// });

// console.log (describe(queryFromString( queryFromString('?name=Bob&score=42&title=lead%20dev'))));
var url = '?name=Bob&score=42&title=lead%20dev';
// var url ='name=Bob&score=42&title=lead%20dev'
function parse(url) {
    var result = {name: 'Bob', score: '42', title: 'lead dev'};
    if (url[0] == '?')
       url = url.replace('?', '');
    var splitter = url.split("&");
    var keyValue = {};
    for(var i in splitter) {
        var key = splitter[i].split("=");
        if (key.length > 1) {
            keyValue[decodeURIComponent(key[0].replace(/\+/g, " "))] = decodeURIComponent(key[1].replace(/\+/g, " "));
            /*http://www.snippetit.com/2012/11/javascript-get-query-string-and-key-value-pairs-from-url/*/
        }
    }
    console.log(keyValue);
    console.log(result);

    if (keyValue == result)
      console.log("Yes");
}

parse(url);

// function accueillir (personne) {
//   if (personne.name == 'Gérard') {
//     // const phrase = 'Bon retour parmi nous Gégé !';
//     return 'Bon retour parmi nous Gégé !';
//   } else {
//     // return 'Bienvenue ' + personne.nom + "!"
//     return 'Bienvenue ' + personne.name + "!";
//   }
//   return "Bienvenue";
// }
// console.log(accueillir({ name: 'Gérarda' }));


// function triTab(tab) {
//   var sorttab = tab.sort();
//   var result = [];
//   for (i = 0; i < tab.length; i++) {
//     // if (tab[i + 1] && tab[i] && tab[i] != tab[i + 1])
//     if (sorttab[i] != sorttab[i + 1])
//       result.push(sorttab[i])
//   }
// console.log(tab);
// console.log(result);
// }

// function triTab(tab) {
//     var sorttab = tab.sort();
//     var result = [];
//     for(i = 0; i < tab.length; i++) {
//         if (sorttab[i] != sorttab[i + 1])
//             result.push(sorttab[i]);
//     }
//     console.log(tab);
//     console.log(result);
//     return (result);
// }
//
// triTab([0, 9, 8, 3, 3, 3, 5, 9, 5, 0])
