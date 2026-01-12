const User = require('../model/User')

class UserController {
  // 增加一条数据
  static async add (obj) {
    const res = await User.create(obj)
    if (!res) {
      throw new Error('添加失败')
    }
    return res
  }
  static async find (id) {
    let data = await User.findByPk(id)
    if (!data) {
      throw new Faild('查找失败')
    }
    return data
  }
  // 修改
  static async update (obj) {
    const res = await User.update(obj, {
      where: {
        id: obj.id
      }
    })
    if (!res) {
      throw new Error('修改失败')
    }
    return res
  }
}

module.exports = UserController