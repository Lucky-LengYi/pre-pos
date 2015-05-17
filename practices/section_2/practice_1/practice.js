function count_same_elements(collection) {

  var sum={};
  var sum_list=[];
  var test=true;
  for (i=0;i<collection.length;i++){
    if(test){
      sum={key:collection[i],count:0};
      test=false;
    }
    sum.count=sum.count+1;
    if(collection[i]!=collection[i+1]){
      sum_list.push(sum);
      test=true;
    }
  }
  return sum_list;
}

module.exports = count_same_elements;
