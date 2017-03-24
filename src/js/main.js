'use strict';

/* Controllers */

angular.module('app').controller('AppCtrl', ['$scope', '$rootScope', '$localStorage', '$location', '$rest',
    function ($scope, $rootScope, $localStorage, $location, $rest) {
        $scope.app = {
            name: 'e洁洗',
            version: '2.0.0',
            // for chart colors
            footerIcon:1,
            hideFooter:false,
            color: {
                primary: '#7266ba',
                info: '#23b7e5',
                success: '#27c24c',
                warning: '#fad733',
                danger: '#f05050',
                light: '#e8eff0',
                dark: '#3a3f51',
                black: '#1c2b36'
            }
        };

        function isSmartDevice($window) {
            // Adapted from http://www.detectmobilebrowsers.com
            var ua = $window['navigator']['userAgent'] || $window['navigator']['vendor'] || $window['opera'];
            // Checks for iOs, Android, Blackberry, Opera Mini, and Windows mobile devices
            return (/iPhone|iPod|iPad|Silk|Android|BlackBerry|Opera Mini|IEMobile/).test(ua);
        }

        $rootScope.$on('$stateChangeStart', function () {
            $rootScope.loading = true;
            $scope.app.hideFooter = false;
        });
        $rootScope.$on('$stateChangeSuccess', function () {
            $rootScope.loading = false;
        });
        $rootScope.checkLogin = function (routeUrl) {
            if (isEmpty($localStorage.authToken)) {
                $location.path("login").search({"routeUrl": encodeURI(routeUrl)});
            }
        };
        $rootScope.checkLoginRedirect = function (routeParams) {
            if (isEmpty($localStorage.authToken)) {
                $location.path("login").search(routeParams);
            }
        };
        $rootScope.getImage = function (item,type) {
            var urls = [];
            if(item && item.styles){
                angular.forEach(item.styles,function (style) {
                    if(style.type === type){
                        urls.push(style.imageUrl);
                    }
                });
            }
            return urls;
        };
        $rootScope.getUser = function (callback,isUpdate) {//获取用户信息
            if(isUpdate){
                $rest('/wechat/user').get(function (data) {
                    if (data.response.header.rc === 0) {
                        $localStorage.user =  data.response.body;
                        callback(data.response.body);
                    }
                });
            }else {
                if(isEmpty($localStorage.user)){
                    $rest('/wechat/user').get(function (data) {
                        if (data.response.header.rc === 0) {
                            $localStorage.user =  data.response.body;
                            callback(data.response.body);
                        }
                    });
                }else {
                    callback( $localStorage.user);
                }
            }
        };
    }]);

app.controller('ModalInstanceCtrl', ['$scope', '$uibModalInstance', 'message',
    function ($scope, $uibModalInstance, message) {
        $scope.message = message;
        $scope.ok = function () {
            $uibModalInstance.close();
        };
        $scope.cancel = function () {
            $uibModalInstance.dismiss();
        };
    }]);

app.controller('ConfirmController', ['$scope', '$mdDialog', 'message',
    function ($scope, $mdDialog, message) {
        $scope.message = message;
        $scope.hide = function () {
            $mdDialog.hide();
        };

        $scope.cancel = function () {
            $mdDialog.cancel();
        };
        $scope.ok = function () {
            $mdDialog.hide();

        }
    }]);

function isEmpty(val) {
    return (val === undefined || val === null || val === '');

}

function isMobile(mobile) {
    if (mobile === undefined) {
        return false;
    }
    if (mobile.length == 0) {
        return false;
    }
    if (mobile.length != 11) {
        return false;
    }
    var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(14[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
    return !!myreg.test(mobile);

}

function configWeChat($resource) {
    $resource("/auth/signature").save({url: window.location.href}, function (data) {
        var body = data.response.body;
        if (body !== undefined) {
            wx.config({
                debug: false,
                appId: app.appid,
                timestamp: body.timestamp,
                nonceStr: body.noncestr,
                signature: body.signature,
                jsApiList: [
                    'onMenuShareTimeline',
                    'onMenuShareAppMessage',
                    'hideOptionMenu',
                    'scanQRCode',
                    'showOptionMenu'
                ]
            });
        }
    });
}
function initWx(config) {
    wx.ready(function () {
        wx.onMenuShareTimeline(config);
        wx.onMenuShareAppMessage(config);
    });
}
