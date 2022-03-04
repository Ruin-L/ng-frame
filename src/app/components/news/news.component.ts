/*
 * @Description: {{ByRuin}}
 * @Version: 2.0
 * @Author: Ruin 🍭
 * @Date: 2022-03-03 16:59:15
 * @LastEditors: 刘引
 * @LastEditTime: 2022-03-04 10:56:36
 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  public msg: string = '我是新闻模块';
  constructor() {
    console.log(this.msg);
    this.msg = '我是改变后msg的值';
    console.log(this.msg);
  }
  ngOnInit(): void {}
}
