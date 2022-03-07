/*
 * @Description: {{ByRuin}}
 * @Version: 2.0
 * @Author: Ruin 🍭
 * @Date: 2022-03-03 17:06:01
 * @LastEditors: 刘引
 * @LastEditTime: 2022-03-07 10:19:20
 */
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home.component";
import { HeadComponent } from "./components/head/head.component";
import { BodyComponent } from "./components/body/body.component";
import { ComponentsModule } from "src/app/components/components.module";
// 引入双向数据绑定
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [HomeComponent, HeadComponent, BodyComponent],
  imports: [CommonModule, ComponentsModule, FormsModule],
  exports: [HomeComponent, HeadComponent, BodyComponent],
})
export class HomeModule {}
