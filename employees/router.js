const router = require("express").Router();

router.get('/', (req,res)=>{
    res.json({yes:"it works"})
})

module.exports = router;