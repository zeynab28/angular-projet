import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var AuthentificationService = /** @class */ (function () {
    function AuthentificationService(http) {
        this.http = http;
        // private _registerUrl = "http://localhost:8000/api/register"
        this._loginUrl = "http://localhost:8000/api/login_check";
    }
    AuthentificationService.prototype.registerUser = function (User) {
        var endpoint = 'http://localhost:8000/api/register';
        var formData = new FormData();
        formData.append('ImageName', User.ImageName);
        formData.append('prenom', User.prenom);
        formData.append('nom', User.nom);
        formData.append('cni', User.ImageName);
    };
    AuthentificationService.prototype.loginUser = function (user) {
        return this.http.post(this._loginUrl, user);
    };
    AuthentificationService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], AuthentificationService);
    return AuthentificationService;
}());
export { AuthentificationService };
//# sourceMappingURL=authentification.service.js.map