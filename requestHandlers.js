var exec = require("child_process").exec;

function start() {
    console.log("Request handler 'start' was called.");
    var content = "empty";

    exec("is -lah", function (error, stdout, stdeer) {
        content = stdout;
    });
    return content;
}
    
function upload() {
    console.log("Request handler 'upload' was called.");
    return "hello upload";
}
    
exports.start = start;
exports.upload = upload;