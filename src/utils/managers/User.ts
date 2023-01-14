import { request } from '@/utils/http';
import { callAsyncWithErrHandler, showError } from '../errHandling';
import { UserModel } from "../interfaces"

export default class UserManager {
  public static USER_ID = 12

  constructor() {
    
  }

  public async searchById(id: number): Promise<UserModel | null> {
    const res = await callAsyncWithErrHandler(request, ["SEARCH_USER_BRIEF", id], (e: Error) => {
      showError(e)
      return null
    })
    return res?.data
  }
  
  public async getSimpleInfo(): Promise<UserModel | null> {
    const res = await callAsyncWithErrHandler(request, ["GET_USER_SIMPLE_INFO", UserManager.USER_ID], (e: Error) => {
      showError(e)
      return null
    })
    return res?.data
  }

  /**
   * infoPost
   */
  public async infoPost(info: UserModel): Promise<boolean> {
    const res = await callAsyncWithErrHandler(request, ["POST_USER_INFO", {
      ...info,
    }], (e: Error) => {
      showError(e)
      return false
    })
    return res?.code === 0
  }

  /**
   * getInfo
   */
  public async getInfo(userid: number): Promise<UserModel | null> {
    const res = await callAsyncWithErrHandler(request, ["GET_INFO", userid], (e: Error) => {
      showError(e)
      return null
    })
    return res.code === 200 ? res?.data : null
  }
}