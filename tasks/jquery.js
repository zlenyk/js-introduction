tasks.module('jquery');

tasks.add("find-body", {
  instruction: 'Save jQuery object for body into body variable',
  js: "var body = ?;",
  html: "",
  tests: function(){
    test("is it there?", function(){
      ok(body !== undefined, "body variable defined");
      strictEqual(body.length, 1, "body contains one element...");
      strictEqual(body[0], document.body, "...which is body");
    });
  }
});


tasks.add("forms-and-math", {
	instruction: 'Write function `sum` which compute sum of floats in forms `first` and `second` and put the result in `result`.',
	html: '<div style="padding:32px;border:1px dashed black;width:600px;margin:0px auto;text-align:center"><input id="first" value="3.1415926"/> + <input id="second" value="2.71828182"/> = <input id="result" readonly="readonly"/></div>',
	js: 'function sum(){\n\t//TODO\n}',
	tests: function(){
		test("forms-and-math", function(){
			ok(typeof(sum) === 'function', "sum is defined");
			ok(function(){
				$('#first').val('123');
				$('#second').val('10000');
				sum();
				var x = parseFloat($('#result').val());
				console.log(x);
				return (x===10123);
			}(), "adding integers");
			ok(function(){
				$('#first').val('3.1415926');
				$('#second').val('2.71828182');
				sum();
				var x = parseFloat($('#result').val());
				console.log(x);
				return (x===2.71828182+3.1415926);
			}(), "adding floats");
		});
	}
});

tasks.add('chess-board', {
	instruction: 'Write function `toggleColors` which for given checkboard (named `board`) reverse colors of it\'s cells.',
	html: '<style type="text/css">#board{margin:20px auto;width:160px;height:160px;border:6px solid red;}#board div{float:left;height:32px;width:32px}</style><div id="board">'+function(n){
		var res = [];
		for(var i=0;i<n;i++){
			for(var j=0;j<n;j++)
				if((i+j)&1)res.push('<div style="background:#fff"></div>');
				else res.push('<div style="background:#000"></div>')
		}
		return res.join('');
	}(5)+'</div></div>',
	js: 'function toggleColors(){\n\t//TODO\n}',
	
	tests: function(){
		test('chess-board', function(){
			ok(typeof(toggleColors) === 'function', 'toggleColor is defined');
			var f = function(){
				var T = []
				$('#board div').each(function(){
					if($(this).css('background-color')==='rgb(0, 0, 0)')T.push('B');else
					if($(this).css('background-color')==='rgb(255, 255, 255)')T.push('W');else T.push('.');
				});
				return T.join('');
			}
			
			var res = [];
			for(var i=0;i<5;i++){
				for(var j=0;j<5;j++)
					if((i+j)&1)res.push('<div style="background:#fff"></div>');
					else res.push('<div style="background:#000"></div>')
			}
			$('#board').html(res.join(''));
			
			var n = f();
			toggleColors();
			var m = f();
			
			console.debug(n,m);
			var ok1 = true;
			if(n.length!=m.length)
				ok1 = false;
			else{
				for(var i=0;i<n.length;i++)
					if(!((n.charAt(i)=='B'&&m.charAt(i)=='W')||(n.charAt(i)=='W'&&m.charAt(i)=='B'))){ok1=false;break;}
			}
			ok(ok1===true, 'colors toggled correctly');
		});
	}
});

tasks.add('hidden-text', {
	instruction: 'You have given input (named `secret`) with hidden text, write function `unhide` which returns it\'s real content.',
	html: '<input id="secret" type="password"/>',
	js: 'function unhide(){\n\t//TODO\n}',
	tests: function(){
		test('hidden-text', function(){
			ok(typeof(unhide) === 'function', 'unhide is defined');
			$('#secret').val('mój sekret');
			ok(unhide()==='mój sekret', 'simply case');			
		});
	}
});

tasks.add('events', {
	instruction: 'You have given button (id = `clickMe`). Your task is to write function `setClick` which take parameter `f` (function) and set it as onClick event to this button.',
	html: '<script>function clicked(){alert("NIE");}</script><input type="button" id="clickMe" value="Click Me"/>',
	js: '',
	tests: function(){
		test('events', function(){
			$('#clickMe').off('click');
			
			ok(typeof(setClick) === 'function', 'setClick is defined');
			_ilosc = 0;
			setClick(function(){_ilosc+=1;});
			$('#clickMe').click();
			ok(_ilosc === 1, 'single event');
			
			_ilosc = 0;
			setClick(function(){_ilosc+=1;});
			setClick(function(){_ilosc+=1;});
			$('#clickMe').click();
			ok(_ilosc === 1, 'multiple event');
		});
	}
	
});
