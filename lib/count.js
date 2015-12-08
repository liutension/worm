/**
 * Created by Administrator on 2015/12/7.
 */
//计数器
function Count(){
    this.count = 0
}

Count.prototype.one = function(){
    return this.count++;
}

Count.prototype.get = function(){
    return this.count;
}

module.exports = Count