/*
 * @Description: {{ByRuin}}
 * @Version: 2.0
 * @Author: Ruin 🍭
 * @Date: 2022-03-03 17:07:14
 * @LastEditors: 刘引
 * @LastEditTime: 2022-03-07 16:15:13
 */
import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-head",
  templateUrl: "./head.component.html",
  styleUrls: ["./head.component.scss"],
})
export class HeadComponent implements OnInit {
  // 实例化事件广播
  @Output() private outerInput = new EventEmitter();
  constructor() {}
  ngOnInit(): void {}
  getSearchData(e: any) {
    // 发送事件数据
    this.outerInput.emit("12341234");
    console.log("方法触发", e.target.value);
  }
}
