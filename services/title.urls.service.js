const Urls = require('../models/urls');
const metadata = require('../utils/metadata');
const urlService = require('./urls.service');

const removeSpecificType= (str)=> {
    const reg = /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/ ]/gim;
    if(reg.test(str)){
      return str.replace(reg, "-");    
    } 
      return str;
      
  }
const getConvertedTitleUrl = async (originalUrl) =>{
    console.log("getTitleConvertedUrl");
    const title = await metadata.getTitle(originalUrl);

    console.log(title);
    //error check
    // title이 겹치는데 다른 url인 경우.
    // custom부분 과 겹치는 title인 경우.?

    const filteredTitle = removeSpecificType(title);
    console.log(title);
    const convertedUrl = await urlService.getConvertedUrl(originalUrl, filteredTitle);

    console.log(convertedUrl);
    return convertedUrl;
};

exports.getTitleConvertedUrl = getConvertedTitleUrl;
