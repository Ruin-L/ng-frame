/*
 * @Description: {{ByRuin}}
 * @Version: 2.0
 * @Author: Ruin 🍭
 * @Date: 2022-03-03 17:06:01
 * @LastEditors: 刘引
 * @LastEditTime: 2022-03-09 11:54:23
 */
import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { HeadComponent } from "./components/head/head.component";
import { BodyComponent } from "./components/body/body.component";
import { PublicModule } from "src/app/model/public.module";
@NgModule({
  declarations: [HomeComponent, HeadComponent, BodyComponent],
  imports: [PublicModule],
  exports: [HomeComponent, HeadComponent, BodyComponent],
})
export class HomeModule {}
