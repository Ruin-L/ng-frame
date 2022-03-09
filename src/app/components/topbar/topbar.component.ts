/*
 * @Description: {{ByRuin}}
 * @Version: 2.0
 * @Author: Ruin 🍭
 * @Date: 2022-03-09 15:00:25
 * @LastEditors: 刘引
 * @LastEditTime: 2022-03-09 17:06:29
 */
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-topbar",
  templateUrl: "./topbar.component.html",
  styleUrls: ["./topbar.component.scss"],
})
export class TopbarComponent implements OnInit {
  constructor() {}
  public tobMenu: any = [
    { title: "首页", id: "1", src: "/index" },
    { title: "商品", id: "2", src: "/user" },
    { title: "关于我们", id: "3", src: "/user" },
  ];
  ngOnInit(): void {}
}
