/*
 * @Description: {{ByRuin}}
 * @Version: 2.0
 * @Author: Ruin 🍭
 * @Date: 2022-03-07 09:39:15
 * @LastEditors: 刘引
 * @LastEditTime: 2022-03-07 10:21:29
 */
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class StorageService {
  constructor() {}
  getTest() {
    return "this is service";
  }

  // 添加缓存
  setStorage(key: any, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  // 读取缓存
  getStorage(key: any): any {
    return localStorage.getItem(key);
  }
  // 删除指定缓存
  removeStorage(key: any): any {
    localStorage.removeItem(key);
  }
  // 删除所有缓存
  clearStorage() {
    localStorage.clear();
  }
}
