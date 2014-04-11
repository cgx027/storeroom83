/**
 * Created by: dhayes on 4/9/14.
 * Filename: controllers.spec
 */
describe("Inventory Controllers", function() {
    beforeEach(module('app'));

    describe("StoreroomController", function() {
        var storeroomController, scope;

        beforeEach(inject(function($controller){
            var storerooms = [
                {_id: "1", name: "ONE"},
                {_id: "2", name: "TWO"},
                {_id: "3", name: "THREE"}
            ];
            scope = {};
            storeroomController = $controller('StoreroomController', {$scope: scope, storerooms: storerooms});
        }));

        it("should have storerooms defined on scope", function() {
            expect(scope.storerooms).toBeDefined();
            expect(scope.storerooms.length).toBe(3);
        });

        // tests for remove

    });

});

