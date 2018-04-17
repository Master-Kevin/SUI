# SUI
Web移动端前端框架

### 目录
- Ajax请求
  - Ajax
- 跳转方式
  - \[class\=goto\]链接跳转
  ```
  HTML:
  	<p class="goto">这是一个链接</p>
  ```
- 框架事件
  - multipleClick 多元素点击事件
  ```
  sui.multipleClick({
	  obj:document.querySelectorAll(".class"),
	  event:function(i,that){
	  	// event
	  }
  })
  ```
  - toEnd 触底事件
  ```
  // 基础触低事件 一秒执行一次success函数 防多次触发
  sui.toEnd({
      success:function(){
          // event
      }
  })
  ```
- UI组件
  - alert (弹窗组件)  
  ```
  sui.alert({
      tit:'提示', //默认提示
      cont:'提示内容', //默认为空
      buttname:'确定', //默认为确定
      success:function(){
        // event
      }
  })
  ```
  - toast (吐丝提示组件)
  ```
  sui.toast({
  	text:'Something'
  })
  ```
  - showPic (大图显示组件)
  ```
  sui.showPic({
  	img:'./img.jpg'
  })
  ```
  - actionSheet (上拉多选组件)
  ```
  sui.actionSheet({
  	data:["选项一","选项二","选项三"],
  	buttname:'取消', //默认取消
  	timeout:1000, // int 默认1000 组件退出过渡时间
  	success:function(s){
  		console.log('选择第'+s.i+'个\''+s.data+'\'选项');
  	}
  })
  ```
