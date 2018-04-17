# SUI
Web移动端前端框架

### 目录
- Ajax请求
  - Ajax
- 跳转方式
  - \[class\=goto\]链接跳转
- 框架事件
  - multipleClick 多元素点击事件
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
  - showPic (大图显示组件)
  - actionSheet (上拉多选组件)
