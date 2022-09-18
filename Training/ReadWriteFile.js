var fs = require("fs")
fs.writeFile(
    "sample.txt",
    "my firstline from JS",
    function(err) {
        if(err){
            return console.error(err);
        }
        console.log(" Finished writing");
});

fs.readFile("sample.txt",function(err,data){
    if(err) {
        return console.error(err);
    }
    console.log("data " + data.toString());
});  