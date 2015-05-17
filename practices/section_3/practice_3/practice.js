function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var sum={};
  var sum_list=[];
  var test=true;
  for (i=0;i<collection_a.length;i++){
    if(test){
      sum={key:collection_a[i],count:0};
      test=false;
    }
    sum.count=sum.count+1;
    if(collection_a[i]!=collection_a[i+1]){
      sum_list.push(sum);
      test=true;
    }
  }
//  sum_list就是C集合，下面与object_b中的value值进行比较;

  value_b=object_b.value;//接受object_b传入的值，将他们简便化。
  var num=0;//用于测试相似数据是否满3。
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
