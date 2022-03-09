/*
 * @Description: {{ByRuin}}
 * @Version: 2.0
 * @Author: Ruin 🍭
 * @Date: 2022-03-08 10:51:22
 * @LastEditors: 刘引
 * @LastEditTime: 2022-03-08 14:52:32
 */
import { Injectable } from "@angular/core";
// 引入rxjs
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root",
})
export class RequestService {
  constructor() {}
  // 同步方法
  getData() {
    console.log("%c获取需要的数据", "color:pink");
    return "1234";
  }
  // 使用rxjs
  getRxjsData() {
    let count = 0;
    return new Observable((observer) => {
      setTimeout(() => {
        // setInterval(() => {
        //   count++;
        // }, 1000);
        observer.next(count);
        // let username = "张三";

        // observer.error("错误");
      }, 3000);
    });
  }
  // 过一秒以后撤回刚才的操作
}
