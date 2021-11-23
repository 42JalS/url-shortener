const Urls = require('../models/urls');
const metadata = require('../utils/metadata');

const getTitleConvertedUrl = async (orignalUrl) =>{
    const title = metadata.getTitle(orignalUrl);

    // if null
    if(!title){
        return title;
    }

    const doc = await Urls.findOne({ orignalUrl, convertedUrl: title});
    if (!doc) {
        Urls.create({ orignalUrl, convertedUrl:title});
    }
    return title;
};

exports.getTitleConvertedUrl = getTitleConvertedUrl;
