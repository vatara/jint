/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.6/15.2.3.6-3-257-1.js
 * @description Object.defineProperty - 'Attributes' is an Error object that uses Object's [[Get]] method to access the 'set' property of prototype object (8.10.5 step 8.a)
 */


function testcase() {
        var obj = {};
        var data = "data";

        try {
            Error.prototype.set = function (value) {
                data = value;
            };
            var errObj = new Error();

            Object.defineProperty(obj, "property", errObj);
            obj.property = "overrideData";

            return obj.hasOwnProperty("property") && data === "overrideData";
        } finally {
            delete Error.prototype.set;
        }
    }
runTestCase(testcase);
