var Person;
(function (Person) {
    var infor = /** @class */ (function () {
        function infor() {
            console.log("information");
        }
        return infor;
    }());
    Person.infor = infor;
})(Person || (Person = {}));
