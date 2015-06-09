var RomanNumerals = {};
RomanNumerals.fromRoman = function(num) {
  var Values = [['M', 1000], ['CM', 900], ['D',  500], ['CD', 400], 
           ['C',  100], ['XC',  90], ['L',  50],  ['XL',  40],  
           ['X',   10], ['IX',   9], ['V',   5],  ['IV',   4],   
           ['I',    1]];
    var result = 0
    for (var i=0; i<Values.length; ++i) {
      var pair = Values[i];
      var key = pair[0];
      var value = pair[1];
      var regex = RegExp('^' + key);
      while (num.match(regex)) {
        result += value;
        num = num.replace(regex, '');
      }
    }
    return result;
  };
RomanNumerals.toRoman = function(num) {
  var  roman = {M:1000,CM:900, D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1 }
  var ans = '';
  while(num>0){
    for(a in roman){ 
        if(roman[a]<=num){ ans += a; num-=roman[a]; break;
      }
    }
  }
return ans;
};
