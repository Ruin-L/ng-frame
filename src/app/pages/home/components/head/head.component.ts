/*
 * @Description: {{ByRuin}}
 * @Version: 2.0
 * @Author: Ruin 🍭
 * @Date: 2022-03-03 17:07:14
 * @LastEditors: 刘引
 * @LastEditTime: 2022-03-04 14:10:42
 */
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-head",
  templateUrl: "./head.component.html",
  styleUrls: ["./head.component.scss"],
})
export class HeadComponent implements OnInit {
  public newsList: Array<any> = [
    { title: "我是新闻1" },
    { title: "我是新闻2" },
    { title: "我是新闻3" },
  ];
  public flag: boolean = true;
  //1表示已经支付 2并且确认订单 3表示已经发货 4表示已经收货
  public orderStatus: number = 1;
  public red: string = "blue";
  constructor() {}

  ngOnInit(): void {}
}
