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
  photos?: Array<PhotoModel>
  audios?: Array<MusicModel>
  articleSimplaeInfos?: Array<ArticleSimpleInfoModel>
}

interface PhotoModel {
  id: number
  url: string
}

interface MusicModel {
  id?: number
  userId?: string
  avatar?: string
  audioUrl?: string
  title?: string
  artist?: string
  evalution?: string
  paused?: boolean
}

export {
  ArticleSimpleInfoModel,
  UserModel,
  PhotoModel,
  MusicModel
}