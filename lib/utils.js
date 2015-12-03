/**
 * Created by tensionliu on 2015/12/3.
 */
var _ = require('underscore');
utils = {
    /*
     如果为数据结构，则返回数据引用名
     * */
    beArray :function (matchStr){
        if(!matchStr || !matchStr.match(/\[\w+\]/g)){
            return null
        }
        return matchStr.slice(1,matchStr.length-1);
    }
}
module.exports = _.extend(_,utils);