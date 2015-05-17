function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var collection_a_info = {};
  var sum;//定义一个sum来合并所有信息
  var test=true;
  for (i=0;i<collection_a.length;i++){
    if (test){
      collection_a_info.key='collection_a[i]';
      collection_a_info.count=0;
      test=false;
    }
    collection_a_info.count++;
    if (collection_a[i]!=collection_a[i+1]){
      sum=[sum,collection_a_info];
      test=true;
    }
  }
  return sum;
}
/*
  var sum_info=[
    {key: "a", count: 0},
    {key: "e", count: 0},
    {key: "h", count: 0},
    {key: "t", count: 0},
    {key: "f", count: 0},
    {key: "c", count: 0},
    {key: "g", count: 0},
    {key: "b", count: 0},
    {key: "d", count: 0}
  ];
  for(i=0;i<sum_info.length;i++){
    for(j=0;j<collection.length;j++){
      if(sum_info[i].key==collection[j]){
        sum_info[i].count=sum_info[i].count+1;
      }

    }
  }
  return sum_info;
}
*/

module.exports = create_updated_collection;
