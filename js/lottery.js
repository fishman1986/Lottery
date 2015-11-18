;
(function (win) {
  win.lottery = win.lottery || {};
  var ioInstance = win.lottery.storage,
      resPath = "resources/photos/",
      Lottery = {
        _currentLevel: null,
        _currentPool: [],//attendances pool
        _currentResult: [],
        _prizeLevel: null,
        draw: {
          _frameContainer: null,
          main: null,
          state: 0, //0 or 1, 1 means drawing
          startOrStop: function () {
            var me = this;
            if (!me.main._currentPool || !me.main._currentPool.length) {
              return;
            }
            me.state = Math.abs(me.state * 1 - 1);
            if (me.state === 1) {
              me.start(me.main._currentPool);
            } else {
              //stop, append winner to result div.
              win.setTimeout(function () {
                me.main.appendAwardWinner(me.currentAttendance);
                me.main.saveResult();
              }, 20);
            }
          },
          start: function (attendanceList) {
            var me = this,
                nextFrame = function () {
                  var nextIndex = Math.floor(Math.random() * attendanceList.length),
                      attendance = me.currentAttendance = attendanceList[nextIndex];
                  me._frameContainer.empty();
                  me._frameContainer.append($('.headimage[alt="' + attendance.name + '"]').clone());
                  me._frameContainer.append("<span class='attendance-name'>" + attendance.name + "</span>");
                  if (me.state === 1) {
                    win.requestAnimationFrame(nextFrame);
                  }
                };
            win.requestAnimationFrame(nextFrame);
          },
          init: function (frameContainer, app) {
            this._frameContainer = frameContainer;
            this.main = app;
          }
        },
        init: function (draw, result, frameContainer) {
          var me = this;
          ioInstance.load(function (data) {
            me.renderDraw(draw, data.AttendanceList);
            me.renderResult(result, data.PrizeLevel);
            me._currentPool = data.AttendanceList;
            me._prizeLevel = data.PrizeLevel;
            me.loadLastResult();
            me.draw.init(frameContainer, me);
          });
        },
        setCurrentLevel: function (container) {
          this._currentLevel = container;
        },
        renderDraw: function (container, data) {
          //render totalCount
          var totalCount = [
            '<span id="totalAttendance">',
            '{0} Attendances',
            '</span>'
          ], preLoadContainer, htmlOut = [], tmpHtml;
          //preLoad all images
          preLoadContainer = $("<div class='preload-container'></div>");
          for (var i = 0; i < data.length; i++) {
            tmpHtml = [
              "<div class='preload-attendance'>",
              "<img src='" + resPath + data[i].photo + "' class='headimage' alt='" + data[i].name + "'/>",
              "<span class='preload-attendance-name'>" + data[i].name +
              "</span>",
              "</div>"
            ];
            htmlOut.push(tmpHtml.join(''));
          }
          preLoadContainer.html(htmlOut.join(''));
          container.append(totalCount.join('').format(data.length));
          container.append(preLoadContainer);
        },
        renderResult: function (container, data) {
          var prizeLevelTemplate = function (index, item) {
            var tmpl = [
              '<div class="result-container result-container__level__' + index + '" title="' + item.name + '">',
              '<div class="result-head">',
              '<span class="result-head-name">' + item.name + '</span>',
              '<span class="result-head-desc">' + item.award + '(<span class="result-head-desc-counter">0</span>/<span class="result-head-desc-total">' + item.total + '</span>)</span>',
              '</div>',
              '</div>'
            ];
            return tmpl.join('');
          }, htmlOut = '';
          for (var i = 0; i < data.length; i++) {
            htmlOut += prizeLevelTemplate(i, data[i]);
          }
          container.prepend(htmlOut);
        },
        appendAwardWinner: function (attendances, container) {
          container = container || this._currentLevel;
          attendances = $.makeArray(attendances);
          var awardItemTemplate = function (attendance) {
            var tmpl = [
              '<div class="result-item">',
              '<img class="result-item-headimg" src="' + resPath + attendance.photo + '" alt="head image"/>',
              '<span class="result-item-name" >' + attendance.name + '</span>',
              '</div>'
            ];
            return tmpl.join('');
          }, htmlOut = '';
          for (var i = 0; i < attendances.length; i++) {
            htmlOut += awardItemTemplate(attendances[i]);
            var preloadItem = $('.preload-attendance:contains("'+attendances[i].name+'")');
            preloadItem.addClass('winner').append("<span class='preload-attendance-winner-desc'>Winner!</span>");
          }
          container.append(htmlOut);
          this.removeWinnerFromPool(attendances);
          this.saveToCurrentResult(attendances, container);
          var count = parseInt(container.find('.result-head-desc-counter').html());
          container.find('.result-head-desc-counter').html(count + attendances.length);
        },
        removeWinnerFromPool: function (attendances) {
          attendances = $.makeArray(attendances);
          for (var i = 0; i < attendances.length; i++) {
            var toRemove = attendances[i];
            for (var j = 0; j < this._currentPool.length; j++) {
              if (this._currentPool[j].name === toRemove.name) {
                //remove this;
                this._currentPool.splice(j, 1);
                break;
              }
            }
          }
        },
        loadLastResult: function () {
          var result = ioInstance.retrieve();
          if (!result) {
            return;
          }
          for (var i = 0; i < result.length; i++) {
            var currentLevel = result[i]['name'],
                winners = result[i]['awardWinners'],
                container = $('.result-container:contains("' + currentLevel + '")');
            this.appendAwardWinner(winners, container);
          }
        },
        saveToCurrentResult: function (attendances, container) {
          attendances = $.makeArray(attendances);
          var prizeName = container.attr('title'),
              resultObj;
          for (var j = 0; j < this._currentResult.length; j++) {
            if (this._currentResult[j].name === prizeName) {
              resultObj = this._currentResult[j];
              break;
            }
          }
          if (!resultObj) {
            resultObj = {name: prizeName, awardWinners: []};
            this._currentResult.push(resultObj);
          }
          resultObj.awardWinners = resultObj.awardWinners.concat(attendances);
        },
        saveResult: function () {
          ioInstance.save(this._currentResult);
        },
        isCurrentLevelCanGoOn: function () {
          var container = this._currentLevel;
          var count = parseInt(container.find('.result-head-desc-counter').html()),
              total = parseInt(container.find('.result-head-desc-total').html());
          if (count < total) {
            return true;
          }
          return false;
        }

      }
  win.lottery = $.extend(Lottery, win.lottery);

})(window, document);