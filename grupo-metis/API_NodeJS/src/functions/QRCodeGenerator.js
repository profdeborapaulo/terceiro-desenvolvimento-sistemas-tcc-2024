const qr = require ("qrcode");

const tb_user = require("../models/User");

module.exports = {
    async createQR(req, res){
        const id = req.params.id;

        const Result = await tb_user.findById(id);
        const ResultJSON = JSON.stringify(Result)
  qr.toString(ResultJSON, {type: "terminal"}, (err, code) =>{

      if(err) return console.log("error");
      console.log(code);
  } );
    console.log(ResultJSON);

        return res.json(Result);
    }

}