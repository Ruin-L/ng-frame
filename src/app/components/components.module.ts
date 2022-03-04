/*
 * @Description: {{ByRuin}}
 * @Version: 2.0
 * @Author: Ruin 🍭
 * @Date: 2022-03-03 16:58:41
 * @LastEditors: 刘引
 * @LastEditTime: 2022-03-04 10:54:07
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news/news.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [NewsComponent, ListComponent],
  imports: [CommonModule],
  exports: [NewsComponent, ListComponent],
})
export class ComponentsModule {}
