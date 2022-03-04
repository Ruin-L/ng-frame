/*
 * @Description: {{ByRuin}}
 * @Version: 2.0
 * @Author: Ruin 🍭
 * @Date: 2022-03-03 17:03:51
 * @LastEditors: 刘引
 * @LastEditTime: 2022-03-04 15:46:33
 */
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeModule } from "./home/home.module";
import { UserModule } from "./user/user.module";
@NgModule({
  declarations: [],
  imports: [CommonModule, HomeModule, UserModule],
  exports: [CommonModule, HomeModule, UserModule],
})
export class PagesModule {}
