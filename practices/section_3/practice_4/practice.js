function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var sum={};//创建一个sun object来存储每一条相同字母和数量
  var sum_list=[];//创建一个JSON数组来存放所有sum对象。
  var test=true;
  var num=0;//用于测试相似数据是否满3。
  value_b=object_b.value;//接受object_b传入的值，将他们简化。
  for (i=0;i<collection_a.length;i++){
    if(test){
      sum={key:collection_a[i].charAt(0),count:0};
      //.charAt(0）是为了取出该数据的第一个字母。生成（替换上一条）一条sum数据。
      test=false;
    }
    sum.count=sum.count+1;//统计相同字母的数量。
    for(j=0;j<10;j++){
      if(collection_a[i].indexOf(j)>-1){
        sum.count=sum.count+j-1;
      }
    }
    if(collection_a[i]!=collection_a[i+1]){
      sum_list.push(sum);//将sum数据存入sum_list中。
      test=true;
    }
  }
  for(i=0;i<sum_list.length;i++){
    for(j=0;j<value_b.length;j++){
      if(sum_list[i].key==value_b[j]){
        num=sum_list[i].count/3;
        num=Math.floor(num);
        sum_list[i].count=sum_list[i].count-num;
      }
    }
  }
  return sum_list;
}

module.exports = create_updated_collection;
