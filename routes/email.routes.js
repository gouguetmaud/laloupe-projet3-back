const router=require('express').Router();

router.get('/', (req, res)=> {

    res.sendStatus(200);


}) 


module.exports=router;