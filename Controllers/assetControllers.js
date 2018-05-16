const assetController = (Asset) => {

    const post = (req,res) => {
        const asset = new Asset(req.body);
        asset.save((err) => {
            if(err)
                res.status(500).send(err);
            else
                res.status(201).send(asset);
        });
    }

    const get = (req,res) => {
        Asset.find((err,assets) =>{
            if(err)
                res.status(500).send(err)
            else
                if(assets.length === 0)
                    res.send("No Data To Display");
                res.json(assets);
        });
    }

    return {
        post: post,
        get: get,
    }

}

module.exports = assetController;