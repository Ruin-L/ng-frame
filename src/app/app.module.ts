/*
 * @Description: {{ByRuin}}
 * @Version: 2.0
 * @Author: Ruin 🍭
 * @Date: 2022-03-03 16:21:23
 * @LastEditors: 刘引
 * @LastEditTime: 2022-03-04 10:09:24
 */
// 引入核心模块
import { NgModule } from '@angular/core';
// 引入浏览器解析模块
import { BrowserModule } from '@angular/platform-browser';
// 引入路由模块
import { AppRoutingModule } from './app-routing.module';
// 引入根组件
import { AppComponent } from './app.component';
// @ngModule装饰器 @ngModule接受一个元数据对象 告诉angular如何编译和启动对象\
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [AppComponent], //配置项目运行的组件
  imports: [BrowserModule, AppRoutingModule, CoreModule], //配置当前项目运行依赖的其他模块
  providers: [], //配置项目所需要的服务
  bootstrap: [AppComponent], //指定应用的主视图(称为根组件,通过引导AppModule来启动哟应用 这里写的一般是根组件)
})
//根模块不需要导出任何东西,以为其他组件不需要导入根模块
export class AppModule {}
