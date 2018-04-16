function start() {
    console.log("Request handler 'start' was called."); 3
}
    
function upload() {
    console.log("Request handler 'upload' was called."); 7
}
    
exports.start = start;
exports.upload = upload;