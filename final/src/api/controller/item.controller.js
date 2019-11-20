let Sneaker= require('../model/item.model');
module.exports.show =(req, res)=> {
    Sneaker.find( (err, sneakers)=> {
        if (err) {
            console.log(err);
        }
        else {
            res.json(sneakers);
        }
    });
};
module.exports.view=(req,res)=>{
    let id=req.params.id;
    Sneaker.findById(id,(err,sneaker)=>{
       if(err){
           console.log(err);
       }
       else{
        res.json(sneaker);
       }
    })
}