const express = require('express');
const assetRouter = express.Router();


const routes = (Asset) => {
    const assetController = require('../controllers/assetControllers')(Asset);

    assetRouter.route('/')
    .post(assetController.post)
    .get(assetController.get);

assetRouter.use('/:assetId',(req, res, next) => {

    Asset.findById(req.params.assetId, (err, asset) =>{
        if(err)
            res.status(500).send(err);
        else if(asset) {
            req.asset = asset;
            next();
        } else {
            res.status(404).send('No asset found');
        }
    });


});

assetRouter.route('/:assetId')
    .get((req,res) => {
        res.json(req.asset);
    })
    .put((req,res) => {
  
        req.asset.school = req.body.school;
        req.asset.campus = req.body.campus;
        req.asset.manufacture = req.body.manufacture;
        req.asset.model = req.body.model;
        req.asset.deviceType = req.body.deviceType;
        req.asset.warranty = req.body.warranty;
        req.asset.serialNo = req.body.serialNo;
        req.asset.age = req.body.age;
        req.asset.location = req.body.location;
        req.asset.user = req.body.user;
        req.asset.save();
        res.json(req.asset);
    })

    .patch((req,res) => {
        if(req.body._id){
           delete req.body._id;
        }
        for(var key in req.body) {
            req.asset[key] = req.body[key]
        }

        req.asset.save((err) => {
            if(err)
                res.status(500).send(err);
            else
                res.json(req.asset);
        });
    
    })

    .delete((req,res) => {
        req.asset.remove((err) => {
            if(err)
                res.status(500).send(err);
            else
                res.status(204).send("Asset removed successfully.");
        });
    });

    return assetRouter;
}

module.exports = routes;