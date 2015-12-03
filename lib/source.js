/**
 * Created by tensionliu on 2015/12/3.
 */
var _ = require('./utils.js');

function Source(){
    this.sources = null;
}

Source.prototype.setSource = function(sources){
    this.sources = sources;
}

/*
 discover
 key:数据源的路径字典（a.b.c.d）
 keyContainer:最终数据的引用名
 sources:数据源对象
 * */
Source.prototype.discover = function(key,keyContainer,formatter){
    if(!this.sources){
        return
    }
    if(key == null || key == ''){
        return
    }
    var elemts = key.split('.');
    return done(elemts,keyContainer,this.sources,formatter);
};

Source.prototype.clear = function(){

};

function done(elemts,key,datas,formatter){
    var root = elemts.length;
    if(root<1){
        var swap ={}
        if('function' === typeof(formatter))
        {
            datas = formatter(datas);
        }
        swap[key]=datas;
        return swap
    }
    if(_.isArray(datas)){
        var result = [];
        for(var i= 0;i<datas.length;i++)
        {
            result.push(done(elemts.slice(),key,datas[i],formatter));
        }
        return result;
    }else if(_.isObject(datas)){
        var ele = elemts.shift();
        var value = datas[ele];

        //var obj={};
        //obj[ele]=done(elemts.slice(),key,value)
        return done(elemts.slice(),key,value,formatter)
    }else{
        var aa = {}
        aa[key] = datas
        return aa
    }
}

module.exports = Source