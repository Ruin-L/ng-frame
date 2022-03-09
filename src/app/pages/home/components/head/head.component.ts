/*
 * @Description: {{ByRuin}}
 * @Version: 2.0
 * @Author: Ruin 🍭
 * @Date: 2022-03-03 17:07:14
 * @LastEditors: 刘引
 * @LastEditTime: 2022-03-07 17:09:00
 */
import { Component, OnInit } from "@angular/core";
import { StorageService } from "src/app/services/storage.service";
@Component({
  selector: "app-head",
  templateUrl: "./head.component.html",
  styleUrls: ["./head.component.scss"],
})
export class HeadComponent implements OnInit {
  constructor(public storage: StorageService) {}
  getSearchData(e: any) {
    // 发送事件数据
    // this.storage.inputData = e.target.value;
    localStorage.setItem("input", e.target.value);
    console.log("方法触发", e.target.value);
  }
  ngOnInit(): void {}
}
