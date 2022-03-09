/*
 * @Description: {{ByRuin}}
 * @Version: 2.0
 * @Author: Ruin 🍭
 * @Date: 2022-03-03 17:06:15
 * @LastEditors: 刘引
 * @LastEditTime: 2022-03-09 16:52:44
 */
import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { RequestService } from "src/app/services/request.service";
// 引入服务
import { StorageService } from "src/app/services/storage.service";
import { ActivatedRoute, Router, NavigationExtras } from "@angular/router";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  @ViewChild("homeHead", { static: true }) homeHead: any;
  public result: any = "";
  public key: string = "123";
  constructor(
    public storage: StorageService,
    public request: RequestService,
    public route: ActivatedRoute,
    public routeFn: Router
  ) {}
  // init结尾的函数只会调用一次 checked结尾的函数会多次调用
  // 初始化组件和指令时调用(一般用于请求api)
  ngOnInit(): void {
    const res = this.request.getData();
    console.log(res);
    this.receiveRxjsData();
  }
  receiveRxjsData() {
    let res = this.request.getRxjsData();
    res.subscribe((data) => {
      console.log("通过rxjs获取的数据", data);
    });
    // setTimeout(() => {
    //   // 取消订阅
    //   returnRes.unsubscribe();
    // }, 1000);
    // setInterval(() => {
    //   console.log("延迟期触发");
    // }, 1000);
  }
  navigateToUser() {
    let queryParams: NavigationExtras = {
      queryParams: { ad: 1234 },
    };
    this.routeFn.navigate(["/user"], queryParams);
  }
}
