/*
 * @Description: {{ByRuin}}
 * @Version: 2.0
 * @Author: Ruin 🍭
 * @Date: 2022-03-03 16:48:51
 * @LastEditors: 刘引
 * @LastEditTime: 2022-03-04 10:29:19
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesModule } from '../pages/pages.module';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, PagesModule, ComponentsModule],
  exports: [PagesModule, ComponentsModule],
})
export class CoreModule {}
