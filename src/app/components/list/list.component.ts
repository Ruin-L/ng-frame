/*
 * @Description: {{ByRuin}}
 * @Version: 2.0
 * @Author: Ruin 🍭
 * @Date: 2022-03-04 10:47:32
 * @LastEditors: 刘引
 * @LastEditTime: 2022-03-04 14:39:52
 */
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
})
export class ListComponent implements OnInit {
  public today: any = new Date();

  constructor() {
    console.log(this.today);
  }

  ngOnInit(): void {}
}
