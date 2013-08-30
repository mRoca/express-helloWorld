var Mocha = require ("mocha");

var _mocha = new Mocha ({
    reporter: "dot"
});

_mocha.addFile("test/routesTest");

_mocha.run (function (failures){
    process.exit (failures);
});