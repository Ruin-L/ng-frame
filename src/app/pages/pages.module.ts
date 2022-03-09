/*
 * @Description: {{ByRuin}}
 * @Version: 2.0
 * @Author: Ruin 🍭
 * @Date: 2022-03-03 17:03:51
 * @LastEditors: 刘引
 * @LastEditTime: 2022-03-09 17:20:50
 */
import { NgModule } from "@angular/core";
import { HomeModule } from "./home/home.module";
import { UserModule } from "./user/user.module";
import { NotFoundComponent } from "./not-found/not-found.component";

// 引入并且配置服务
@NgModule({
  declarations: [NotFoundComponent],
  imports: [HomeModule, UserModule],
  providers: [],
  exports: [HomeModule, UserModule],
})
export class PagesModule {}
