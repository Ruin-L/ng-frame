/*
 * @Description: {{ByRuin}}
 * @Version: 2.0
 * @Author: Ruin 🍭
 * @Date: 2022-03-09 11:13:29
 * @LastEditors: 刘引
 * @LastEditTime: 2022-03-09 17:35:19
 */
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "../app-routing.module";
import { ComponentsModule } from "src/app/components/components.module";
import { CommonModule } from "@angular/common";
// 引入双向数据绑定
import { FormsModule } from "@angular/forms";
import { NzButtonModule } from "ng-zorro-antd/button";
@NgModule({
  declarations: [],
  imports: [],
  exports: [
    AppRoutingModule,
    ComponentsModule,
    FormsModule,
    CommonModule,
    NzButtonModule,
  ],
})
export class PublicModule {}
