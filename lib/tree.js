/**
 * Created by tensionliu on 2015/12/3.
 */
var _ = require('./utils.js');
var MATCH = '~:'
var beArray = _.beArray;

/*
 function grow 生成结构树
 nodes:树对象的节点数组
 root:根对象
 * */
function grow(nodes,root){
    var depth = nodes.length;
    for(var i=0;i<depth;i++){
        var childNode = nodes.pop();
        var parantNode = nodes[nodes.length-1];
        root = _grow(childNode,parantNode,root)
    }
    return root
}

/*
 function _grow 生成单位层级的结构树
 childNode:构造起始节点
 parentNode:构造节点
 tree:基础结构树对象
 * */
function _grow(childNode,parentNode,tree){
    if(_.isArray(tree)){
        var _fruits;
        var checkNode = beArray(parentNode);
        if(checkNode){
            _fruits = {};
        }else{
            _fruits = []
        }
        for(var i=0;i<tree.length;i++){
            var _fruit;
            var fruit=tree[i];
            _fruit = _grow(childNode,parentNode,fruit)
            if(checkNode){
                if(_.isArray(fruit)){
                    if(!_.isArray(_fruits)){
                        _fruits=[];
                    }
                    _fruits.push(_fruit);
                }else{
                    if(!_fruits[checkNode]){
                        _fruits[checkNode]= [];
                    }
                    _fruits[checkNode].push(_fruit);
                }
            }else{
                _fruits.push(_fruit);
            }
        }
        return _fruits
    }
    if(_.isObject(tree)){
        var _fruit = {};
        if(_.has(tree,(beArray(childNode)||childNode))){
            if(parentNode){
                var checkNode = beArray(parentNode);
                if(checkNode){
                    //_fruit[checkNode]=[];
                    //_fruit[checkNode].push(tree);
                    _fruit=tree;
                }else {
                    _fruit[parentNode] = tree;
                }
            }else{
                _fruit = tree;
            }
        }else{
            for(var key in tree){
                _fruit[key] = _grow(childNode,parentNode,tree[key]);
            }
        }
        return _fruit
    }else{
        //console.log('------------------------');
    }
}

module.exports ={init:function(_source){
    var sources = _source;
    if(!sources instanceof(require('./source.js')))
    {
        return function () {}
    }
    /*
     function water 生成数据模型
     nodes:预生成数据结构的字典数组
     seed:数据源字典
     * */
    return function water(nodes,seed){
        var root={};
        if(_.isString(seed) && seed.indexOf(MATCH) == 0){
            seed = seed.substr(MATCH.length,seed.length);
            root = sources.discover(seed,(nodes[nodes.length-1]||'key'));
        }else if(_.isObject(seed) && seed.value){
            seed.value = seed.value.substr(MATCH.length,seed.value.length);
            root = sources.discover(seed.value,(nodes[nodes.length-1]||'key'),seed.formatter);
        }else{
            root = seed;
        }
        return grow(nodes,root);
    }
}}