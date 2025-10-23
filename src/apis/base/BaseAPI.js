import api from '@/apis/config/APIConfig.js'

export default class BaseAPI {
  constructor() {
    this.controller = null
  }
  /**
   * Phương thức lấy tất cả dữ liệu
   */
  getAll() {
    console.log(this.controller)

    return api.get(`${this.controller}`)
  }
  /**
   * Hàm lấy dữ liệu phân trang
   * @param {*} payload
   */
  paging(payload) {
    return api.post(`${this.controller}/paging`, payload)
  }
  /**
   * Hàm cập nhật dữ liệu
   * @param {*} id
   * @param {*} body
   */
  update(id, body) {
    return api.update(`${this.controller}/update/${id}`, body)
  }
  /**
   * Hàm xóa bản ghi
   * @param {*} id
   */
  delete(id) {
    return api.delete(`${this.controller}/delete/${id}`)
  }
}
