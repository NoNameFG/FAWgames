export const dateConverter = date => {
  if(date){
    date = new Date(date);
    let exactDate = date.getDate();
    switch (date.getMonth()) {
      case 1:
        exactDate += ' января ';
        break;
      case 2:
        exactDate += ' февраля ';
        break;
      case 3:
        exactDate += ' марта ';
        break;
      case 4:
        exactDate += ' апреля ';
        break;
      case 5:
        exactDate += ' мая ';
        break;
      case 6:
        exactDate += ' июня ';
        break;
      case 7:
        exactDate += ' июля ';
        break;
      case 8:
        exactDate += ' августа ';
        break;
      case 9:
        exactDate += ' сентября ';
        break;
      case 10:
        exactDate += ' октября ';
        break;
      case 11:
        exactDate += ' ноября ';
        break;
      case 12:
        exactDate += ' декабря ';
        break;
      default:
        break;
    }

    exactDate += date.getFullYear();


    return(exactDate);
  }
}
