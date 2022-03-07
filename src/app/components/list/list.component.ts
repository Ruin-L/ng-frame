/*
 * @Description: {{ByRuin}}
 * @Version: 2.0
 * @Author: Ruin 🍭
 * @Date: 2022-03-04 10:47:32
 * @LastEditors: 刘引
 * @LastEditTime: 2022-03-07 15:13:23
 */
import { Component, OnInit } from "@angular/core";
import { StorageService } from "src/app/services/storage.service";
@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
})
export class ListComponent implements OnInit {
  public today: any = new Date();

  constructor(public storage: StorageService) {
    console.log(this.today);
  }
  changeMsg() {
    this.storage.msg = "我是改变后的值";
  }

  ngOnInit(): void {}
}
