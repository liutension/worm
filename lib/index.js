/**
 * Created by Administrator on 2015/12/3.
 */
var _ = require('./utils.js');
var _Source = require('./source.js');
var beArray = _.beArray;
//main
function Worm(model,source){
    if(!model || !source){
        return
    }
    this.model = model || {};
    var newSource = new _Source();
    newSource.setSource(source);
    this.source = newSource;
    ///.....
    this._Element = require('./element.js').init(this.source);
}
Worm.prototype.getModel = function(){return this.model;}
Worm.prototype.setModel = function(model){this.model = model;}
Worm.prototype.getSource = function(){return this.source;}
Worm.prototype.setSource = function(source){this.source.setSource(source);}
Worm.prototype.build = function(){
    var _sources = this.model.sources || [];
    var _defaults = this.model.default || {};
    if(!_sources || !_.isArray(_sources)){
        return console.log("[ERROR]:sources must be Array.")
    }
    var elements=[];
    for(var i=0;i<_sources.length ;i++){
        var source = _sources[i];
        for(var key in source){
            var element = this._Element.buildElement(key,source[key]);
            elements.push(element);
            //console.log(JSON.stringify(element));
        }
    }
    //合并所有元素
    var instance = this._Element.mergeElements(elements);
    //初始化默认属性
    instance = initInstance(_defaults,instance);
    return instance;
}

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


function initInstance(model,instance){
    for(var key in model){
        var nodes = key.split('.');
        if(nodes.length<1){
            continue;
        }
        var count = new Count();
        init(instance,nodes,model[key],count);
    }
    return instance;
}

function init(instance,nodes,value,count){
    if(_.isArray(instance)){
        for(var i=0;i<instance.length;i++){
            init(instance[i],nodes,value,count);
        }
    }else if(_.isObject(instance)){
        var node = nodes[0];
        var checkNode = beArray(node);
        if(nodes.length == 1){
            if(_.isFunction(value)){
                var func = value;
                count.one()
                if(checkNode){
                    instance[checkNode]=func(instance[checkNode],count.get());
                    return
                }else{
                    instance[node]=func(instance[node],count.get());
                    return
                }
            }else{
                if(checkNode){
                    if(!instance[checkNode]){
                        instance[checkNode]=[value];
                    }
                    return
                }else{
                    if(!instance[node]){
                        instance[node]=value;
                    }
                    return
                }
            }
        }

        node = checkNode || node;
        if(!_.has(instance,node)) {
            instance[node] = {}
        }
        init(instance[node],nodes.slice(1,nodes.length),value,count)
    }else{

    }
}

module.exports = Worm