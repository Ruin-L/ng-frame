/*
 * @Description: {{ByRuin}}
 * @Version: 2.0
 * @Author: Ruin 🍭
 * @Date: 2022-03-03 17:06:15
 * @LastEditors: 刘引
 * @LastEditTime: 2022-03-07 10:20:44
 */
import { Component, OnInit } from "@angular/core";
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
  public textContent: any;
  // 依赖注入 语法糖写法 相当于在构造器中 实例化对象
  constructor(public storage: StorageService) {
    // let res = storage.getTest();
    let key: string = "cat";
    let value: string = "hello";
    // 设置缓存
    storage.setStorage(key, value);
    // 获取缓存
    let result = storage.getStorage(key);
    // 删除缓存
    storage.removeStorage(key);
    console.log(result);
    // 清除所有缓存
    storage.clearStorage();
    // console.log(res);
  }

  ngOnInit(): void {}
  changeKeyword() {
    this.textContent = "改变keywords的值";
  }
  getKeyword() {
    console.log(this.textContent);
  }
}
