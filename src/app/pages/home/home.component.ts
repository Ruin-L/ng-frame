/*
 * @Description: {{ByRuin}}
 * @Version: 2.0
 * @Author: Ruin 🍭
 * @Date: 2022-03-03 17:06:15
 * @LastEditors: 刘引
 * @LastEditTime: 2022-03-07 16:15:36
 */
import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
// 引入服务
import { StorageService } from "src/app/services/storage.service";
// 实例化类
// let storage = new StorageService();
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  @ViewChild("homeHead", { static: true }) homeHead: any;
  public result: any;
  // 依赖注入 语法糖写法 相当于在构造器中 实例化对象
  constructor(public storage: StorageService) {}
  ngOnInit(): void {}
  ngAfterViewInit(): void {}
  receiveSearchInput(e: any) {
    this.result = e;
    console.log("接收到的", this.result);
  }
}
