tasks.module("homework");

tasks.add("html-shuffling", {
  instruction: "Sort `&lt;li&gt;`'s children of `&lt;ul id='list'&gt;`",
  html: '<ul id="list"><li data-content="5">5</li><li id="3">3</li><li class="2">2</li><li name="1">1</li><li data-value="4">4</li></ul>',
  tests: function(){
    test('test', function(){
      // for testing functions see: http://api.qunitjs.com/category/assert/
      var li = $('#list li');
      strictEqual($(li[0]).attr('name'), '1', 'st ok');
      strictEqual($(li[1]).attr('class'), '2', 'nd ok');
      strictEqual($(li[2]).attr('id'), '3', 'rd ok');
      strictEqual($(li[3]).attr('data-value'), '4', '4th ok');
      strictEqual($(li[4]).attr('data-content'), '5', '5th ok');
    });
  }
});
