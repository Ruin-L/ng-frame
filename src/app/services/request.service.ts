/*
 * @Description: {{ByRuin}}
 * @Version: 2.0
 * @Author: Ruin 🍭
 * @Date: 2022-03-08 10:51:22
 * @LastEditors: 刘引
 * @LastEditTime: 2022-03-08 17:06:01
 */
import { Injectable } from "@angular/core";
// 引入rxjs
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
@Injectable({
  providedIn: "root",
})
export class RequestService {
  constructor(public http: HttpClient) {}
  // public result: any;
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

  //执行get请求
  getRequest() {
    return new Promise((resolve, reject) => {
      let api = "http://localhost:3000/api/articles";
      this.http.get(api).subscribe((response: any) => {
        resolve(response);
        reject("请求失败");
      });
    });
  }

  // 执行post请求
  postRequest(userInfo: Object) {
    return new Promise((resolve, reject) => {
      let api = "http://localhost:3000/api/users";
      const httpOptions = {
        headers: new HttpHeaders({ "Content-Type": "application/json" }),
      };
      this.http.post(api, userInfo, httpOptions).subscribe((response) => {
        resolve(response);
      });
    });
  }
}
