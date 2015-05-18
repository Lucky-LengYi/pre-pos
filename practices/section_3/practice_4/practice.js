function create_updated_collection(collection_a, object_b) {
    var sum_list=[];//创建一个JSON数组来存放所有sum对象。
    var value=object_b.value;//创建一个数组，迎来存储object_b中需要比较的数据。
    for (var i=0;i<collection_a.length;i++){

        var sum={};//创建一个sun object来存储每一条相同字母和数量
        var is_exist=false;//is_exist

        //生成新数组。
        for (var x=0;x<sum_list.length;x++){
            if (sum_list[x].key===collection_a[i].substring(0, 1)){
                if (collection_a[i].length > 2){
                    sum_list[x].count=sum_list[x].count+parseInt(collection_a[i].substring(2));
                }else{
                    sum_list[x].count++;
                }
                is_exist = true;
                break;
            }
        }

        if (!is_exist){
            if (collection_a[i].length > 2){
                sum={key:collection_a[i].charAt(0),count:parseInt(collection_a[i].substring(2))};
            }else{
                sum={key:collection_a[i].charAt(0),count:1};
            }
            sum_list.push(sum);
        }
    }
    //将新数组与objest.value进行比较。
    for(var y=0;y<sum_list.length;y++){
        for(var z=0;z<value.length;z++){
            if(sum_list[y].key===value[z]){
              //判断是否满3，需要减少几个数。
                var reduction=sum_list[y].count/3;
                reduction=Math.floor(reduction);
                sum_list[y].count=sum_list[y].count-reduction;
            }
        }
    }
    return sum_list;
}

module.exports = create_updated_collection;
