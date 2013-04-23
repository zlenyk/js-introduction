function toggleColors(){
	//TODO
    var s = '';
    $('#board div').each(function(){x
        c = $(this).css('background-color');
        if(c==='rgb(0, 0, 0)')s+='B';
        else if(c==='rgb(255, 255, 255)')s+='W';
        else s+='.'; 
    });
    
    console.debug(s);
}

/* array::sum-of-array */
function sumOfArray(array){
	var suma = 0.0;
    for(var i=0;i<array.length;i++)
        if(typeof(array[i])==='number')
            suma+=array[i];
    return suma;
}

function sumOfArray(array){
	return array.reduce(function(a,b){
		if(typeof(b)==='number')return a+b;
		return a;
	}, 0.0);
}

/* arrays::create */
var array1 = new Array(42);
for(var i =0;i<42;i++)array1[i]=0;

/* arrays::sub-array */
function subArray(array){
	var a = array.indexOf('begin');
    var b = array.lastIndexOf('end');
    if(a==-1||b==-1||b<a)return [];
    return array.slice(a,b+1);
}

/* arrays::count-in-range */
function countInRange(array, a, b){
    return array.reduce(function(x,y){
        return x+(a<=y&&y<=b?1:0);
    }, 0);
}

/* arrays::median */
function median(array){
	var t = array.sort(function(a,b){
       return a - b; 
	});
    if(array.length&1)
        return array[(array.length-1)/2];
    else
        return (array[array.length/2]+array[array.length/2-1])/2;
}

/* arrays::mul-table */
function mulTable(n){
	var r = new Array(n);
    for(var i=0;i<n;i++){
        r[i] = new Array(n);
        for(var j=0;j<n;j++)r[i][j]=(i+1)*(j+1);
    }
    return r;
}

/* arrays::card-game */
function simulate(t){
    while(t.length>1){
        var a = t.shift();
        var b = t.shift();
        var c = 3*Math.min(a,b)+2*Math.max(a,b);
        
        t.push(c);
    }
    return t[0];
}

/* jquery::board */
function toggleColors(){
    $('#board div').each(function(){
        var c = $(this).css('background-color');
        if(c==='rgb(0, 0, 0)')c = 'white';
        else c='black';
        $(this).css('background-color', c);
    });
}


/* jquery::hidden-text */
function unhide(){
	return $('#secret').val();
}

/* jquery::events */
function setClick(f){
    $('#clickMe').off('click').on('click', f);
}
