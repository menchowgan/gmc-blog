interface ArticleSimpleInfoModel {
  id?: number
  imgUrl?: string
  title?: string
  content?: Date | string
}

interface UserModel {
  id?: number
  nickname?: string
  gender?: string
  hobbies?: Array<string>
  fans?: number
  evaluate?: number
  brief?: string
  avatar?: string
  photos?: Array<string>
}

export {
  ArticleSimpleInfoModel,
  UserModel
}