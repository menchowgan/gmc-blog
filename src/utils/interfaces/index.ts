interface ArticleSimpleInfoModel {
  id?: number
  imgUrl?: string
  title?: string
  content?: Date | string
  date?: Date,
  type?: string 
}

interface UserModel {
  id?: number
  nickname?: string
  gender?: string
  hobbies?: string
  fans?: number
  evaluate?: number
  brief?: string
  avatar?: string
  photos?: Array<PhotoModel>,
  articleSimplaeInfos?: Array<ArticleSimpleInfoModel>
}

interface PhotoModel {
  id: number
  url: string
}

export {
  ArticleSimpleInfoModel,
  UserModel,
  PhotoModel
}