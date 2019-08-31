import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { SpecialEventsComponent } from './special-events/special-events.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
var routes = [
    {
        path: '',
        redirectTo: '/events',
        pathMatch: 'full'
    },
    {
        path: "events",
        component: EventsComponent
    },
    {
        path: "special",
        component: SpecialEventsComponent
    },
    { path: "login",
        component: LoginComponent
    },
    {
        path: "register",
        component: RegisterComponent
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map