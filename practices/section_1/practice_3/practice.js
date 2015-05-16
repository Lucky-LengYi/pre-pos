function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  var same=[];//创建一个数组，来存储重复的数据。
  var value=object_b.value;//取出object_b.value的值，存储用于比较。
  for (i=0;i<collection_a.length;i++){
    for(j=0;j<value.length;j++){
      if(collection_a[i]==value[j]){
        same.push(collection_a[i]);
      }
    }
  }
  return same;
}

module.exports = collect_same_elements;
