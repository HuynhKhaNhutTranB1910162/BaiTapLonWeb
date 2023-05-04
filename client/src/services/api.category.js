import axios from "axios";
const url = "/api/category";

export default class API {
  static async getAllCategory() {
    const res = await axios.get(url);
    return res.data;
  }
  static async getCategoryByID(id) {
    const res = await axios.get(`${url}/${id}`);
    return res.data;
  }
  static async addCategory(post) {
    // for (const value of post.values()) {
    //   console.log(value);
    // }
    const res = await axios.post(url, post);
    return res.data;
  }
  static async updateCategory(id, post) {
    const res = await axios.patch(`${url}/${id}`, post);
    return res.data;
  }
  static async deleteCategory(id) {
    const res = await axios.delete(`${url}/${id}`);
    return res.data;
  }
}
