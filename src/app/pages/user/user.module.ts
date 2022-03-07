/*
 * @Description: {{ByRuin}}
 * @Version: 2.0
 * @Author: Ruin 🍭
 * @Date: 2022-03-04 10:42:33
 * @LastEditors: 刘引
 * @LastEditTime: 2022-03-07 11:29:54
 */
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ComponentsModule } from "src/app/components/components.module";
import { InfoComponent } from "./components/info/info.component";
import { MineComponent } from "./components/mine/mine.component";
import { UserComponent } from "./user.component";

@NgModule({
  declarations: [InfoComponent, MineComponent, UserComponent],
  imports: [CommonModule, ComponentsModule],
  exports: [InfoComponent, MineComponent, UserComponent],
})
export class UserModule {}
