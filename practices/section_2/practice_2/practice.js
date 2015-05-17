function count_same_elements(collection) {
  //在这里写入代码
  var sum={};//创建一个sun object来存储每一条相同字母和数量
  var sum_list=[];//创建一个JSON数组来存放所有sum对象。
  var test=true;
  for (i=0;i<collection.length;i++){
    if(test){
      sum={key:collection[i].charAt(0),count:0};
      //.charAt(0）是为了取出该数据的第一个字母。生成（替换上一条）一条sum数据。
      test=false;
    }
    sum.count=sum.count+1;//统计相同字母的数量。
    for(j=0;j<10;j++){
      if(collection[i].indexOf(j)>-1){
        sum.count=sum.count+j-1;
      }
    }
    if(collection[i]!=collection[i+1]){
      sum_list.push(sum);//将sum数据存入sum_list中。
      test=true;
    }
  }
  return sum_list;
}

module.exports = count_same_elements;
