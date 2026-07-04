let val =3;

switch(val){
  case 1:
    case 2:
      case 3:
        console.log("The value is 1,2 or 3");
        break;

  case 4:
    console.log("The value is 4");
    break;
  default:
    console.log("The value is not 1,2,3 or 4");
}

let abc = 0.1 + 0.2;
switch(abc){
  case 0.3:
    console.log("The value is 0.3");
    break;
  case 0.5:
    console.log("The value is 0.5");
    break;
  default:
    console.log("The value is not 0.3 or 0.5");
}

switch(true){
  case 1 < 2:
    console.log("1 is less than 2");
    break;
  case 2 < 1:
    console.log("2 is less than 1");
    break;
  default:
    console.log("None of the conditions are true");
}