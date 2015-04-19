/**
 * Created by megic on 2015-04-20.
 */
//var xlsx = require('node-xlsx');
//var obj = xlsx.parse(__dirname + '/data/mjf.xlsx'); // parses a file
//console.log(obj[1]['data'].length);
var _=require('underscore');
//穷举法
function getPermutation(arr) {
    if (arr.length == 1) {
        return [arr];
    }
    var permutation = [];
    for (var i=0; i<arr.length; i++) {
        var firstEle = arr[i];
        var arrClone = arr.slice(0);
        arrClone.splice(i, 1);
        var childPermutation = getPermutation(arrClone);
        for (var j=0; j<childPermutation.length; j++) {
            childPermutation[j].unshift(firstEle);
        }
        permutation = permutation.concat(childPermutation);
    }
    return permutation;
}
//穷举1-8个任务组合
var taskArr = getPermutation(_.range(8));
console.log(taskArr);