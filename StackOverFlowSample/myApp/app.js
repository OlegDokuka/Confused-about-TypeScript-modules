var MyApp;
(function (MyApp) {
    var Models;
    (function (Models) {
        var A = (function () {
            function A() {
            }
            return A;
        })();
        Models.A = A;
    })(Models = MyApp.Models || (MyApp.Models = {}));
})(MyApp || (MyApp = {}));
var MyApp;
(function (MyApp) {
    var Models;
    (function (Models) {
        var B = (function () {
            function B() {
            }
            return B;
        })();
        Models.B = B;
    })(Models = MyApp.Models || (MyApp.Models = {}));
})(MyApp || (MyApp = {}));
/// <reference path="../models/a.ts"/>
/// <reference path="../models/b.ts"/>
var MyApp;
(function (MyApp) {
    var MyController;
    (function (MyController_1) {
        var Models = MyApp.Models;
        var MyController = (function () {
            function MyController() {
                this.a = new Models.A();
                this.b = new Models.B();
            }
            return MyController;
        })();
        MyController_1.MyController = MyController;
    })(MyController = MyApp.MyController || (MyApp.MyController = {}));
})(MyApp || (MyApp = {}));
/// <reference path="myApp/MyController/myController.ts"/>
new MyApp.MyController.MyController();
//# sourceMappingURL=app.js.map