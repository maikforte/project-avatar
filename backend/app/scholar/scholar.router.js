const express = require('express');

module.exports = (route, controller) => {
    route.use('/scholar', express.Router()
        .get('/:roninAddress', async (req, res) => {
            const { roninAddress } = req.params;
            const response = await controller.getScholarDetails(roninAddress);
            res.send(response.data);
        }));

    return route;
};
