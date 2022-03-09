/*
 * @Description: {{ByRuin}}
 * @Version: 2.0
 * @Author: Ruin 🍭
 * @Date: 2022-03-03 16:21:23
 * @LastEditors: 刘引
 * @LastEditTime: 2022-03-09 17:11:03
 */
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { BodyComponent } from "./pages/home/components/body/body.component";
import { HeadComponent } from "./pages/home/components/head/head.component";
import { UserComponent } from "./pages/user/user.component";
import { NotFoundComponent } from "./pages/not-found/not-found.component";
const routes: Routes = [
  // 路由前面的路径不需要加/
  {
    // 父路由
    path: "index",
    component: HomeComponent,
    // 子路由
    children: [
      { path: "body", component: BodyComponent },
      { path: "head", component: HeadComponent },
      {
        path: "**",
        redirectTo: "head",
      },
    ],
  },
  {
    path: "user",
    component: UserComponent,
  },
  {
    path: "404",
    component: NotFoundComponent,
  },
  // 匹配不到路由时加载的组件或者跳转的路由
  {
    path: "**",
    redirectTo: "404",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
