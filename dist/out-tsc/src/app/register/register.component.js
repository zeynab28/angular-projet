import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AuthentificationService } from '../authentification.service';
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(_authenfication) {
        this._authenfication = _authenfication;
        this.registerUserData = { imageName: File = null };
        this.imageUrl = "/assets/img/capt.png";
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.handleFileInput = function (file) {
        var _this = this;
        this.registerUserData.imageName = file.item(0);
        var reader = new FileReader();
        reader.onload = function (event) {
            _this.imageUrl = event.target.result;
        };
        reader.readAsDataURL(this.registerUserData.imageName);
    };
    RegisterComponent.prototype.registerUser = function () {
        this._authenfication.registerUser(this.registerUserData)
            .subscribe(function (res) { console.log(res); }, function (err) { return console.log(err); });
    };
    RegisterComponent = tslib_1.__decorate([
        Component({
            selector: 'app-register',
            templateUrl: './register.component.html',
            styleUrls: ['./register.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [AuthentificationService])
    ], RegisterComponent);
    return RegisterComponent;
}());
export { RegisterComponent };
//# sourceMappingURL=register.component.js.map