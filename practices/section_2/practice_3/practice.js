function count_same_elements(collection) {
    //在这里写入代码
    var sum={};//创建一个sun object来存储每一条相同字母和数量
    var sum_list=[];//创建一个JSON数组来存放所有sum对象。
    var test=true;
    for (i=0;i<collection.length;i++){
      if(i+1<collection.length){
        num_b=collection[i+1].charAt(0);
      }
      num_a=collection[i].charAt(0);
      if(test){
        sum={name:collection[i].charAt(0),summary:0};
        //.charAt(0）是为了取出该数据的第一个字母。生成（替换上一条）一条sum数据。
        test=false;
      }
      sum.summary=sum.summary+1;//统计相同字母的数量。
//!!!!!!!!!!!BUG，统计数据时，发现t-2，-2会认定是负数，会进入负数的循环，
//而d-5会进入正数和负数的循环，导致统计结果为d：10，所以将负数设定为-3
//使得t-2可以进入循环而d-5不进入循环。
      for(x=-3;x<0;x++){
        if(collection[i].indexOf(x)>-1){
          sum.summary=sum.summary+Math.abs(x);
        }
      }
      for(z=0;z<11;z++){
        if(collection[i].indexOf(z)>-1){
          sum.summary=sum.summary+z-1;
        }
      }
      if(num_a!=num_b){
        sum_list.push(sum);//将sum数据存入sum_list中。
        test=true;
      }
      if(i+1==collection.length){
        sum_list.push(sum);//将sum数据存入sum_list中。
        test=true;
      }
    }
    return sum_list;
  }
module.exports = count_same_elements;
