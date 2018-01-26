;
(function (win, $, doc) {
    win.lottery = win.lottery || {};
    var lotteryData = {
        PrizeLevel: [
          {
              name: "特等奖 / Top Prize",
              total: 1,
              award: ""
          },
            {
                name: "一等奖 / First Prize",
                total: 2,
                award: ""
            },
            {
                name: "二等奖 / Second Prize",
                total: 4,
                award: ""
            },
            {
                name: "三等奖 / Third Prize",
                total: 4,
                award: ""
            },
            {
                name: "四等奖 / Forth Prize",
                total: 8,
                award: ""
            }
        ],
        AttendanceList: [
          {
      name: "Aaron Liu",
      photo: "Aaron Liu.jpg"
  },
  {
      name: "Abby Tan",
      photo: "Abby Tan.jpg"
  },
  {
      name: "Albert Luo",
      photo: "Albert Luo.jpg"
  },
  {
      name: "Alice Yang",
      photo: "Alice Yang.jpg"
  },
  {
      name: "Allen Peng",
      photo: "Allen Peng.jpg"
  },
  {
      name: "Andy Kong",
      photo: "Andy Kong.jpg"
  },
  {
      name: "Annis Zhang",
      photo: "Annis Zhang.jpg"
  },
  {
      name: "Anny Zhang",
      photo: "Anny Zhang.jpg"
  },
  {
      name: "Anson Xue",
      photo: "Anson Xue.jpg"
  },
  {
      name: "Armstrong Liu",
      photo: "Armstrong Liu.jpg"
  },
  {
      name: "Beini Jia",
      photo: "Beini Jia.jpg"
  },
  {
      name: "Bill Chi",
      photo: "Bill Chi.jpg"
  },
  {
      name: "Catherine Zhang",
      photo: "Catherine Zhang.jpg"
  },
  {
      name: "Cathy Kuang",
      photo: "Cathy Kuang.jpg"
  },
  {
      name: "Cherry Gao",
      photo: "Cherry Gao.jpg"
  },
  {
      name: "Cindy Li",
      photo: "Cindy Li.jpg"
  },
  {
      name: "Claire Xia",
      photo: "Claire Xia.jpg"
  },
  {
      name: "Cynthia Gao",
      photo: "Cynthia Gao.jpg"
  },
  {
      name: "Edward Rui",
      photo: "Edward Rui.jpg"
  },
  {
      name: "Ellie Pei",
      photo: "Ellie Pei.jpg"
  },
  {
      name: "Emily Pi",
      photo: "Emily Pi.jpg"
  },
  {
      name: "Emma Wang",
      photo: "Emma Wang.jpg"
  },
  {
      name: "Ethan An",
      photo: "Ethan An.jpg"
  },
  {
      name: "Frank Yang",
      photo: "Frank Yang.jpg"
  },
  {
      name: "Gim Li",
      photo: "Gim Li.jpg"
  },
  {
      name: "Gloria Deng",
      photo: "Gloria Deng.jpg"
  },
  {
      name: "Hubert Li",
      photo: "Hubert Li.jpg"
  },
  {
      name: "Hunter Xu",
      photo: "Hunter Xu.jpg"
  },
  {
      name: "Jane Zhao",
      photo: "Jane Zhao.jpg"
  },
  {
      name: "Jason Wang",
      photo: "Jason Wang.jpg"
  },
  {
      name: "Jennifer You",
      photo: "Jennifer You.jpg"
  },
  {
      name: "Jon Hou",
      photo: "Jon Hou.jpg"
  },
  {
      name: "Joseph Liu",
      photo: "Joseph Liu.jpg"
  },
  {
      name: "Joy Wang",
      photo: "Joy Wang.jpg"
  },
  {
      name: "Juping Ma",
      photo: "Juping Ma.jpg"
  },
  {
      name: "Kace Kang",
      photo: "Kace Kang.jpg"
  },
  {
      name: "Lemon Tu",
      photo: "Lemon Tu.jpg"
  },
  {
      name: "Limei Li",
      photo: "Limei Li.jpg"
  },
  {
      name: "Lionel Dong",
      photo: "Lionel Dong.jpg"
  },
  {
      name: "Lisa Jing",
      photo: "Lisa Jing.jpg"
  },
  {
      name: "Louis Liu",
      photo: "Louis Liu.jpg"
  },
  {
      name: "Mandy Zhang",
      photo: "Mandy Zhang.jpg"
  },
  {
      name: "Maple Shao",
      photo: "Maple Shao.jpg"
  },
  {
      name: "Marco Liu",
      photo: "Marco Liu.jpg"
  },
  {
      name: "Mia Qiao",
      photo: "Mia Qiao.jpg"
  },
  {
      name: "Michael He",
      photo: "Michael He.jpg"
  },
  {
      name: "Ming Li",
      photo: "Ming Li.jpg"
  },
  {
      name: "Mingjie Li",
      photo: "Mingjie Li.jpg"
  },
  {
      name: "Misher Yang",
      photo: "Misher Yang.jpg"
  },
  {
      name: "Nacy Gao",
      photo: "Nacy Gao.jpg"
  },
  {
      name: "Nakita Sun",
      photo: "Nakita Sun.jpg"
  },
  {
      name: "Nate Xu",
      photo: "Nate Xu.jpg"
  },
  {
      name: "Rebecca Zhu",
      photo: "Rebecca Zhu.jpg"
  },
  {
      name: "Ryan Tong",
      photo: "Ryan Tong.jpg"
  },
  {
      name: "Samson Peng",
      photo: "Samson Peng.jpg"
  },
  {
      name: "Sharon Xu",
      photo: "Sharon Xu.jpg"
  },
  {
      name: "Simon Jia",
      photo: "Simon Jia.jpg"
  },
  {
      name: "Sivia Zhang",
      photo: "Sivia Zhang.jpg"
  },
  {
      name: "Stanly Xiao",
      photo: "Stanly Xiao.jpg"
  },
  {
      name: "Susan Wu",
      photo: "Susan Wu.jpg"
  },
  {
      name: "Ted Wu",
      photo: "Ted Wu.jpg"
  },
  {
      name: "Tom Liu",
      photo: "Tom Liu.jpg"
  },
  {
      name: "Tracy Zhao",
      photo: "Tracy Zhao.jpg"
  },
  {
      name: "Tyler Miao",
      photo: "Tyler Miao.jpg"
  },
  {
      name: "Vivi Zhang",
      photo: "Vivi Zhang.jpg"
  },
  {
      name: "Wanli Zhao",
      photo: "Wanli Zhao.jpg"
  },
  {
      name: "Wendy Zhang",
      photo: "Wendy Zhang.jpg"
  },
  {
      name: "Yao Wang",
      photo: "Yao Wang.jpg"
  },
  {
      name: "Yongfei Hu",
      photo: "Yongfei Hu.jpg"
  },
  {
      name: "Zoe Liu",
      photo: "Zoe Liu.jpg"
  }
        ]
    };
    var Storage = function () {
        var keyName = 'LOTTERY.STORE', ioInstance = win.localStorage;
        /**
         * save lottery result
         * @param obj
         * [{
         *  name:"",//PrizeLevel name
         *  awardWinners:[{name,photo},...]
         * }]
         */
        this.save = function (obj) {
            ioInstance.setItem(keyName, JSON.stringify(obj));
        };
        this.retrieve = function () {
            var stored = ioInstance.getItem(keyName);
            return stored && JSON.parse(stored);
        };
        this.load = function (loadCallback) {
            loadCallback(lotteryData);
            //$.getJSON('resources/data.json', loadCallback);
        };
        this.clear = function () {
            ioInstance.removeItem(keyName);
        }
    };
    win.lottery.storage = new Storage();
})(window, jQuery, document);
