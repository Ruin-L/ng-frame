/*
 * @Description: {{ByRuin}}
 * @Version: 2.0
 * @Author: Ruin 🍭
 * @Date: 2022-03-04 10:45:56
 * @LastEditors: 刘引
 * @LastEditTime: 2022-03-08 17:32:59
 */
import { Component, OnInit } from "@angular/core";
import { AxiosService } from "src/app/services/axios.service";
import { RequestService } from "src/app/services/request.service";
@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"],
})
export class UserComponent implements OnInit {
  constructor(public httpApi: RequestService, public axiosApi: AxiosService) {}
  public list: any;
  ngOnInit(): void {}
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
        username: "王五",
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
