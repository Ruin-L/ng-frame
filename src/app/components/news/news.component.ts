/*
 * @Description: {{ByRuin}}
 * @Version: 2.0
 * @Author: Ruin 🍭
 * @Date: 2022-03-03 16:59:15
 * @LastEditors: 刘引
 * @LastEditTime: 2022-03-04 14:58:48
 */

import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-news",
  templateUrl: "./news.component.html",
  styleUrls: ["./news.component.scss"],
})
export class NewsComponent implements OnInit {
  public msg: string = "我是新闻模块";
  constructor() {}
  ngOnInit(): void {}
  getNum() {
    alert("执行方法");
  }
  getData() {
    console.log(this.msg);
  }
  setData() {
    this.msg = "我是再次改变的msg";
  }
  pressKeyboard(e: any) {
    // keyCode为13代表回车
    if (e.keyCode === 13) {
      // e.target.value 代表获取dom元素中input输入框中的值
      console.log("按下了回车", e.target.value);
    } else {
      //获取当前输入的值
      console.log(e.code);
      // 获取按键的代号
      console.log(e.keyCode);
    }
  }
  changeDom(e: any): any {
    // 操作dom更改字体颜色
    e.target.style.color = "red";
    console.log(e.target.style);
  }
}
