/*
 * @Description: {{ByRuin}}
 * @Version: 2.0
 * @Author: Ruin 🍭
 * @Date: 2022-03-03 17:07:23
 * @LastEditors: 刘引
 * @LastEditTime: 2022-03-04 11:31:45
 */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
})
export class BodyComponent implements OnInit {
  public content = '<h2>我是一个H2标签</h2>';
  public arrList: Array<Number> = [1111, 222, 333, 444, 555];
  constructor() {}
  ngOnInit(): void {}
}
