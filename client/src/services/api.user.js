import axios from "axios";
const url = "/api/user";

export default class API {
  static async getAllUser() {
    const res = await axios.get(url);
    return res.data;
  }
  static async getLogin(email, password) {
    // console.log(password);

    const res = await axios.get(`${url}?email=${email}&password=${password}`);
    // console.log(`${url}?email=${email}&password=${password}`);
    // console.log(res);

    return res;
  }
  static async getUserByID(id) {
    const res = await axios.get(`${url}/${id}`);
    return res.data;
  }
  // static async addProduct(post) {
  //   const res = await axios.post(url, post);
  //   return res.data;
  // }
  static async addUser(user) {
    // for (const value of user.values()) {
    //   console.log(value);
    // }
    const res = await axios.post(url, user);

    // const res = await axios.post(url, post);
    return res.data;
  }
  static async updateUser(id, post) {
    const res = await axios.patch(`${url}/${id}`, post);
    return res.data;
  }
  static async deleteUser(id) {
    const res = await axios.delete(`${url}/${id}`);
    return res.data;
  }
}
