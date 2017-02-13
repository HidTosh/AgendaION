angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope) {

'use strict';
    $scope.changeMode = function (mode) {
        $scope.mode = mode;
    };

    $scope.onDateSelected = function (selectedDate) {
    //$scope.items = getItems();
    var name = prompt("Planifier un évenement : ");
        if (name) {
          var postData = {
            "name": name
          };
          $http.post(url, postData).success(function(data) {
            $scope.items = getItems();
          });
        }
    /*function getItems() {
      var items = [];
      $http.get(url).success(function(data) {
        angular.forEach(data, function(value, key) {
          var name = {name: value.name};
            items.push(name);
        });
      });
      return items;
    }*/

//var d = new Date(event.timeStamp * 100000000);
/*var date = new Date(event.timeStamp * 31536000);
var month = date.getMonth();
*/        console.log(event.timeStamp);
          console.log(event.srcElement.innerText);
    };

    $scope.today = function () {
        $scope.currentDate = new Date();
    };

    $scope.isToday = function () {
        var today = new Date(),
            currentCalendarDate = new Date($scope.currentDate);

        today.setHours(0, 0, 0, 0);
        currentCalendarDate.setHours(0, 0, 0, 0);
        return today.getTime() === currentCalendarDate.getTime();
    };

    $scope.loadEvents = function () {
        $scope.eventSource = createRandomEvents();
    };

    $scope.onEventSelected = function (event) {
        $scope.event = event;
    };

    $scope.loadEvents = function () {
        $scope.eventSource = createRandomEvents();
    };



    function createRandomEvents() {
        var events = [];
        for (var i = 0; i < 50; i += 1) {
            var date = new Date();
            var eventType = Math.floor(Math.random() * 2);
            var startDay = Math.floor(Math.random() * 90) - 45;
            var endDay = Math.floor(Math.random() * 2) + startDay;
            var startTime;
            var endTime;
            if (eventType === 0) {
                startTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + startDay));
                if (endDay === startDay) {
                    endDay += 1;
                }
                endTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + endDay));
                events.push({
                    title: 'All Day - ' + i,
                    startTime: startTime,
                    endTime: endTime,
                    allDay: true
                });
            } else {
                var startMinute = Math.floor(Math.random() * 24 * 60);
                var endMinute = Math.floor(Math.random() * 180) + startMinute;
                startTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + startDay, 0, date.getMinutes() + startMinute);
                endTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + endDay, 0, date.getMinutes() + endMinute);
                events.push({
                    title: 'Event - ' + i,
                    startTime: startTime,
                    endTime: endTime,
                    allDay: false
                });
            }
        }
        return events;
    }

})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  }

  $scope.currentDate = new Date();
  $scope.minDate = new Date(2105, 6, 1);
  $scope.maxDate = new Date(2015, 6, 31);
   
  $scope.datePickerCallback = function (val) {
      if (!val) { 
          console.log('Date not selected');
      } else {
          console.log('Selected date is : ', val);
      }
  };

});
