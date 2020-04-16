const fs = require('fs')
const data = require('./data.json')
//create
exports.post = function(req, res){

    const keys = Object.keys(req.body)

    for( key of keys) {
        if(req.body[key] == "") return res.send("Please, fill in all fields!")
    }

    data.instructors.push(req.body)
     
    fs.writeFile("data.json", JSON.stringify(req.body), function(err){
        if (err) return res.send("Write file engine")

        return res.redirect("/instructors")
    })

    //return res.send(req.body)
}

//update


//delete