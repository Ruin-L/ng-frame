/*
 * @Description: {{ByRuin}}
 * @Version: 2.0
 * @Author: Ruin π­
 * @Date: 2022-03-09 15:00:25
 * @LastEditors: εεΌ
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
    { title: "ι¦ι‘΅", id: "1", src: "/index" },
    { title: "εε", id: "2", src: "/user" },
    { title: "ε³δΊζδ»¬", id: "3", src: "/user" },
  ];
  ngOnInit(): void {}
}
