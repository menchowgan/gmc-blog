interface ConfigModel {
  [key: string]: {
    url: string,
    method: string
  }
}

const CONFIG_METHODS: ConfigModel = {
  "GET_USER_SIMPLE_INFO": {
    url: "/user/get-user-simple-info",
    method: "get"
  },
  "SEARCH_USER_BRIEF": {
    url: "/user/search-user-brief",
    method: "get"
  },
  "HELLO": {
    url: "/hello",
    method: "post"
  },
  "POST_USER_INFO": {
    url: "/user/person-info-post",
    method: "post"
  },
  "AVATAR_UPLOAD": {
    url: "/photo/avatar/upload",
    method: "post"
  },
  "PHOTO_UPLOAD": {
    url: "/photo/user/photos/upload",
    method: "post"
  },
  "DELETE_UPLOAD": {
    url: "/photo/user/photos/delete",
    method: "delete"
  },
  "MUSIC_UPLOAD": {
    url: "/music/upload",
    method: "post"
  },
  "MUSIC_COVER_UPLOAD": {
    url: "/music/cover/upload",
    method: "post"
  },
  "MUSIC_USER_UPLOAD": {
    url: "/music/user/upload",
    method: "post"
  },
}

export default CONFIG_METHODS;