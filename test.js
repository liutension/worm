/**
 * Created by tensionliu on 2015/12/3.
 */
var Worm = require('./').Worm;

var model ={
    default:{
        '[pages].bgimage':null,
        '[pages].bgimage':function(value){
            if(!value){return 'hahah'};
            return value
        }
     /*'[pages].col': null,
        '[pages].in': null,
        '[pages].out': null,
        '[pages].bgcol': null,
        '[pages].bgleft': null,
        '[pages].bgtop': null,
        '[pages].[cmps].link':null,
        '[pages].[cmps].textType':null,
        '[pages].[cmps].imageLink':null,
        '[pages].[cmps].mask':false,
        //'[pages].[cmps].remark':{},
        '[pages].[cmps].remark.key':null,
        '[pages].[cmps].remark.name':null,
        //'[pages].[cmps].file':{}
        '[pages].[cmps].file.server':'Q',
        '[pages].[cmps].effect':null*/
    },
    sources:[
        {'[pages].[cmps].text':'~:list.elements.content'}/*
        {'[pages].[cmps].style':'~:list.elements.css'},
        {'[pages].[cmps].text':'~:list.elements.content'},
        {'[pages].[cmps].animations':{'value':'~:list.elements.properties.anim','formatter':function(value){if(value){return value[0]}return value;}}},
        {'[pages].[cmps].file.key':'~:list.elements.properties.src'},
        {'[pages].[cmps].cmpType':{'value':'~:list.elements.type','formatter':function(value){return value}}}*/
    ]
}

var data1={"list":[
    {
        "id":308799990,
        "sceneId":22480655,
        "num":1,
        "name":null,
        "properties":null,
        "elements":[
            {
                "content":"",
                "css":{"top":252,"left":96.015625,"zIndex":0,"width":117,"height":69},
                "id":7372821654,
                "num":1,
                "pageId":299535442,
                "properties":{
                    "width":"100px",
                    "height":"100px",
                    "src":"group1/M00/94/7D/yq0KXFZLyw-ALlKaAAAHoGDJHsE175.png",
                    "imgStyle":{"width":117,"height":69,"marginTop":"0","marginLeft":"0"},
                    "anim":[{"type":4,"direction":0,"duration":2,"delay":0,"countNum":1}]
                },
                "sceneId":22480651,
                "type":4
            },
            {"content":"",
                "css":{"top":326,"left":89.98016357421875,"zIndex":1,"width":161,"height":107,"backgroundColor":"","opacity":1,"color":"#676767","borderWidth":0,"borderStyle":"solid","borderColor":"rgba(0,0,0,1)","paddingBottom":0,"paddingTop":0,"lineHeight":1,"borderRadius":"0px","transform":"rotateZ(0deg)","borderRadiusPerc":0,"borderBottomRightRadius":"0px","borderBottomLeftRadius":"0px","borderTopRightRadius":"0px","borderTopLeftRadius":"0px","boxShadow":"rgba(0,0,0,0) 0 0 0","boxShadowDirection":0,"boxShadowSize":0},
                "id":3095296550,
                "num":1,
                "pageId":299535442,
                "properties":{
                    "width":161,
                    "height":107,
                    "src":"group2/M00/7C/14/yq0KXlZMMVKAELB2AAAvbS8gvfo751.png",
                    "imgStyle":{"width":175,"height":106,"marginTop":"0px","marginLeft":"-7px"},
                    "anim":[{"type":1,"direction":3,"duration":2,"delay":0,"countNum":1}]
                },
                "sceneId":22480651,
                "type":4
            },
            {
                "content":"",
                "css":{"top":448,"left":166.484375,"zIndex":2,"width":84,"height":19},
                "id":9302228066,
                "num":1,
                "pageId":299535442,
                "properties":{
                    "width":84,
                    "height":19,
                    "src":"group3/M00/E1/41/yq0KZFZGqI2AM4mHAAH52pvFLUY566.png",
                    "imgStyle":{"width":85,"height":19,"marginTop":"0px","marginLeft":"-0.5px"},
                    "anim":[{"type":1,"direction":2,"duration":2,"delay":0.2,"countNum":1}]
                },
                "sceneId":22480651,
                "type":4
            },
            {"content":"","css":{"top":448,"left":69.484375,"zIndex":3,"width":85,"height":20},"id":3687064774,"num":1,"pageId":299535442,"properties":{"width":85,"height":20,"src":"group3/M00/FF/75/yq0KZFZLzAqAdaPTAAA3km0_U5w803.png","imgStyle":{"width":90,"height":20,"marginTop":"0px","marginLeft":"-2.5px"},"anim":[{"type":1,"direction":0,"duration":2,"delay":0.2,"countNum":1}]},"sceneId":22480651,"type":4},
            {"content":"","css":{"top":75,"left":82.015625,"zIndex":4,"width":155,"height":171,"backgroundColor":"","opacity":1,"color":"#676767","borderWidth":0,"borderStyle":"solid","borderColor":"rgba(0,0,0,1)","paddingBottom":0,"paddingTop":0,"lineHeight":1,"borderRadius":"0px","transform":"rotateZ(0deg)","borderRadiusPerc":0,"borderBottomRightRadius":"0px","borderBottomLeftRadius":"0px","borderTopRightRadius":"0px","borderTopLeftRadius":"0px","boxShadow":"0px 0px 0px rgba(0,0,0,0.5)","boxShadowDirection":0,"boxShadowSize":0},"id":3036379819,"num":1,"pageId":299535442,"properties":{"width":155,"height":171,"src":"group2/M00/77/BE/yq0KXlZL2zmATBHoAAInyJXaa_o776.png","imgStyle":{"width":154,"height":177,"marginTop":"-2.5px","marginLeft":"0px"},"anim":[{"type":4,"direction":3,"duration":1.7,"delay":0,"countNum":1}]},"sceneId":22480651,"type":4},
            {"content":"","css":{"top":37,"left":46,"zIndex":5,"color":"#555","width":"100px","height":"100px","backgroundColor":"","opacity":1,"borderWidth":0,"borderStyle":"solid","borderColor":"rgba(0,0,0,1)","paddingBottom":0,"paddingTop":0,"lineHeight":1,"borderRadius":"0px","transform":"rotateZ(0deg)","borderRadiusPerc":0,"borderBottomRightRadius":"0px","borderBottomLeftRadius":"0px","borderTopRightRadius":"0px","borderTopLeftRadius":"0px","boxShadow":"rgba(0,0,0,0) 0 0 0","boxShadowDirection":0,"boxShadowSize":0},"id":4570809589,"pageId":308799990,"properties":{"type":"symbols-taobao","viewBox":"0 0 64 49","anim":[{"type":8,"direction":0,"duration":2,"delay":0,"countNum":1}]},"sceneId":22480651,"type":"h"},
            {"css":{"zIndex":"7"},"id":7686546657,"num":0,"pageId":299535442,"properties":{"imgSrc":"group2/M00/71/E2/yq0KXlZK4XeAKL3IAAFZIAOSNj4786.jpg"},"sceneId":22480651,"type":3},
            {"content":"我就看看哈","css":{"top":214,"left":-5,"zIndex":6,"width":320,"height":38,"lineHeight":1,"backgroundColor":"","opacity":1,"color":"#676767","borderWidth":0,"borderStyle":"solid","borderColor":"rgba(0,0,0,1)","paddingBottom":0,"paddingTop":0,"borderRadius":"0px","transform":"rotateZ(0deg)","borderRadiusPerc":0,"boxShadow":"0px 0px 0px rgba(0,0,0,0.5)","boxShadowDirection":0,"boxShadowSize":0,"borderBottomRightRadius":"0px","borderBottomLeftRadius":"0px","borderTopRightRadius":"0px","borderTopLeftRadius":"0px"},"id":7361582018,"num":1,"pageId":308799990,"properties":{"anim":[{"type":5,"direction":0,"duration":2,"delay":0,"countNum":1}]},"sceneId":22480651,"type":"2"}],"scene":null},{"id":308799991,"sceneId":22480651,"num":2,"name":null,"properties":null,"elements":[{"content":"","css":{"top":339,"left":5,"zIndex":0,"width":180,"height":63},"id":2385164565,"num":1,"pageId":298985642,"properties":{"width":"100px","height":"100px","src":"group3/M00/F9/E6/yq0KZFZK2KSADtrtAAAK_uOb4Gs533.png","imgStyle":{"width":180,"height":63,"marginTop":"0","marginLeft":"0"},"anim":[{"type":24,"direction":0,"duration":2,"delay":0,"countNum":1}]},"sceneId":21138077,"type":4},{"content":"","css":{"top":401.99432373046875,"left":59.00567626953125,"zIndex":1,"width":202,"height":62},"id":3507486098,"num":1,"pageId":298985642,"properties":{"width":202,"height":62,"src":"group3/M00/F9/E6/yq0KZFZK2KSAftG3AAA4lI5ulec787.png","imgStyle":{"width":202,"height":65,"marginTop":"-1.5px","marginLeft":"0px"},"anim":[{"type":2,"direction":0,"duration":2,"delay":0,"countNum":1}]},"sceneId":21138077,"type":4},{"css":{"zIndex":"3"},"id":8812351551,"num":0,"pageId":298985642,"properties":{"imgSrc":"group3/M00/F9/C9/yq0KZFZK2ByAWb_TAAeNmJHCu2o941.jpg"},"sceneId":21138077,"type":3}],"scene":null},{"id":308799992,"sceneId":22480651,"num":3,"name":null,"properties":null,"elements":[{"content":"","css":{"top":400,"left":41.83807373046875,"zIndex":0,"width":235,"height":67},"id":2219096986,"num":1,"pageId":293032914,"properties":{"width":235,"height":67,"src":"group1/M00/8E/DB/yq0KXVZK2UiASrEUAAA_hJgIiEc453.png","imgStyle":{"width":238,"height":67,"marginTop":"0px","marginLeft":"-1.5px"},"anim":[{"type":1,"direction":0,"duration":2,"delay":0,"countNum":1}]},"sceneId":21138077,"type":4},{"content":"","css":{"top":335,"left":9,"zIndex":1,"width":180,"height":65},"id":1489761801,"num":1,"pageId":293032914,"properties":{"width":"100px","height":"100px","src":"group1/M00/8E/DB/yq0KXVZK2UeAYl4-AAAJ0Flu4IA614.png","imgStyle":{"width":180,"height":65,"marginTop":"0","marginLeft":"0"},"anim":[{"type":24,"direction":0,"duration":2,"delay":0,"countNum":1},{"type":23,"direction":0,"duration":1,"delay":0,"countNum":1}]},"sceneId":21138077,"type":4},{"css":{"zIndex":"3"},"id":182367277,"num":0,"pageId":293032914,"properties":{"imgSrc":"group3/M00/F9/CB/yq0KZFZK2CaAONlCAAQghtbsd64301.gif"},"sceneId":21138077,"type":3}],"scene":null},{"id":308799993,"sceneId":22480651,"num":4,"name":null,"properties":null,"elements":[{"content":"","css":{"top":332,"left":7,"zIndex":0,"width":159,"height":56},"id":8045656262,"num":1,"pageId":293032924,"properties":{"width":159,"height":56,"src":"group1/M00/9A/BD/yq0KXVZMQq6AeWB8AAALhWwb7Ow504.png","imgStyle":{"width":165,"height":56,"marginTop":"0px","marginLeft":"-3px"},"anim":[{"type":24,"direction":0,"duration":2,"delay":0,"countNum":1}]},"sceneId":21138077,"type":4},{"content":"","css":{"top":395,"left":44.1676025390625,"zIndex":1,"width":237,"height":65},"id":8687088280,"num":1,"pageId":293032924,"properties":{"width":237,"height":65,"src":"group1/M00/92/2A/yq0KXVZLEpaAFtsBAAA8vKZ3O1I916.png","imgStyle":{"width":237,"height":64,"marginTop":"0px","marginLeft":"0px"}},"sceneId":21138077,"type":4},{"css":{"zIndex":"3"},"id":4510932686,"num":0,"pageId":293032924,"properties":{"imgSrc":"group1/M00/8E/8E/yq0KXFZK2gSAf2ARAAgFURi7wWc243.jpg"},"sceneId":21138077,"type":3}],"scene":null},{"id":308799994,"sceneId":22480651,"num":5,"name":null,"properties":null,"elements":[{"content":"","css":{"top":335,"left":0,"zIndex":0,"width":180,"height":63},"id":661689223,"num":1,"pageId":293032981,"properties":{"width":"100px","height":"100px","src":"group1/M00/8E/F7/yq0KXVZK2ciAGPsoAAAKEqMbyXU642.png","imgStyle":{"width":180,"height":63,"marginTop":"0","marginLeft":"0"},"anim":[{"type":24,"direction":0,"duration":2,"delay":0,"countNum":1}]},"sceneId":21138077,"type":4},{"content":"","css":{"top":403.9914855957031,"left":45.36932373046875,"zIndex":1,"width":225,"height":63},"id":269420210,"num":1,"pageId":293032981,"properties":{"width":225,"height":63,"src":"group1/M00/8E/7B/yq0KXFZK2ayAZVDnAABGyCZOh5g850.png","imgStyle":{"width":227,"height":62,"marginTop":"0px","marginLeft":"-1px"},"anim":[{"type":1,"direction":0,"duration":2,"delay":0,"countNum":1}]},"sceneId":21138077,"type":4},{"css":{"zIndex":"3"},"id":5978855819,"num":0,"pageId":293032981,"properties":{"imgSrc":"group1/M00/8E/57/yq0KXFZK2QeAcr59ABACAANakNo643.png"},"sceneId":21138077,"type":3}],"scene":null},{"id":308799995,"sceneId":22480651,"num":6,"name":null,"properties":null,"elements":[{"content":"","css":{"top":331,"left":8,"zIndex":0,"width":180,"height":64},"id":8763395499,"num":1,"pageId":298981437,"properties":{"width":"100px","height":"100px","src":"group2/M00/72/06/yq0KX1ZK2qGAdKtBAAALFTMwNag278.png","imgStyle":{"width":180,"height":64,"marginTop":"0","marginLeft":"0"},"anim":[{"type":24,"direction":0,"duration":2,"delay":0,"countNum":1}]},"sceneId":21138077,"type":4},{"content":"","css":{"top":400.9942932128906,"left":45.12786865234375,"zIndex":1,"width":232,"height":59,"backgroundColor":"","opacity":1,"color":"#676767","borderWidth":0,"borderStyle":"solid","borderColor":"rgba(0,0,0,1)","paddingBottom":0,"paddingTop":0,"lineHeight":1,"borderRadius":"0px","transform":"rotateZ(0deg)","borderRadiusPerc":0,"borderBottomRightRadius":"0px","borderBottomLeftRadius":"0px","borderTopRightRadius":"0px","borderTopLeftRadius":"0px","boxShadow":"rgba(0,0,0,0) 0 0 0","boxShadowDirection":0,"boxShadowSize":0},"id":8727809536,"num":1,"pageId":298981437,"properties":{"width":232,"height":59,"src":"group2/M00/72/09/yq0KX1ZK2q6AeHZeAAA6fVX-k0U286.png","imgStyle":{"width":238,"height":59,"marginTop":"0px","marginLeft":"-3px"},"anim":[{"type":1,"direction":0,"duration":2,"delay":0,"countNum":1}]},"sceneId":21138077,"type":4},{"css":{"zIndex":"3"},"id":3495639351,"num":0,"pageId":298981437,"properties":{"imgSrc":"group2/M00/72/04/yq0KX1ZK2pOALoIzABLZUZjPcBw701.png"},"sceneId":21138077,"type":3}],"scene":null},{"id":308799996,"sceneId":22480651,"num":7,"name":"第5页","properties":null,"elements":[{"content":"<div style=\"text-align: center;\"><span style=\"color: inherit; line-height: inherit; background-color: initial;\">我决定民生爱的力量</span></div>","css":{"top":35,"left":0,"zIndex":0,"width":320,"height":38,"lineHeight":1,"backgroundColor":"","opacity":1,"color":"rgba(122,82,34,1)","borderWidth":0,"borderStyle":"solid","borderColor":"rgba(0,0,0,1)","paddingBottom":0,"paddingTop":0,"borderRadius":"0px","transform":"rotateZ(0deg)","borderRadiusPerc":0,"boxShadow":"rgba(0,0,0,0) 0 0 0","boxShadowDirection":0,"boxShadowSize":0,"borderBottomRightRadius":"0px","borderBottomLeftRadius":"0px","borderTopRightRadius":"0px","borderTopLeftRadius":"0px"},"id":5073381367,"num":1,"pageId":293032984,"properties":{},"sceneId":21138077,"type":"2"},{"content":"<div style=\"text-align: center;\"><span style=\"color: inherit; line-height: inherit; font-size: 14px; background-color: initial;\">中国民生银行ME公益创新资助计划</span></div>","css":{"top":58,"left":0,"zIndex":1,"width":320,"height":38,"lineHeight":1,"backgroundColor":"","opacity":1,"color":"rgba(122,82,34,1)","borderWidth":0,"borderStyle":"solid","borderColor":"rgba(0,0,0,1)","paddingBottom":0,"paddingTop":0,"borderRadius":"0px","transform":"rotateZ(0deg)","borderRadiusPerc":0,"boxShadow":"rgba(0,0,0,0) 0 0 0","boxShadowDirection":0,"boxShadowSize":0,"borderBottomRightRadius":"0px","borderBottomLeftRadius":"0px","borderTopRightRadius":"0px","borderTopLeftRadius":"0px"},"id":1037870984,"num":1,"pageId":293032984,"properties":{},"sceneId":21138077,"type":"2"},{"content":"<div style=\"text-align: center;\"><span style=\"font-size: 18px; line-height: 18px;\">移步易企秀官网参赛</span></div>","css":{"top":115,"left":2,"zIndex":2,"width":320,"height":42,"lineHeight":"1.0","backgroundColor":"","opacity":1,"color":"rgba(122,82,34,1)","borderWidth":0,"borderStyle":"solid","borderColor":"rgba(0,0,0,1)","paddingBottom":0,"paddingTop":0,"borderRadius":"0px","transform":"rotateZ(0deg)","borderRadiusPerc":0,"boxShadow":"rgba(0,0,0,0) 0 0 0","boxShadowDirection":0,"boxShadowSize":0,"borderBottomRightRadius":"0px","borderBottomLeftRadius":"0px","borderTopRightRadius":"0px","borderTopLeftRadius":"0px"},"id":2032647844,"num":1,"pageId":293032984,"properties":{"width":320,"height":42},"sceneId":21138077,"type":"2"},{"content":"","css":{"top":168,"left":101,"zIndex":3,"width":122,"height":122,"backgroundColor":"","opacity":1,"color":"#676767","borderWidth":0,"borderStyle":"solid","borderColor":"rgba(0,0,0,1)","paddingBottom":0,"paddingTop":0,"lineHeight":1,"borderRadius":"0px","transform":"rotateZ(0deg)","borderRadiusPerc":0,"boxShadow":"rgba(0,0,0,0) 0 0 0","boxShadowDirection":0,"boxShadowSize":0,"borderBottomRightRadius":"0px","borderBottomLeftRadius":"0px","borderTopRightRadius":"0px","borderTopLeftRadius":"0px"},"id":8483566861,"num":1,"pageId":293032984,"properties":{"width":122,"height":122,"src":"group3/M00/ED/43/yq0KZVZJZ4GAZUBGAABrxIdqB44537.jpg","id":121218658,"imgStyle":{"width":122,"height":122,"marginTop":"0px","marginLeft":"0px"}},"sceneId":21138077,"type":4},{"content":"<div style=\"text-align: center;\"><span style=\"font-size: 12px; line-height: 12px; color: inherit; background-color: initial;\">长按二维码识别</span></div><div style=\"text-align: center;\"><span style=\"font-size: 12px; line-height: 12px;\">关注中国民生银行ME公益创新资助计划</span></div><div style=\"text-align: center;\"><span style=\"font-size: 12px; line-height: 12px;\">持续关注2015年度公益H5创意大赛</span></div><div style=\"text-align: center;\"><span style=\"font-size: 12px; line-height: 12px;\">面向全社会征集NGO公益场景</span></div>","css":{"top":297,"left":2,"zIndex":4,"width":320,"height":74,"lineHeight":0.4,"backgroundColor":"","opacity":1,"color":"rgba(122,82,34,1)","borderWidth":0,"borderStyle":"solid","borderColor":"rgba(0,0,0,1)","paddingBottom":0,"paddingTop":0,"borderRadius":"0px","transform":"rotateZ(0deg)","borderRadiusPerc":0,"boxShadow":"rgba(0,0,0,0) 0 0 0","boxShadowDirection":0,"boxShadowSize":0,"borderBottomRightRadius":"0px","borderBottomLeftRadius":"0px","borderTopRightRadius":"0px","borderTopLeftRadius":"0px"},"id":6783273691,"num":1,"pageId":293032984,"properties":{},"sceneId":21138077,"type":"2"},{"content":"<div style=\"text-align: center;\"><span style=\"font-size: 14px;\">转发接力</span></div>","css":{"top":392,"left":39,"zIndex":5,"width":118,"height":38,"lineHeight":0.6,"backgroundColor":"rgba(255,126,33,1)","opacity":1,"color":"rgba(255,255,255,1)","borderWidth":0,"borderStyle":"solid","borderColor":"rgba(0,0,0,1)","paddingBottom":0,"paddingTop":0,"borderRadius":"4px","transform":"rotateZ(0deg)","borderRadiusPerc":20,"boxShadow":"rgba(0,0,0,0) 0 0 0","boxShadowDirection":0,"boxShadowSize":0,"borderBottomRightRadius":"4px","borderBottomLeftRadius":"4px","borderTopRightRadius":"4px","borderTopLeftRadius":"4px"},"id":2385817387,"num":1,"pageId":293032984,"properties":{"width":118,"height":38},"sceneId":21138077,"type":"2","trigger":{"sends":[{"sendIndex":0,"delay":0,"type":1,"handles":[{"type":1,"ids":[4405943526,6520693722,6995946174,9981923830]},{"type":2,"ids":[]}]}],"receives":[{"type":1,"ids":[]},{"type":2,"ids":[]},{"type":3,"ids":[]}]}},{"content":"<div style=\"text-align: center;\"><span style=\"font-size: 14px; line-height: 8.4px; color: inherit;\">活动说明</span></div>","css":{"top":392,"left":162,"zIndex":6,"width":118,"height":38,"lineHeight":0.6,"backgroundColor":"rgba(255,125,125,1)","opacity":1,"color":"rgba(255,255,255,1)","borderWidth":0,"borderStyle":"solid","borderColor":"rgba(0,0,0,1)","paddingBottom":0,"paddingTop":0,"borderRadius":"4px","transform":"rotateZ(0deg)","borderRadiusPerc":20,"boxShadow":"rgba(0,0,0,0) 0 0 0","boxShadowDirection":0,"boxShadowSize":0,"borderBottomRightRadius":"4px","borderBottomLeftRadius":"4px","borderTopRightRadius":"4px","borderTopLeftRadius":"4px"},"id":6247641857,"num":1,"pageId":293032984,"properties":{"width":118,"height":38},"sceneId":21138077,"type":"2","trigger":{"sends":[{"sendIndex":0,"delay":0,"type":1,"handles":[{"type":1,"ids":[9888888328,9730506312,1764798081,9912898005,4137763768,4915586643]},{"type":2,"ids":[9981923830]}]}],"receives":[{"type":1,"ids":[]},{"type":2,"ids":[]},{"type":3,"ids":[]}]}},{"content":"","css":{"top":-44.00567626953125,"left":-138,"zIndex":7,"color":"rgba(204,164,116,1)","width":545,"height":574,"backgroundColor":"","opacity":1,"borderWidth":0,"borderStyle":"solid","borderColor":"rgba(0,0,0,1)","paddingBottom":0,"paddingTop":0,"lineHeight":1,"borderRadius":"0px","transform":"rotateZ(0deg)","borderRadiusPerc":0,"boxShadow":"0px 2px 6px rgba(0,0,0,0.3)","boxShadowDirection":0,"boxShadowSize":2,"borderBottomRightRadius":"0px","borderBottomLeftRadius":"0px","borderTopRightRadius":"0px","borderTopLeftRadius":"0px"},"id":4137763768,"pageId":293032984,"properties":{"type":"rect","viewBox":"0 0 64 64","width":545,"height":574,"anim":[{"type":1,"direction":3,"duration":0.6,"delay":0,"countNum":1}]},"sceneId":21138077,"type":"h","trigger":{"sends":[],"receives":[{"type":2,"ids":[9216692076,4915586643]},{"type":1,"ids":[9434981114,6247641857]}]}},{"content":"","css":{"top":441,"left":277,"zIndex":8,"color":"#d7cbae","width":31,"height":31,"backgroundColor":"","opacity":1,"borderWidth":0,"borderStyle":"solid","borderColor":"rgba(0,0,0,1)","paddingBottom":0,"paddingTop":0,"lineHeight":1,"borderRadius":"0px","transform":"rotateZ(0deg)","borderRadiusPerc":0,"boxShadow":"rgba(0,0,0,0) 0 0 0","boxShadowDirection":0,"boxShadowSize":0,"borderBottomRightRadius":"0px","borderBottomLeftRadius":"0px","borderTopRightRadius":"0px","borderTopLeftRadius":"0px"},"id":4915586643,"pageId":293032984,"properties":{"type":"symbols-x-circle","viewBox":"0 0 32 32","width":31,"height":31,"anim":[{"type":4,"direction":0,"duration":1,"delay":0.6,"countNum":1}]},"sceneId":21138077,"type":"h","trigger":{"sends":[{"sendIndex":0,"delay":0,"type":1,"handles":[{"type":2,"ids":[3232922545,7936790104,9841892808,3816507760,742940610]},{"type":1,"ids":[]}]},{"sendIndex":1,"delay":0,"type":1,"handles":[{"type":2,"ids":[9888888328,9730506312,1764798081,9912898005,4137763768]},{"type":1,"ids":[]}]}],"receives":[{"type":2,"ids":[4946253251]},{"type":1,"ids":[9434981114,6247641857]},{"type":3,"ids":[]}]}},{"content":"","css":{"top":-58.991477966308594,"left":-236.335205078125,"zIndex":9,"color":"rgba(204,164,116,1)","width":743,"height":679,"backgroundColor":"","opacity":1,"borderWidth":0,"borderStyle":"solid","borderColor":"rgba(0,0,0,0.3)","paddingBottom":0,"paddingTop":0,"lineHeight":1,"borderRadius":"0px","transform":"rotateZ(0deg)","borderRadiusPerc":3,"boxShadow":"0px 2px 6px 0","boxShadowDirection":0,"boxShadowSize":2,"borderBottomRightRadius":"0px","borderBottomLeftRadius":"0px","borderTopRightRadius":"0px","borderTopLeftRadius":"0px"},"id":6995946174,"pageId":293032984,"properties":{"type":"rect","viewBox":"0 0 64 64","width":743,"height":679},"sceneId":21138077,"type":"h","trigger":{"sends":[],"receives":[{"type":2,"ids":[6372375133,9981923830]},{"type":1,"ids":[4946253251,2385817387]},{"type":3,"ids":[]}]}},{"content":"","css":{"top":45.5,"left":250,"zIndex":10,"color":"rgba(255,255,255,1)","width":15,"height":15,"backgroundColor":"","opacity":1,"borderWidth":0,"borderStyle":"solid","borderColor":"rgba(0,0,0,1)","paddingBottom":0,"paddingTop":0,"lineHeight":1,"borderRadius":"0px","transform":"rotateZ(0deg)","borderRadiusPerc":0,"boxShadow":"rgba(0,0,0,0) 0 0 0","boxShadowDirection":0,"boxShadowSize":0,"borderBottomRightRadius":"0px","borderBottomLeftRadius":"0px","borderTopRightRadius":"0px","borderTopLeftRadius":"0px"},"id":6520693722,"pageId":293032984,"properties":{"type":"symbols-thin-arrow-up-right","viewBox":"4 4 24 24","width":15,"height":15,"anim":[{"type":0,"direction":0,"duration":0.6,"delay":0.6,"countNum":1}]},"sceneId":21138077,"type":"h","trigger":{"sends":[],"receives":[{"type":2,"ids":[6372375133,9981923830]},{"type":1,"ids":[4946253251,2385817387]},{"type":3,"ids":[]}]}},{"content":"","css":{"top":441,"left":8,"zIndex":11,"color":"#d7cbae","width":31,"height":31,"backgroundColor":"","opacity":1,"borderWidth":0,"borderStyle":"solid","borderColor":"rgba(0,0,0,1)","paddingBottom":0,"paddingTop":0,"lineHeight":1,"borderRadius":"0px","transform":"rotateZ(0deg)","borderRadiusPerc":0,"boxShadow":"rgba(0,0,0,0) 0 0 0","boxShadowDirection":0,"boxShadowSize":0,"borderBottomRightRadius":"0px","borderBottomLeftRadius":"0px","borderTopRightRadius":"0px","borderTopLeftRadius":"0px"},"id":9981923830,"pageId":293032984,"properties":{"type":"symbols-x-circle","viewBox":"0 0 32 32","width":31,"height":31,"anim":[{"type":4,"direction":0,"duration":1,"delay":0.6,"countNum":1}]},"sceneId":21138077,"type":"h","trigger":{"sends":[{"sendIndex":0,"delay":0,"type":1,"handles":[{"type":2,"ids":[]},{"type":1,"ids":[]},{"type":3,"ids":[]}]},{"sendIndex":1,"delay":0,"type":1,"handles":[{"type":2,"ids":[]},{"type":1,"ids":[]},{"type":3,"ids":[]}]},{"sendIndex":2,"delay":0,"type":1,"handles":[{"type":2,"ids":[4405943526,6520693722,6995946174]},{"type":1,"ids":[]}]}],"receives":[{"type":2,"ids":[9434981114,6247641857]},{"type":1,"ids":[4946253251,2385817387]},{"type":3,"ids":[]}]}},{"content":"<div style=\"text-align: center;\"><span style=\"color: inherit; line-height: inherit; font-size: 14px; background-color: initial;\">戳这里，转发接力</span></div>","css":{"top":59.5,"left":77,"zIndex":12,"width":172,"height":41,"lineHeight":0.6,"backgroundColor":"","opacity":1,"color":"rgba(255,255,255,1)","borderWidth":2,"borderStyle":"dashed","borderColor":"rgba(255,255,255,1)","paddingBottom":0,"paddingTop":0,"borderRadius":"6px","transform":"rotateZ(0deg)","borderRadiusPerc":31,"boxShadow":"rgba(0,0,0,0) 0 0 0","boxShadowDirection":0,"boxShadowSize":0,"borderBottomRightRadius":"6px","borderBottomLeftRadius":"6px","borderTopRightRadius":"6px","borderTopLeftRadius":"6px"},"id":4405943526,"num":1,"pageId":293032984,"properties":{"width":172,"height":41,"anim":[{"type":4,"direction":0,"duration":0.6,"delay":0.2,"countNum":1}]},"sceneId":21138077,"type":"2","trigger":{"sends":[],"receives":[{"type":2,"ids":[6372375133,9981923830]},{"type":1,"ids":[4946253251,2385817387]}]}},{"content":"<div style=\"text-align: center;\"><span style=\"color: inherit; line-height: inherit; font-size: 20px; background-color: initial;\">你<span style=\"font-size: 20px;\">的一个场景，足以改变世界</span></span></div>","css":{"top":322,"left":-0.75,"zIndex":13,"width":320,"height":38,"lineHeight":1,"backgroundColor":"","opacity":1,"color":"rgba(255,255,255,1)","borderWidth":0,"borderStyle":"solid","borderColor":"rgba(0,0,0,1)","paddingBottom":0,"paddingTop":0,"borderRadius":"0px","transform":"rotateZ(0deg)","borderRadiusPerc":0,"boxShadow":"rgba(0,0,0,0) 0 0 0","boxShadowDirection":0,"boxShadowSize":0,"borderBottomRightRadius":"0px","borderBottomLeftRadius":"0px","borderTopRightRadius":"0px","borderTopLeftRadius":"0px"},"id":9730506312,"num":1,"pageId":293032984,"properties":{"anim":[{"type":1,"direction":3,"duration":1,"delay":1,"countNum":1}]},"sceneId":21138077,"type":"2","trigger":{"sends":[],"receives":[{"type":2,"ids":[9216692076,4915586643]},{"type":1,"ids":[9434981114,6247641857]}]}},{"content":"","css":{"top":383,"left":177,"zIndex":14,"width":110,"height":26,"backgroundColor":"","opacity":1,"color":"#676767","borderWidth":0,"borderStyle":"solid","borderColor":"rgba(0,0,0,1)","paddingBottom":0,"paddingTop":0,"lineHeight":1,"borderRadius":"0px","transform":"rotateZ(0deg)","borderRadiusPerc":0,"boxShadow":"rgba(0,0,0,0) 0 0 0","boxShadowDirection":0,"boxShadowSize":0,"borderBottomRightRadius":"0px","borderBottomLeftRadius":"0px","borderTopRightRadius":"0px","borderTopLeftRadius":"0px"},"id":9912898005,"num":1,"pageId":293032984,"properties":{"width":110,"height":26,"src":"group3/M00/EE/A8/yq0KZFZJfTCAQkf-AABgvlb8nms890.png","id":121309277,"imgStyle":{"width":110,"height":26,"marginTop":"0px","marginLeft":"-0.5px"},"anim":[{"type":1,"direction":2,"duration":1,"delay":1.2,"countNum":1}]},"sceneId":21138077,"type":4,"trigger":{"sends":[],"receives":[{"type":2,"ids":[9216692076,4915586643]},{"type":1,"ids":[9434981114,6247641857]}]}},{"content":"","css":{"top":382,"left":27,"zIndex":15,"width":125,"height":29,"backgroundColor":"","opacity":1,"color":"#676767","borderWidth":0,"borderStyle":"solid","borderColor":"rgba(0,0,0,1)","paddingBottom":0,"paddingTop":0,"lineHeight":1,"borderRadius":"0px","transform":"rotateZ(0deg)","borderRadiusPerc":0,"boxShadow":"rgba(0,0,0,0) 0 0 0","boxShadowDirection":0,"boxShadowSize":0,"borderBottomRightRadius":"0px","borderBottomLeftRadius":"0px","borderTopRightRadius":"0px","borderTopLeftRadius":"0px"},"id":1764798081,"num":1,"pageId":293032984,"properties":{"width":125,"height":29,"src":"group3/M00/FF/75/yq0KZFZLzAqAdaPTAAA3km0_U5w803.png","id":122630194,"imgStyle":{"width":125,"height":29,"marginTop":"0px","marginLeft":"0px"},"anim":[{"type":1,"direction":0,"duration":1,"delay":1.2,"countNum":1}]},"sceneId":21138077,"type":4,"trigger":{"sends":[],"receives":[{"type":2,"ids":[9216692076,4915586643]},{"type":1,"ids":[9434981114,6247641857]}]}},{"content":"<div style=\"text-align: center;\"><span style=\"font-size: 20px; color: inherit; line-height: inherit; background-color: initial;\">活动说明</span></div><div style=\"text-align: center;\"><span style=\"font-size: 20px;\"><br></span></div><div style=\"text-align: center;\"><span style=\"font-size: 12px;\">活动主题</span></div><div style=\"text-align: center;\"><span style=\"font-size: 12px;\">2015年度公益H5创意大赛</span></div><div style=\"text-align: center;\"><span style=\"font-size: 12px;\">活动时间</span></div><div style=\"text-align: center;\"><span style=\"font-size: 12px;\">2015.11.16-2015.12.06</span></div><div style=\"text-align: center;\"><span style=\"font-size: 12px;\">活动要求</span></div><div style=\"text-align: center;\"><span style=\"font-size: 12px;\">面向全社会征集NGO公益场景，为40个NGO提供H5场景资源，帮助NGO更好传播，使公益更有力量。</span></div>","css":{"top":71.99147033691406,"left":5.8948974609375,"zIndex":16,"width":309,"height":246,"lineHeight":1,"backgroundColor":"","opacity":1,"color":"rgba(255,255,255,1)","borderWidth":0,"borderStyle":"solid","borderColor":"rgba(0,0,0,1)","paddingBottom":0,"paddingTop":0,"borderRadius":"0px","transform":"rotateZ(0deg)","borderRadiusPerc":0,"boxShadow":"rgba(0,0,0,0) 0 0 0","boxShadowDirection":0,"boxShadowSize":0,"borderBottomRightRadius":"0px","borderBottomLeftRadius":"0px","borderTopRightRadius":"0px","borderTopLeftRadius":"0px"},"id":9888888328,"num":1,"pageId":293032984,"properties":{"anim":[{"type":0,"direction":0,"duration":1,"delay":0.4,"countNum":1}],"width":309,"height":246},"sceneId":21138077,"type":"2","trigger":{"sends":[],"receives":[{"type":2,"ids":[9216692076,4915586643]},{"type":1,"ids":[9434981114,6247641857]}]}},{"css":{"zIndex":"18"},"id":932971784,"num":0,"pageId":293032984,"properties":{"imgSrc":"group2/M00/71/E2/yq0KXlZK4XeAKL3IAAFZIAOSNj4786.jpg","id":122216291},"sceneId":21138077,"type":3}],"scene":null}]};

var data2={"list":[
    {
        "id": 308799990,
        "sceneId": 22480655,
        "num": 1,
        "name": null,
        "properties": null,
        "elements": [
            {
                "content": "",
                "css": {"top": 252, "left": 96.015625, "zIndex": 0, "width": 117, "height": 69},
                "id": 7372821654,
                "num": 1,
                "pageId": 299535442,
                "properties": {
                    "width": "100px",
                    "height": "100px",
                    "src": "group1/M00/94/7D/yq0KXFZLyw-ALlKaAAAHoGDJHsE175.png",
                    "imgStyle": {"width": 117, "height": 69, "marginTop": "0", "marginLeft": "0"},
                    "anim": [{"type": 4, "direction": 0, "duration": 2, "delay": 0, "countNum": 1}]
                },
                "sceneId": 22480651,
                "type": 4
            },
            {
                "content": "",
                "css": {
                    "top": 326,
                    "left": 89.98016357421875,
                    "zIndex": 1,
                    "width": 161,
                    "height": 107,
                    "backgroundColor": "",
                    "opacity": 1,
                    "color": "#676767",
                    "borderWidth": 0,
                    "borderStyle": "solid",
                    "borderColor": "rgba(0,0,0,1)",
                    "paddingBottom": 0,
                    "paddingTop": 0,
                    "lineHeight": 1,
                    "borderRadius": "0px",
                    "transform": "rotateZ(0deg)",
                    "borderRadiusPerc": 0,
                    "borderBottomRightRadius": "0px",
                    "borderBottomLeftRadius": "0px",
                    "borderTopRightRadius": "0px",
                    "borderTopLeftRadius": "0px",
                    "boxShadow": "rgba(0,0,0,0) 0 0 0",
                    "boxShadowDirection": 0,
                    "boxShadowSize": 0
                },
                "id": 3095296550,
                "num": 1,
                "pageId": 299535442,
                "properties": {
                    "width": 161,
                    "height": 107,
                    "src": "group2/M00/7C/14/yq0KXlZMMVKAELB2AAAvbS8gvfo751.png",
                    "imgStyle": {"width": 175, "height": 106, "marginTop": "0px", "marginLeft": "-7px"},
                    "anim": [{"type": 1, "direction": 3, "duration": 2, "delay": 0, "countNum": 1}]
                },
                "sceneId": 22480651,
                "type": 4
            }]
    }
]};

var worm = new Worm(model,data1);
console.log(JSON.stringify(worm.build()));
console.log('++++++++++++++');
worm.setSource(data2);
console.log(JSON.stringify(worm.build()));