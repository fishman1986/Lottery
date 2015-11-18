;
(function (win, $, doc) {
    win.lottery = win.lottery || {};
    var lotteryData = {
        PrizeLevel: [
            {
                name: "特等奖",
                total: 1,
                award: "红包10000"
            },
            {
                name: "一等奖",
                total: 3,
                award: "红包5000"
            },
            {
                name: "二等奖",
                total: 5,
                award: "红包2000"
            },
            {
                name: "三等奖",
                total: 8,
                award: "红包1000"
            },
            {
                name: "四等奖",
                total: 10,
                award: "红包500"
            }
        ],
        AttendanceList: [
            {
                name: "Albert1 Luo",
                photo: "1 (1).jpg"//name.png by default
            }, {
                name: "Albert2 Luo",
                photo: "1 (2).jpg"
            }, {
                name: "Albert3 Luo",
                photo: "1 (3).jpg"
            }, {
                name: "Albert4 Luo",
                photo: "1 (4).jpg"
            }, {
                name: "Albert5 Luo",
                photo: "1 (5).jpg"
            }, {
                name: "Albert6 Luo",
                photo: "1 (6).jpg"
            }, {
                name: "Albert7 Luo",
                photo: "1 (7).jpg"
            }, {
                name: "Albert8 Luo",
                photo: "1 (8).jpg"
            }, {
                name: "Albert9 Luo",
                photo: "1 (9).jpg"
            }, {
                name: "Albert10 Luo",
                photo: "1 (10).jpg"
            }, {
                name: "Albert11 Luo",
                photo: "1 (11).jpg"
            }, {
                name: "Albert12 Luo",
                photo: "1 (12).jpg"
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