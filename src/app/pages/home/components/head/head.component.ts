/*
 * @Description: {{ByRuin}}
 * @Version: 2.0
 * @Author: Ruin 🍭
 * @Date: 2022-03-03 17:07:14
 * @LastEditors: 刘引
 * @LastEditTime: 2022-03-04 10:23:02
 */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss'],
})
export class HeadComponent implements OnInit {
  public title = '我是头部组件';
  public userName: string = '张三';
  private age: number = 12;
  protected school: string = 'xx中学';

  public userInfo: object = {
    userName: '李四',
    age: 20,
  };
  constructor() {}

  ngOnInit(): void {}
}
