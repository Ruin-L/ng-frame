/*
 * @Description: {{ByRuin}}
 * @Version: 2.0
 * @Author: Ruin 🍭
 * @Date: 2022-03-08 17:23:05
 * @LastEditors: 刘引
 * @LastEditTime: 2022-03-09 11:37:17
 */
import { Injectable } from "@angular/core";
import axios from "axios";
@Injectable({
  providedIn: "root",
})
export class AxiosService {
  constructor() {}
  async getApiData() {
    const res = await axios.get("http://localhost:3000/api/articles");
    console.log(res.data);
    return new Promise<any>((resolve, reject) => {
      resolve(res.data);
    });
  }
}
