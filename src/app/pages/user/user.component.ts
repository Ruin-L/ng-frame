/*
 * @Description: {{ByRuin}}
 * @Version: 2.0
 * @Author: Ruin ð­
 * @Date: 2022-03-04 10:45:56
 * @LastEditors: åå¼
 * @LastEditTime: 2022-03-09 14:50:10
 */
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AxiosService } from "src/app/services/axios.service";
import { RequestService } from "src/app/services/request.service";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"],
})
export class UserComponent implements OnInit {
  constructor(
    public httpApi: RequestService,
    public axiosApi: AxiosService,
    public route: ActivatedRoute
  ) {}
  public list: any;
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      console.log("getæ¥æ¶å°çåæ°", params);
    });
    // this.route.params.subscribe((params) => {
    //   console.log("å¨æè·¯ç±è·¯å¾", params);
    // });
  }
  // async getApiData() {
  //   try {
  //     let res: any = await this.httpApi.getRequest();
  //     this.list = res.articles;
  //     console.log(this.list);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }
  async getApiData() {
    try {
      let res: any = await this.axiosApi.getApiData();
      this.list = res.articles;
      console.log(this.list);
    } catch (err) {
      console.log(err);
    }
  }

  async postUserData() {
    let userInfo = {
      user: {
        email: "2333@qq.com",
        username: "çäº",
        password: "31415926",
      },
    };
    JSON.stringify(userInfo);
    try {
      let res = await this.httpApi.postRequest(userInfo);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }
}
