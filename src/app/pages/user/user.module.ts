/*
 * @Description: {{ByRuin}}
 * @Version: 2.0
 * @Author: Ruin 🍭
 * @Date: 2022-03-04 10:42:33
 * @LastEditors: 刘引
 * @LastEditTime: 2022-03-09 11:56:39
 */
import { NgModule } from "@angular/core";
import { InfoComponent } from "./components/info/info.component";
import { MineComponent } from "./components/mine/mine.component";
import { UserComponent } from "./user.component";
import { PublicModule } from "src/app/model/public.module";
@NgModule({
  declarations: [InfoComponent, MineComponent, UserComponent],
  imports: [PublicModule],
  exports: [InfoComponent, MineComponent, UserComponent],
})
export class UserModule {}
