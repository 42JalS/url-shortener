const axios = require('axios');
const cheerio = require('cheerio');

exports.getTitle = async (originalUrl) => {
    const res = await axios.get(originalUrl);
    const {data} = res;
    console.log("getTitle");
    const $ = cheerio.load(data);
    const title = $('head').find('title').text().trim();
    console.log("title");
    console.log(title);
    return title;
}

exports.getMetaDataList = async (originalUrl) => {
    const res = await axios.get(originalUrl);
    const {data} = res;
    console.log(data);
    const $ = cheerio.load(data);
    // metadata 처리하는 모듈에서 사용함
    // 이부분 앞으로 구현할 부분
};

