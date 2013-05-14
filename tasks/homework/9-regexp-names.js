tasks.module("homework");

tasks.add("regexp-names", {
  instruction: "Write a function `f` which takes string `text` as argument and returns an array of pairs of " +
    "first name and second name. This array has to be sorted by (first name, second name) in lexicographical order and every word it contains has to be reversed after that operation. In addition to that, there is guarantee, that every name starts with uppercase, consists only of english letters  and it is surrounded by spaces on both ends. " +
    " There is always even number of names in text and the second name is proceded by the first name.",
  js: "var f = function(text){\n\n}",
  tests: function(){
    test('test f', function(){
      // for testing functions see: http://api.qunitjs.com/category/assert/
      notStrictEqual(f, undefined, 'f is defined');
      strictEqual(typeof f, 'function', 'f is a function');

      var finder = function(text) {
        var regexp = /\s[A-Z][a-z]+\s/g;
        var array;
        var names = [];
        // whole loop is equivalent to names = text.match(regexp))
        while((array = regexp.exec(text)) !== null) {
          names.push(array[0].substring(1, array[0].length-1));
        }
        var pairs = [];
        for(var i = 0; i < names.length; i += 2) {
          pairs.push([names[i], names[i+1]]);
        }
        pairs.sort();
        for(var i = 0; i < pairs.length; i++) {
          pairs[i][0] = pairs[i][0].split("").reverse().join("");
          pairs[i][1] = pairs[i][1].split("").reverse().join("");
        }
        return pairs;
      };

      var text1 = " Ala  Nowa  Ania  Ttr  Ola  Usd  Ula  Ksdf  Ewa  Jksd "
      var text2 = "324230 90234 j][< Emilia ] /.,';][  Orian "
      var text3 = " Ania  ola  Kowalska  KAsia "
      var text4 = " --- Zofia - Rambo -****- Zofia -*%$#$%ala ula -- Norris  ++ Eulalia  // Skrzyp  iza Gordon  Freeman "
      var text5 = "genia jadzia krycha celina barbara hilda jagoda eurydyka!"

      deepEqual(f(text1), finder(text1), 'correct value for ' + text1);
      deepEqual(f(text2), finder(text2), 'correct value for ' + text2);
      deepEqual(f(text3), finder(text3), 'correct value for ' + text3);
      deepEqual(f(text4), finder(text4), 'correct value for ' + text4);
      deepEqual(f(text5), finder(text5), 'correct value for ' + text5);
    });
  }
});
