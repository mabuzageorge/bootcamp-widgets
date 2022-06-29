function enoughAirtime (item, airtime){
    let count = 0;
  var newItem = item.split(",");
  for (var i=0; i<newItem.length; i++){
    var currentItem = newItem[i].trim();
    if (currentItem.startsWith("s")){
      count += 0.75;
    }else if(currentItem.startsWith("d")){
      count +=12;
    }else if(currentItem.startsWith("c")){
      count += 1.88;
    }
  }
 
  var result =airtime-count;
  var sum = (count > airtime) ? 'R0.00': 'R' + result.toFixed(2)
  return sum
   return count;}