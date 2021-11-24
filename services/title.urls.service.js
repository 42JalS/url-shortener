const Urls = require('../models/urls');
const metadata = require('../utils/metadata');
const urlService = require('./urls.service');


const getConvertedTitleUrl = async (originalUrl) =>{
    console.log("getTitleConvertedUrl");
    const title = await metadata.getTitle(originalUrl);

    console.log(title);
    
    // if null
    // if(title === undefined){
    //     return title;
    // }

    const convertedUrl = await urlService.getConvertedUrl(originalUrl, title);

    console.log(convertedUrl);
    return convertedUrl;
};

exports.getTitleConvertedUrl = getConvertedTitleUrl;
