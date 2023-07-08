a = prompt("а=?")
b = prompt("b=?")
function createChess(a, b, param1, param2) {


    var value1 = param1 || "#",
        value2 = param2 || " ";
        var odd = "",
            even = "";

    for (var i = 1; i <= b; i += 1) {
      if (i % 2 != 0) {
        for (var j = 0; j < a / 2; j += 1) {
          odd += value1 + value2;
        }
  
        console.log(odd);
        odd = "";
      } else {
        for (var k = 0; k < a / 2; k += 1) {
          even += value2 + value1;
        }
  
        console.log(even);
        even = "";
      }
    }
  }

  createChess(a, b, "#", " ");

  