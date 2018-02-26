logger = require('f5-logger').getInstance();
var WorkerName = "Import Policy";
function ImportPolicy() {}

ImportPolicy.prototype.WORKER_URI_PATH = "asm/import_policy";
ImportPolicy.prototype.isPublic = true;

ImportPolicy.prototype.onStart = function (success) {
    logger.info(WorkerName + " - onStart();");
    success();
};


ImportPolicy.prototype.onGet = function(restOperation) {
    restOperation.setBody(JSON.stringify( { value: "Hello World!" } ));
    this.completeRestOperation(restOperation);
};

/**
 * handle /example HTTP request
 */
ImportPolicy.prototype.getExampleState = function () {
    return {
        "value": "your_string"
    };
};

module.exports = ImportPolicy;

