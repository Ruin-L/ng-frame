/*
 * @Description: {{ByRuin}}
 * @Version: 2.0
 * @Author: Ruin 🍭
 * @Date: 2022-03-03 16:58:41
 * @LastEditors: 刘引
 * @LastEditTime: 2022-03-09 17:20:28
 */
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TopbarComponent } from "./topbar/topbar.component";
import { AppRoutingModule } from "../app-routing.module";
import { FooterComponent } from "./footer/footer.component";
@NgModule({
  declarations: [TopbarComponent, FooterComponent],
  imports: [CommonModule, AppRoutingModule],
  exports: [TopbarComponent, FooterComponent],
})
export class ComponentsModule {}
