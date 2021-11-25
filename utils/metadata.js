const axios = require('axios');
const cheerio = require('cheerio');

exports.getTitleOrNULL = async (originalUrl) => {
    const res = await axios.get(originalUrl).catch((error) => {
        if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
        } else if (error.request) {
        console.log(error.request);
        } else {
        console.log('Error', error.message);
        }
        console.log(error.config);
    }
    );
    console.log(res);
    if (res === undefined)
        return null;
    const {data} = res;
    console.log("getTitle");
    const $ = cheerio.load(data);
    const title = $('head').find('title').text().trim();
    console.log("title");
    console.log(title);
    return title;
}

exports.isResponseHttpCodeOK = async (url) => {
    const res = await axios.get(url).catch((error) => {
        if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
            } else if (error.request) {
            console.log(error.request);
            } else {
            console.log('Error', error.message);
            }
            console.log(error.config);
        }
    );
    console.log(res);
    return res !== undefined
}


