function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  value_b=object_b.value;//接受object_b传入的值，将他们简便化。
  for(i=0;i<collection_a.length;i++){
    for(y=0;y<value_b.length;y++){
      if(collection_a[i].key==value_b[y]){
        collection_a[i].count=collection_a[i].count-1;
      }
    }
  }
  return collection_a;
}

module.exports = create_updated_collection;
