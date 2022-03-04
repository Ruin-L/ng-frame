/*
 * @Description: {{ByRuin}}
 * @Version: 2.0
 * @Author: Ruin 🍭
 * @Date: 2022-03-03 17:07:23
 * @LastEditors: 刘引
 * @LastEditTime: 2022-03-04 13:34:58
 */
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-body",
  templateUrl: "./body.component.html",
  styleUrls: ["./body.component.scss"],
})
export class BodyComponent implements OnInit {
  public content = "<h2>我是一个H2标签</h2>";
  public arrList: Array<Number> = [1111, 222, 333, 444, 555];
  public picUrl: string =
    "http://img7.dl.ltimg.net/emoji/egg/5c4055492549591e51027e88?imageView2/1/w/300/h/300&sign=870d77486943cef24b9208b37ae48f07&t=6221b257";
  constructor() {}
  ngOnInit(): void {}
}
