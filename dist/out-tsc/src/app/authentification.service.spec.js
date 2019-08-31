import { TestBed } from '@angular/core/testing';
import { AuthentificationService } from './authentification.service';
describe('AuthentificationService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(AuthentificationService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=authentification.service.spec.js.map