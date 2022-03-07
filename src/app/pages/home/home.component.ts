/*
 * @Description: {{ByRuin}}
 * @Version: 2.0
 * @Author: Ruin 🍭
 * @Date: 2022-03-03 17:06:15
 * @LastEditors: 刘引
 * @LastEditTime: 2022-03-07 14:53:10
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

  // 组件和指令初始化完成(dom渲染还没有完成)
  ngOnInit(): void {
    // console.log("触发");
  }
  // dom加载完成后的生命周期函数
  ngAfterViewInit(): void {
    this.setDom();
  }

  changeKeyword() {
    this.textContent = "改变keywords的值";
  }
  getContent() {
    console.log("触发");
  }
  getKeyword() {
    console.log(this.textContent);
  }
  setDom() {
    this.homeHead.testViewChild();
    // console.log(this.homeHead.nativeElement);
  }
}
