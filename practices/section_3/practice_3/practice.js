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
  for(x=0;x<sum_list.length;x++){
    for(y=0;y<value_b.length;y++){
      if(sum_list[x].key==value_b[y]){
        num=sum_list[x].count/3;
        num=Math.floor(num);
        sum_list[x].count=sum_list[x].count-num;
      }
    }
  }
  return sum_list;
}
module.exports = create_updated_collection;
