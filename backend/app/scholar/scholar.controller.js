BASE_URL = 'http://xxx';
ENDPOINT = '_schoEarnings';

module.exports = (axios) => {
    const request = (type, roninAddress, params, body) => axios({
        url: `${BASE_URL}/${ENDPOINT}/${roninAddress}`,
        method: type,
        data: body,
        params,
    });

    const getScholarDetails = async roninAddress => request('get', roninAddress);

    return {
        getScholarDetails,
    };
};
