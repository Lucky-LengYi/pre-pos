function collect_same_elements(collection_a, object_b) {
    //在这里写入代码
    var same=[];//创建一个数组，来存储重复的数据。
    var key=[];//创建一个数组，迎来存储collection_a中需要比较的数据。
    var value=object_b.value;//创建一个数组，迎来存储object_b中需要比较的数据。
    for(x=0;x<9;x++){
        key.push(collection_a[x].key);
        console.log(key);
    }

    for (i=0;i<key.length;i++){
        for(y=0;y<value.length;y++){
            if(key[i]==value[y]){
                same.push(key[i]);
            }
        }
    }

    return same;
}

module.exports = collect_same_elements;
