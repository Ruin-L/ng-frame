/*
 * @Description: {{ByRuin}}
 * @Version: 2.0
 * @Author: Ruin 🍭
 * @Date: 2022-03-03 16:21:23
 * @LastEditors: 刘引
 * @LastEditTime: 2022-03-04 10:52:53
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UserComponent } from './pages/user/user.component';

const routes: Routes = [
  // 路由前面的路径不需要加/
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'user',
    component: UserComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
