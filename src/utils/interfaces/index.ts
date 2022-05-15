interface ArticleSimpleInfoModel {
  id?: number
  userId?: number
  imgUrl?: string
  title?: string
  content?: string
  date?: string,
  brief?: string 
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
  articleSimpleInfos?: Array<ArticleSimpleInfoModel>
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