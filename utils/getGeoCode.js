const axios = require('axios');

const getCoordinate = async(address) => {
try {
    const token = process.env.MAPBOX_KEY;
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=${token}`;
    const res = await axios.get(url);
    console.log(res);
    return res;
} catch (err){
    console.log(err);
}
}

module.export = getCoordinate;