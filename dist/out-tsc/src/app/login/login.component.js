import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AuthentificationService } from '../authentification.service';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(_authenfication) {
        this._authenfication = _authenfication;
        this.loginUserData = {};
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.loginUser = function () {
        this._authenfication.loginUser(this.loginUserData)
            .subscribe(function (res) {
            console.log(res);
            localStorage.setItem('token', res.token);
        }, function (err) { return console.log(err); });
    };
    LoginComponent = tslib_1.__decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [AuthentificationService])
    ], LoginComponent);
    return LoginComponent;
}());
export { LoginComponent };
//# sourceMappingURL=login.component.js.map