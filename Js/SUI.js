/*!
 * =====================================================
 * Sui v0.0.1 ( Author - Yu )
 * =====================================================
 */
var doc = document,
	that = this;
var goto;
 /*window.onload = function(){
 	console.warn('SUI框架技术支持 SUI Framework Technical Support\nWeb Site Link:www.comelt.cn')
 }*/
(function(sui){
	/*console.warn('SUI Framework Technical Support v0.1')*/
	/* console["\x77\x61\x72\x6e"]('\x53\x55\x49 \x46\x72\x61\x6d\x65\x77\x6f\x72\x6b \x54\x65\x63\x68\x6e\x69\x63\x61\x6c \x53\x75\x70\x70\x6f\x72\x74 \x76\x30\x2e\x31') */
	if ((goto = doc.getElementsByClassName('goto')).length) {
		/*console.log(goto.length)*/
		sui.simpleErgodic({
			object:doc.getElementsByClassName('goto'),
			type:'onclick',
			event:function(e,i,that){
				if (this.object[i].attributes["href"]) {
					location.href = that.attributes["href"].nodeValue;
				}else {
					console.warn('警告：该元素未指定地址属性 => href\nWarn: This element not have href attributes\n\nTip:意思就是有个傻逼程序员忘了添加链接地址！！');
				}
			}
		})
	}
})({
	simpleErgodic:function(a){
		for (var i = 0; i < a.object.length; i++) {
			switch (a.type) {
				case 'onclick':
					(function(i){
						a.object[i].onclick = function(e){
							a.event(e,i,this);
						}
					})(i);
					break;
				default:
					break;
			}
		}
	}
});

var sui = {
	/* SUI */

	/**
	* TODO Ajax更新后重新赋予goto类链接能力 17-04-17
	* TODO Ajax对数组对象做格式化处理 17-04-17
	* TODO Ajax失败的回调函数 17-04-17
	**/
	ajax:function(a){
		a.method = a.method || 'get';
		a.ajax = a.ajax || true;
		a.dataType = a.dataType || 'string';
		a.error = a.error || function(){
			console.warn('Ajax请求失败');
		};
		var ajax = new XMLHttpRequest();
		ajax.onreadystatechange = function() {
			if (ajax.readyState == 4 && ajax.status == 200) {
				var response = ajax.responseText;
				a.success(JSON.parse(response));
				if (a.suiLink) {
					sui.multipleClick({
						obj:document.querySelectorAll(".goto"),
						event:function(i,that){
							location.href = that.attributes["href"].nodeValue;
						}
					})
				}
			}else if (ajax.readyState == 4 && ajax.status != 200) {
				a.error(ajax);
			}
		};
		var data = a.data;
		if (a.dataType == 'json') {
			var nowData = "";
			for (var i in data) {
				nowData += (nowData != ''?'&':'')+i+'='+data[i];
			}
			data = nowData;
		}
		ajax.open(a.method, a.url, a.ajax);
		ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		/**
			适应beego => IsAjax() 检测
		**/
		ajax.setRequestHeader("X-Requested-With","XMLHttpRequest");
		if (a.requestHeader) {
			for (var i in a.requestHeader) {
				ajax.setRequestHeader(i,a.requestHeader[i])
			}
		}
		ajax.send(data);
	},
	multipleClick:function(a){
		for (var i = 0; i < a.obj.length; i++) {
			(function(i){
				a.obj[i].onclick = function(e){a.event(i,this,e)}
			})(i)
		}
	},
	alert:function(info){
		info.tit = info.tit || "提示";
		info.cont = info.cont || "";
		info.outtime = info.outtime || 1000;
		info.buttname = info.buttname || "确定";
	    var suiBox = document.createElement("div");
	    	suiBox.className = "suiUiBox show";
	    document.body.appendChild(suiBox);
	    var alert = document.createElement("div");
	    	alert.className = "alert";
	    suiBox.appendChild(alert);
	    var alertCont = document.createElement("dl");
	    var alertTit = document.createElement("dt");
	    var alertContent = document.createElement("dd");
	    	alertTit.innerHTML = info.tit;
	    	alertContent.innerHTML = info.cont;
	    	alertCont.appendChild(alertTit);
	    	alertCont.appendChild(alertContent);
	    alert.appendChild(alertCont);
	    document.body.style.overflow = 'hidden';
	    var butt = document.createElement("div");
	    	butt.className = "butt";
	    	butt.innerHTML = info.buttname;
	    alert.appendChild(butt);
	    butt.addEventListener("click",function(){
	    	if (info.success) {
		    	info.success();
	    	}
	    	suiBox.className = "suiUiBox hide";
	    	setTimeout(function(){
	    		document.body.removeChild(suiBox);
	    	},info.outtime)
	    })
	},
	confirm:function(info){
		info.tit = info.tit || "提示";
		info.cont = info.cont || "";
		info.outtime = info.outtime || 1000;
		info.buttone = info.buttone || "确定";
		info.butttwo = info.butttwo || "取消";
	    var suiBox = document.createElement("div");
	    	suiBox.className = "suiUiBox show";
	    document.body.appendChild(suiBox);
	    var alert = document.createElement("div");
	    	alert.className = "confirm";
	    suiBox.appendChild(alert);
	    var alertCont = document.createElement("dl");
	    var alertTit = document.createElement("dt");
	    var alertContent = document.createElement("dd");
	    	alertTit.innerHTML = info.tit;
	    	alertContent.innerHTML = info.cont;
	    	alertCont.appendChild(alertTit);
	    	alertCont.appendChild(alertContent);
	    alert.appendChild(alertCont);
	    document.body.style.overflow = 'hidden';
	    var buttone = document.createElement("div");
	    	buttone.className = "butt";
	    	buttone.innerHTML = info.buttone;
	    var butttwo = document.createElement("div");
	    	butttwo.className = "butt";
	    	butttwo.innerHTML = info.butttwo;
	    alert.appendChild(buttone);
	    alert.appendChild(butttwo);
	    buttone.addEventListener("click",function(){
	    	if (info.success) {
		    	info.success();
	    	}
	    	suiBox.className = "suiUiBox hide";
	    	setTimeout(function(){
	    		document.body.removeChild(suiBox);
	    	},info.outtime)
	    });
	    butttwo.addEventListener("click",function(){
	    	if (info.cancel) {
		    	info.cancel();
	    	}
	    	suiBox.className = "suiUiBox hide";
	    	setTimeout(function(){
	    		document.body.removeChild(suiBox);
	    	},info.outtime)
	    });
	},
	actionSheet:function(info){
		var suiBox = document.createElement("div");
			suiBox.className = "suiUiBox show";
		document.body.appendChild(suiBox);
		var sheet = document.createElement("div");
			sheet.className = "sheet";
		suiBox.appendChild(sheet);
		var ul = document.createElement("ul");
		for (var i in info.data) {
			var li = document.createElement("li");
			li.innerHTML = info.data[i];
			(function(i){
				li.onclick = function(){
					info.success({index:i,data:this.innerHTML});
				}
			})(i);
			ul.appendChild(li);
		}
		sheet.appendChild(ul);
		var butt = document.createElement("span");
			butt.innerHTML = info.buttname || "取消";
			butt.onclick = function(){
				suiBox.className = "suiUiBox hide";
				setTimeout(function(){
					document.body.removeChild(suiBox);
				}, (info.timeout || 1000))
			};
		sheet.appendChild(butt);
	},
	toEnd:function(e){
		var realheight,height,top;
		var status = 0;
		window.onscroll = function(){
			realheight = document.body.clientHeight;
			height = window.screen.height;
			top = window.scrollY;
			if (height + top >= realheight) {
				if (status == 0) {
					status = 1;
					if (e.success()){
						e.success();
					}
					setTimeout(function(){
						status = 0;
					},1000)
				}
			}
		}
	},
	toast:function(s){
		var Toast = document.createElement('span');
			Toast.className = "suiToast";
			Toast.innerHTML = s.text;
		document.body.appendChild(Toast);
		setTimeout(function(){
			Toast.className += " hide";
			setTimeout(function(){
				document.body.removeChild(Toast);
			}, 2000)
		}, 1000)
	},
	showPic:function(s){
		var suiBox = document.createElement("div");
			suiBox.className = "suiUiBox show";
			suiBox.style.backgroundRepeat = 'no-repeat';
			suiBox.style.backgroundSize = '100%';
			suiBox.style.backgroundPosition = 'center';
			suiBox.style.backgroundImage = 'url('+s.img+')';
		document.body.appendChild(suiBox);
		suiBox.onclick = function(){
			suiBox.className = "suiUiBox hide";
			setTimeout(function(){
				document.body.removeChild(suiBox);
			},1000)
		}
	},
	loading:function(s){
		var suiBox = document.createElement("div");
			suiBox.className = "suiUiBox opa";
		var loading = document.createElement("div");
			loading.className = "loading";
		var load = document.createElement("span"),
			p = document.createElement("p");
		p.innerText = "加载中"
		suiBox.appendChild(loading)
		loading.appendChild(load)
		loading.appendChild(p)
		document.body.appendChild(suiBox);
		if (!s || !s.success) {
			return;
		}
		s.success()
		suiBox.className = "suiUiBox hide";
		setTimeout(function(){
			document.body.removeChild(suiBox);
		},1000)
	},
	isExist:function(s){
		if (s.obj) {
			if (document.querySelector(s.obj)) {
				s.success(s.obj);
			}else{
				console.warn('不存在该元素！');
			}
		}
	},
	multipleEvent:function(s){
		s.type = s.type || 'click';
		switch (s.type) {
			case 'tap':
				for (var i = 0; i < s.obj.length; i++) {
					(function(i){
						var ismove = false;
						var longtime = false;
						s.obj[i].addEventListener("touchstart",function(e){
							setTimeout(function(){
								longtime = true;
							},800)
						});
						s.obj[i].addEventListener("touchmove",function(e){
							ismove = true;
						});
						s.obj[i].addEventListener("touchend",function(e){
							if (!ismove && !longtime) {
								s.event(i,this,e);
							}
							ismove = false;
							longtime = false;
						});
					})(i)
				}
				break;
			case 'longtap':
				for (var i = 0; i < s.obj.length; i++) {
					(function(i){
						var ismove = false;
						var touchend = false;
						s.obj[i].addEventListener("touchstart",function(e){
							touchend = false;
							setTimeout(function(){
								if (!ismove && !touchend) {
									s.event(i,this,e)
								}
							},800)
						});
						s.obj[i].addEventListener("touchmove",function(e){
							ismove = true;
						});
						s.obj[i].addEventListener("touchend",function(e){
							ismove = false;
							touchend = true;
						});
					})(i)
				}
				break;
			default:
				for (var i = 0; i < s.obj.length; i++) {
					(function(i){
						s.obj[i].onclick = function(e){s.event(i,this,e)}
					})(i)
				}
			break;
		}
	}
};

/**
* TODO sui移动端选择器
**/
function suiSelect(global){
	sui.isExist({
		obj:".suiSelect",
		success:function(s){
			sui.multipleClick({
				obj:document.querySelectorAll(s),
				event:function(i,that){
					if (that.attributes["selected"]) {
						that.attributes["selected"].nodeValue = ((that.attributes["selected"].nodeValue == "true" || that.attributes["selected"].nodeValue == "")?false:true)
					}else{
						that.setAttribute("selected","true")
					}
					if (global != undefined || global.length != undefined) {
						global.change(i,that)
					}
				}
			})
		}
	});
}
/**
* TODO 创建一个自定义事件
**/

// 序列化表单
// iE的命名未缺省，出问题终点排查。
function format(query,type){		
	type = type || 'string';
	query = query || 'body';
	queryType = typeof query
	if (queryType == "object") {
		var inputEle = query.querySelectorAll("input[name],select[name],textarea[name]");
	}else if(queryType == "string"){
		var inputEle = document.querySelectorAll(query+" input[name],"+query+" select[name],"+query+" textarea[name]");
	}
	var iE,
		result = type == 'json'?{}:'',
		addString = function(k,v){
			result += (result==''?'':'&')+k+"="+(v?v:'');
		},
		addJson = function(k,v){
			result[k] = (v?v:'');
		};
	for (var i = 0; i < inputEle.length; i++) {
		switch ((iE = inputEle[i]).type) {
			case "text": case 'number': case 'hidden': case 'textarea': case 'select-one': type == 'json'?addJson(iE.name,iE.value):addString(iE.name,iE.value); break;
			case "radio": iE.checked?(type == 'json'?addJson(iE.name,iE.value):addString(iE.name,iE.value)):(type == 'json'?addJson(iE.name,'0'):addString(iE.name,'0')); break;
			default: break;
		}
	}
	return result;
}

// 获取参数
var allParam = location.href.split("?")[1],hrefParam = {}
if (allParam) {
    // console.log(allParam.split("&").length)
    for (var i = 0; i < allParam.split("&").length; i++) {
        hrefParam[allParam.split("&")[i].split("=")[0]] = decodeURI(allParam.split("&")[i].split("=")[1])
    }
}