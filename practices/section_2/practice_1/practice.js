function count_same_elements(collection) {
    //分阶段，空行
    //for循环声明变量 （严格模式）
    var sum_list=[];//创建一个JSON数组来存放所有sum对象。
    for (var i=0;i<collection.length;i++){

        var sum={};//创建一个sun object来存储每一条相同字母和数量
        var is_exist=false;//is_exist

        for (var x=0;x<sum_list.length;x++){
            if (sum_list[x].key===collection[i].substring(0, 1)){
                if (collection[i].length > 2){
                    sum_list[x].count=sum_list[x].count+parseInt(collection[i].substring(2));
                }else{
                    sum_list[x].count++;
                }
                is_exist = true;
            }
        }

        if (!is_exist){
            if (collection[i].length > 2){
                sum={key:collection[i].charAt(0),count:parseInt(collection[i].substring(2))};
            }else{
                sum={key:collection[i].charAt(0),count:1};
            }
            sum_list.push(sum);
        }
    }
    return sum_list;
}
module.exports = count_same_elements;
