/// <reference path="../models/a.ts"/>
/// <reference path="../models/b.ts"/>

module MyApp.MyController {
    import Models = MyApp.Models;

    export class MyController {
        a = new Models.A();
        b = new Models.B();
    }
}