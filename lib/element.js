/**
 * Created by tensionliu on 2015/12/3.
 */
var _ = require('./utils.js');
var init = require('./tree.js').init;
function mergeElements(elements){
    var master = elements.shift()
    for(var i=0;i<elements.length;i++){
        var branch = elements[i];
        master = merge(master,branch);
    }
    return master
}

function merge(master,branch){
    if(!master || !branch){
        return master || branch
    }
    if(master.constructor.name !== branch.constructor.name){
        return master || branch
    }
    if(_.isArray(master)){
        for(var i=0;i<branch.length;i++){
            master[i] = merge(master[i],branch[i]);
        }
    }else if(_.isObject(master)){
        for(var key in branch){
            if(_.has(master,key)){
                // 拦截,源数据中多属性格式化合并
                var isMasterFunction = (typeof(master[key]) === 'function')
                var isBranchFunction = (typeof(branch[key]) === 'function')
                if(isMasterFunction && isBranchFunction){
                    //待扩展 拦截堆
                }else if(isMasterFunction || isBranchFunction){
                    //拦截链
                    var func = isMasterFunction?master[key]:branch[key];
                    var args = isMasterFunction?branch[key]:master[key];
                    master[key] = func(args);
                }else{
                    master[key] = merge(master[key],branch[key])
                }
            }else{
                master[key] = branch[key];
            }
        }
    }else{
        master = master || branch
    }
    return master
}

function buildElement(eleKey,eleVal,datas){
    if(!eleKey || !_.isString(eleKey)){
        return {}
    }
    var keys = eleKey.split('.');
    if(keys.length < 1){
        return {};
    }
    return buildNodes(keys,eleVal,datas);
}

function buildNodes(nodes,value,datas){
    var seed;
    seed = value;
    var water = init(datas);

    return water(nodes,seed);
};

module.exports = {
    mergeElements:mergeElements,
    buildElement:buildElement
}
