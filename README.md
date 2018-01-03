# Ionic创建及使用

****
 
***<a href="https://heimiao.github.io/heimao_blog//static/myionic/www/index.html">点击我查看dmeo案例</a>***
<a href="https://heimiao.github.io/heimao_blog//static/myionic/www/index.html"> 
![img](https://heimiao.github.io/heimao_blog/image/myionic/componentList.jpg)
</a>


### 安装和运行

	// 安装全局的ionic和cordova打包工具
	$ npm install -g cordova ionic

	// 安装后可以验证一下 ionic cli 版本
	$ ionic -version
	 
	// 创建应用
	// cd 到要创建项目的目录，输入以下内容创建ionic项目
	// myionic 是项目名，tabs是模板（默认是tabs，其他还有blank的单页等）
	$ ionic start myionic tabs
	
	// 安装依赖
	// 会生成一个 node_modules 文件夹，并在里面安装 package.json 上写下的文件
	$ cd myionic/
	$ npm install
	

	//拷贝我的项目
	 git clone git@github.com:heimiao/myionic.git
	
	//把克隆我的文件覆盖掉你项目即可

	// 运行命令
	$ ionic serve
	
	在浏览器中打开
	http://localhost:8080

 
### 手机端运行

	/ 添加iOS项目
	$ ionic platform add ios
	// 把src里的内容同步到ios项目中(src后面会讲到)
	$ ionic cordova build ios
	// 运行iOS项目,相当于在Xcode里面按Command+R
	$ ionic cordova emulate ios
	
	//安卓的话同理，把ios替换为android即可
	$ ionic platform add android
	$ ionic cordova build android
	$ ionic cordova emulate android
 



 
