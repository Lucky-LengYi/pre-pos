function count_same_elements(collection) {
  //在这里写入代码
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

module.exports = count_same_elements;
