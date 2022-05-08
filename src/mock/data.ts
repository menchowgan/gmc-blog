interface UserModel {
  id?: number
  nickname?: string
  gender?: string
  hobbies?: Array<string>
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

interface ArticleSimpleInfoModel {
  id?: number
  imgUrl?: string
  title?: string
  content?: Date | string
  date?: Date
}

const user: UserModel = {
  id: 0,
  nickname: "Menchow GAN",
  avatar: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
  fans: 20,
  gender: "男",
  photos: [
    {
      id: 0,
      url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.momi8.com%2Fimages%2Fblog_images%2F201207%2Fwww.momi8.com_201207141731411081004.jpg&refer=http%3A%2F%2Fwww.momi8.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1653923499&t=c6dba16b27ed994fc5250cbf62ec6417"
    },
    {
      id: 1,
      url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimages.cnblogs.com%2Fcnblogs_com%2Fchenpi%2F809071%2Fo_bg.jpg&refer=http%3A%2F%2Fimages.cnblogs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1653923499&t=7cec63749b30c1e95f355c1257d7551a",
    },
    {
      id: 2,
      url: "https://img2.baidu.com/it/u=70814297,2782616976&fm=253&fmt=auto&app=138&f=JPEG?w=490&h=513",
    },
    {
      id: 3,
      url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimages2015.cnblogs.com%2Fblog%2F1118135%2F201707%2F1118135-20170719095351052-380810440.jpg&refer=http%3A%2F%2Fimages2015.cnblogs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1653923499&t=27b05c424f2cad2a9adb6f99eb69e3bb"
    },
    {
      id: 4,
      url: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
    }
  ],
  articleSimplaeInfos: [
    {
      id: 2,
      imgUrl:
        "https://img0.baidu.com/it/u=403007778,499203326&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
      title: "最唯美的散文精选篇一：人生路上，蝶梦飞飞",
      content:
        "人生如一路风景线，风景有你的看，也有风景在对你看。一晃几十年，常常叹!岁月的车厢，装的全是别人的颜。烟雨云散，只有自己的遗憾在叹。当我们在感叹时，抱怨、抱怨。抱怨，机遇全是别人的缘;人生如一路风景线，风景有你的看，也有风景在对你看。一晃几十年，常常叹!岁月的车厢，装的全是别人的颜。烟雨云散，只有自己的遗憾在叹。",
    },
    {
      id: 3,
      imgUrl:
        "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg3.doubanio.com%2Fview%2Fnote%2Fl%2Fpublic%2Fp55297062.jpg&refer=http%3A%2F%2Fimg3.doubanio.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1653965733&t=1292d860c795eaa03b05c8ceafbd1c36",
      title: "人生如蝶。花盛开，便认真去爱惜",
      content:
        "千万不要否认大家曾经拥有的情感，只需记牢难忘的回忆就行，那样才不容易感觉自身以前投入的情感不值。浮沉流年，空落了是多少幽怨爱恨。循环变化，寻看不到曾有的沧海桑田，沐人间烟火，又怎么会不染岁月风尘，虽然踏过的仅仅半生烟火。",
    },
    {
      id: 1,
      imgUrl:
        "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
      title: "Yummy hamburger1",
      content: new Date(),
    },
    {
      id: 2,
      imgUrl:
        "https://img0.baidu.com/it/u=403007778,499203326&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
      title: "最唯美的散文精选篇一：人生路上，蝶梦飞飞",
      content:
        "人生如一路风景线，风景有你的看，也有风景在对你看。一晃几十年，常常叹!岁月的车厢，装的全是别人的颜。烟雨云散，只有自己的遗憾在叹。当我们在感叹时，抱怨、抱怨。抱怨，机遇全是别人的缘;人生如一路风景线，风景有你的看，也有风景在对你看。一晃几十年，常常叹!岁月的车厢，装的全是别人的颜。烟雨云散，只有自己的遗憾在叹。",
    },
    {
      id: 3,
      imgUrl:
        "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg3.doubanio.com%2Fview%2Fnote%2Fl%2Fpublic%2Fp55297062.jpg&refer=http%3A%2F%2Fimg3.doubanio.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1653965733&t=1292d860c795eaa03b05c8ceafbd1c36",
      title: "人生如蝶。花盛开，便认真去爱惜",
      content:
        "千万不要否认大家曾经拥有的情感，只需记牢难忘的回忆就行，那样才不容易感觉自身以前投入的情感不值。浮沉流年，空落了是多少幽怨爱恨。循环变化，寻看不到曾有的沧海桑田，沐人间烟火，又怎么会不染岁月风尘，虽然踏过的仅仅半生烟火。",
    },
    {
      id: 1,
      imgUrl:
        "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
      title: "Yummy hamburger1",
      content: new Date(),
    },
    {
      id: 2,
      imgUrl:
        "https://img0.baidu.com/it/u=403007778,499203326&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
      title: "最唯美的散文精选篇一：人生路上，蝶梦飞飞",
      content:
        "人生如一路风景线，风景有你的看，也有风景在对你看。一晃几十年，常常叹!岁月的车厢，装的全是别人的颜。烟雨云散，只有自己的遗憾在叹。当我们在感叹时，抱怨、抱怨。抱怨，机遇全是别人的缘;人生如一路风景线，风景有你的看，也有风景在对你看。一晃几十年，常常叹!岁月的车厢，装的全是别人的颜。烟雨云散，只有自己的遗憾在叹。",
    },
    {
      id: 3,
      imgUrl:
        "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg3.doubanio.com%2Fview%2Fnote%2Fl%2Fpublic%2Fp55297062.jpg&refer=http%3A%2F%2Fimg3.doubanio.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1653965733&t=1292d860c795eaa03b05c8ceafbd1c36",
      title: "人生如蝶。花盛开，便认真去爱惜",
      content:
        "千万不要否认大家曾经拥有的情感，只需记牢难忘的回忆就行，那样才不容易感觉自身以前投入的情感不值。浮沉流年，空落了是多少幽怨爱恨。循环变化，寻看不到曾有的沧海桑田，沐人间烟火，又怎么会不染岁月风尘，虽然踏过的仅仅半生烟火。",
    },
    {
      id: 2,
      imgUrl:
        "https://img0.baidu.com/it/u=403007778,499203326&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
      title: "最唯美的散文精选篇一：人生路上，蝶梦飞飞",
      content:
        "人生如一路风景线，风景有你的看，也有风景在对你看。一晃几十年，常常叹!岁月的车厢，装的全是别人的颜。烟雨云散，只有自己的遗憾在叹。当我们在感叹时，抱怨、抱怨。抱怨，机遇全是别人的缘;人生如一路风景线，风景有你的看，也有风景在对你看。一晃几十年，常常叹!岁月的车厢，装的全是别人的颜。烟雨云散，只有自己的遗憾在叹。",
    },
  ]
}


// const user = reactive<UserModel>({
//   id: 0,
//   nickname: "Menchow Gan",
//   gender: "男",
//   hobbies: "音乐,旅行,侦探小说",
//   fans: 5,
//   evaluate: 5,
//   brief:
//     "呃我分身乏术的卡夫卡呃我分身乏术的卡夫卡呃我分身乏术的卡夫卡呃我分身乏术的卡夫卡呃我分身乏术的卡夫卡呃我分身乏术的卡夫卡呃我分身乏术的卡夫卡呃我分身乏术的卡夫卡呃我分身乏术的卡夫卡呃我分身乏术的卡夫卡呃我分身乏术的卡夫卡呃我分身乏术的卡夫卡呃我分身乏术的卡夫卡呃我分身乏术的卡夫卡呃我分身乏术的卡夫卡呃我分身乏术的卡夫卡呃我分身乏术的卡夫卡呃我分身乏术的卡夫卡呃我分身乏术的卡夫卡呃我分呃我分身乏术的卡夫卡呃我分身乏术的卡夫卡呃我分身乏术的卡夫卡呃我分身乏术的卡夫卡呃我分身乏术的卡夫卡呃我分身乏术的卡夫卡呃我分身乏术的卡夫卡呃我分身乏术的卡夫卡呃我分身乏术的卡夫卡呃我分身乏术的卡夫卡呃我分身乏术的卡夫卡呃我分身乏术的卡夫卡呃我分身乏术的卡夫卡呃我分身乏术的卡夫卡呃我分身乏术的卡夫卡呃我分身乏术的卡夫卡呃我分身乏术的卡夫卡呃我分身乏术的卡夫卡呃我分身乏术的卡夫卡呃我分",
//   avatar:
//     "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
// });

export {
  user,
}