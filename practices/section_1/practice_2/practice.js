function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
  var same=[];//创建一个数组，来存储重复的数据。
  for (i=0;i<collection_a.length;i++){
    for(x=0;x<collection_b.length;x++){
      //涉及到数组的嵌套，这个for循环本可以省去，但如果改数组长度变化，肯能造成Bug
      for(j=0;j<collection_b[x].length;j++){
        if(collection_a[i]==collection_b[x][j]){
          same.push(collection_a[i]);
        }
      }
    }
  }
  return same;
}

module.exports = collect_same_elements;
