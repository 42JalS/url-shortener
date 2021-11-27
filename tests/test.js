/* eslint-disable no-undef */
const mongoose = require('mongoose');
const titleService = require('../services/title.urls.service');
const urlsService = require('../services/urls.service');
const emojiService = require('../services/urls.emoji.service');
const Urls = require('../models/urls');


let TODO // db local 테스트부분 따로 빼기.


mongoose.connect('mongodb://localhost/url-shortener');

afterEach(() => {
  Urls.remove({});
});


describe('하나의 https url에대해서', () => {
    const url = "https://docs.github.com/en/actions";
    test('simple test', async () => {
        const convertedUrl  = await urlsService.getConvertedUrlOrNULL(url);
        //await console.log(convertedUrl);
        const orl  = await urlsService.getOriginalUrlOrNULL(convertedUrl)
        expect(orl).toBe(url);
    });

    test('emoji test', async () => {
      const convertedUrl  = await emojiService.getConvertedEmojiUrlOrNULL(url);
      //await console.log(convertedUrl);
      const orl  = await urlsService.getOriginalUrlOrNULL(convertedUrl)
      expect(orl).toBe(url);
    });

    test('custom test', async () => {
      const custom = "custom";
      const convertedUrl  = await urlsService.getConvertedUrlOrNULL(url, custom);
      //await console.log(convertedUrl);
      const orl  = await urlsService.getOriginalUrlOrNULL(convertedUrl)
      expect(orl).toBe(url);
    });
    
    test('title test', async () => {
      const convertedUrl  = await titleService.getTitleConvertedUrlOrNULL(url);
      const orl  = await urlsService.getOriginalUrlOrNULL(convertedUrl)
      expect(orl).toBe(url);
    });
  }
);

////////////////////////////////////////////////////////////////////////////////


describe('하나의 http url에대해서 case1', () => {
    const url = "http://www.naver.com/";
    test('simple test', async () => {
        const convertedUrl  = await urlsService.getConvertedUrlOrNULL(url);
        //await console.log(convertedUrl);
        const orl  = await urlsService.getOriginalUrlOrNULL(convertedUrl)
        expect(orl).toBe(url);
    });

    test('emoji test', async () => {
      const convertedUrl  = await emojiService.getConvertedEmojiUrlOrNULL(url);
      //await console.log(convertedUrl);
      const orl  = await urlsService.getOriginalUrlOrNULL(convertedUrl)
      expect(orl).toBe(url);
    });
    test('custom test', async () => {
          const custom = "custom";
          const convertedUrl  = await urlsService.getConvertedUrlOrNULL(url, custom);
          //await console.log(convertedUrl);
          const orl  = await urlsService.getOriginalUrlOrNULL(convertedUrl)
          expect(orl).toBe(url);
    });

    test('title test', async () => {
          const convertedUrl  = await titleService.getTitleConvertedUrlOrNULL(url);
          const orl  = await urlsService.getOriginalUrlOrNULL(convertedUrl)
          expect(orl).toBe(url);
    });
  }
);

// ////////////////////////////////////////////////////////////////////////


// describe('하나의 http url에대해서 case2', () => {
//     const url = "http://www.nspna.com/news/?mode=view&newsid=539519";
//     test('simple test', async () => {
//       const convertedUrl  = await urls.getConvertedUrlOrNULL(url);
//       //await console.log(convertedUrl);
//       const orl  = await urls.getOriginalUrlOrNULL(convertedUrl)
//       expect(orl).toBe(url);
//     });
//     test('emoji test', async () => {
//           const convertedUrl  = await emoji.getConvertedEmojiUrlOrNULL(url);
//           //await console.log(convertedUrl);
//           const orl  = await urls.getOriginalUrlOrNULL(convertedUrl)
//           expect(orl).toBe(url);
//       });
//     test('custom test', async () => {
//           const custom = "custom";
//           const convertedUrl  = await urls.getConvertedUrlOrNULL(url, custom);
//           //await console.log(convertedUrl);
//           const orl  = await urls.getOriginalUrlOrNULL(convertedUrl)
//           expect(orl).toBe(url);
//         });
//     test('title test', async () => {
//           const convertedUrl  = await title.getTitleConvertedUrlOrNULL(url);
//           const orl  = await urls.getOriginalUrlOrNULL(convertedUrl)
//           expect(orl).toBe(url);
//     });
//   }
// );


// ////////////////////////////////////////////////////////////////////////////////



// describe('없는 site 형식에 대해서 정상작동하는가?', () => {
//     const url = "swtpumpkin/node-githubActions-CI";
//       test('simple test', async () => {
//         const convertedUrl  = await urls.getConvertedUrlOrNULL(url);
//         //await console.log(convertedUrl);
//         const orl  = await urls.getOriginalUrlOrNULL(convertedUrl)
//         expect(orl).toBe(url);
//     });

//     test('emoji test', async () => {
//         const convertedUrl  = await emoji.getConvertedEmojiUrlOrNULL(url);
//         //await console.log(convertedUrl);
//         const orl  = await urls.getOriginalUrlOrNULL(convertedUrl)
//         expect(orl).toBe(url);
//     });

//     test('Custom test', async () => {
//       const custom = "custom";
//       const convertedUrl  = await urls.getConvertedUrlOrNULL(url, custom);
//       //await console.log(convertedUrl);
//       const orl  = await urls.getOriginalUrlOrNULL(convertedUrl)
//       expect(orl).toBe(url);
//     });

//     test('title url', async () => {
//       const custom = "custom";
//       const convertedUrl  = await urls.getConvertedUrlOrNULL(url, custom);
//       const orl  = await urls.getOriginalUrlOrNULL(convertedUrl)
//       expect(orl).toBe(url);
//     });
//   }
// );

// /////////////////////////////////////////////////////////

// describe('위의 url형식이 아닌 일반적인 문자열에대해서 작동', () => {
//     const url = "alkdsnflsakdnflsa";
//     test('simple test', async () => {
//       const convertedUrl  = await urls.getConvertedUrlOrNULL(url);
//       //await console.log(convertedUrl);
//       const orl  = await urls.getOriginalUrlOrNULL(convertedUrl)
//       expect(orl).toBe(null);
//   });

//   test('emoji test', async () => {
//         const convertedUrl  = await emoji.getConvertedEmojiUrlOrNULL(url);
//         //await console.log(convertedUrl);
//         const orl  = await urls.getOriginalUrlOrNULL(convertedUrl)
//         expect(orl).toBe(null);
//     });

//   test('custom test', async () => {
//         const custom = "custom";
//         const convertedUrl  = await urls.getConvertedUrlOrNULL(url, custom);
//         //await console.log(convertedUrl);
//         const orl  = await urls.getOriginalUrlOrNULL(convertedUrl)
//         expect(orl).toBe(null);
//     });

//   test('title test', async () => {
//     const convertedUrl  = await title.getTitleConvertedUrlOrNULL(url);
//     const orl  = await urls.getOriginalUrlOrNULL(convertedUrl)
//     expect(orl).toBe(null);
//   });
//   }
// );

// // /////////////////////////////////////////////////////////

// // describe('연속적인 url 테스트 converted 된 값을 다시 converted simple test', () => {
// //     const urll = "https://docs.github.com/en/actions";
// //     const url = urls.getConvertedUrlOrNULL( urll);

// //     test('simple test', async () => {
// //       const convertedUrl  = await urls.getConvertedUrlOrNULL(url);
// //       //await console.log(convertedUrl);
// //       const orl  = await urls.getOriginalUrlOrNULL(convertedUrl)
// //       expect(orl).toBe(url);
// //     });

// //     test('emoji test', async () => {
// //           const convertedUrl  = await emoji.getConvertedEmojiUrlOrNULL(url);
// //           //await console.log(convertedUrl);
// //           const orl  = await urls.getOriginalUrlOrNULL(convertedUrl)
// //           expect(orl).toBe(url);
// //     });

// //     test('custom test', async () => {
// //           const custom = "custom";
// //           const convertedUrl  = await urls.getConvertedUrlOrNULL(url, custom);
// //           //await console.log(convertedUrl);
// //           const orl  = await urls.getOriginalUrlOrNULL(convertedUrl)
// //           expect(orl).toBe(url);
// //     });

// //     test('title test', async () => {
// //       const convertedUrl  = await title.getTitleConvertedUrlOrNULL(url);
// //       const orl  = await urls.getOriginalUrlOrNULL(convertedUrl)
// //       expect(orl).toBe(url);
// //     });
// //   } 
// // );



// // /////////////////////////////////////////////////////////////////////////////////

// // describe('연속적인 url 테스트 converted 된 값을 다시 converted emoji test', () => {
// //   const urll = "https://docs.github.com/en/actions";
// //   const url = emoji.getConvertedEmojiUrlOrNULL(urll);

// //   test('simple test', async () => {
// //     const convertedUrl  = await urls.getConvertedUrlOrNULL(url);
// //     //await console.log(convertedUrl);
// //     const orl  = await urls.getOriginalUrlOrNULL(convertedUrl)
// //     expect(orl).toBe(url);
// //   });

// //   test('emoji test', async () => {
// //         const convertedUrl  = await emoji.getConvertedEmojiUrlOrNULL(url);
// //         //await console.log(convertedUrl);
// //         const orl  = await urls.getOriginalUrlOrNULL(convertedUrl)
// //         expect(orl).toBe(url);
// //   });

// //   test('custom test', async () => {
// //         const custom = "custom";
// //         const convertedUrl  = await urls.getConvertedUrlOrNULL(url, custom);
// //         //await console.log(convertedUrl);
// //         const orl  = await urls.getOriginalUrlOrNULL(convertedUrl)
// //         expect(orl).toBe(url);
// //   });

// //   test('title test', async () => {
// //     const convertedUrl  = await title.getTitleConvertedUrlOrNULL(url);
// //     const orl  = await urls.getOriginalUrlOrNULL(convertedUrl)
// //     expect(orl).toBe(url);
// //   });
// // } 
// // );



// // /////////////////////////////////////////////////////////////////////////////////

// // describe('연속적인 url 테스트 converted 된 값을 다시 converted custom test', () => {
// //   const urll = "https://docs.github.com/en/actions";
// //   const customm = "custommomom"
// //   const url = urls.getConvertedUrlOrNULL(urll, customm);

// //   test('simple test', async () => {
// //     const convertedUrl  = await urls.getConvertedUrlOrNULL(url);
// //     //await console.log(convertedUrl);
// //     const orl  = await urls.getOriginalUrlOrNULL(convertedUrl)
// //     expect(orl).toBe(url);
// //   });

// //   test('emoji test', async () => {
// //         const convertedUrl  = await emoji.getConvertedEmojiUrlOrNULL(url);
// //         //await console.log(convertedUrl);
// //         const orl  = await urls.getOriginalUrlOrNULL(convertedUrl)
// //         expect(orl).toBe(url);
// //   });

// //   test('custom test', async () => {
// //         const custom = "custom";
// //         const convertedUrl  = await urls.getConvertedUrlOrNULL(url, custom);
// //         //await console.log(convertedUrl);
// //         const orl  = await urls.getOriginalUrlOrNULL(convertedUrl)
// //         expect(orl).toBe(url);
// //   });

// //   test('title test', async () => {
// //     const convertedUrl  = await title.getTitleConvertedUrlOrNULL(url);
// //     const orl  = await urls.getOriginalUrlOrNULL(convertedUrl)
// //     expect(orl).toBe(url);
// //   });
// // });



// // /////////////////////////////////////////////////////////////////////////////////


// // describe('연속적인 url 테스트 converted 된 값을 다시 converted title test', () => {
// //   const urll = "https://docs.github.com/en/actions";
// //   const customm = "custommomom"
// //   const url = urls.getConvertedUrlOrNULL(urll, customm);

// //   test('simple test', async () => {
// //     const convertedUrl  = await urls.getConvertedUrlOrNULL(url);
// //     //await console.log(convertedUrl);
// //     const orl  = await urls.getOriginalUrlOrNULL(convertedUrl)
// //     expect(orl).toBe(url);
// //   });

// //   test('emoji test', async () => {
// //         const convertedUrl  = await emoji.getConvertedEmojiUrlOrNULL(url);
// //         //await console.log(convertedUrl);
// //         const orl  = await urls.getOriginalUrlOrNULL(convertedUrl)
// //         expect(orl).toBe(url);
// //   });

// //   test('custom test', async () => {
// //         const custom = "custom";
// //         const convertedUrl  = await urls.getConvertedUrlOrNULL(url, custom);
// //         //await console.log(convertedUrl);
// //         const orl  = await urls.getOriginalUrlOrNULL(convertedUrl)
// //         expect(orl).toBe(url);
// //   });

// //   test('title test', async () => {
// //     const convertedUrl  = await title.getTitleConvertedUrlOrNULL(url);
// //     const orl  = await urls.getOriginalUrlOrNULL(convertedUrl)
// //     expect(orl).toBe(url);
// //   });
// // });

// // /////////////////////////////////////////////////////////////////////////////////


// // describe('매우긴 url에서의 작동', () => {
// //   const url = "https://www.google.com/search?q=%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84&sxsrf=AOaemvJjS3mxF0LMC15ItKD64ei8OcuHeQ%3A1637904355174&ei=42-gYaSMCo78wQOSqYnoAQ&ved=0ahUKEwjkiZCapbX0AhUOfnAKHZJUAh0Q4dUDCA4&uact=5&oq=%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEOgQIABADOggILhCABBCxAzoICAAQgAQQsQM6CwgAEIAEELEDEIMBOgUILhCABEoECEEYAVCDCVj9JGD0JWgGcAB4A4ABrwGIAfEJkgEDMS44mAEAoAEBoAECwAEB&sclient=gws-wiz";
// //   test('simple test', async () => {
// //     const convertedUrl  = await urls.getConvertedUrlOrNULL(url);
// //     //await console.log(convertedUrl);
// //     const orl  = await urls.getOriginalUrlOrNULL(convertedUrl)
// //     expect(orl).toBe(url);
// //   });
// //   test('emoji test', async () => {
// //       const convertedUrl  = await emoji.getConvertedEmojiUrlOrNULL(url);
// //       //await console.log(convertedUrl);
// //       const orl  = await urls.getOriginalUrlOrNULL(convertedUrl)
// //       expect(orl).toBe(url);
// //   });
// //   test('custom test', async () => {
// //       const custom = "custom";
// //       const convertedUrl  = await urls.getConvertedUrlOrNULL(url, custom);
// //       //await console.log(convertedUrl);
// //       const orl  = await urls.getOriginalUrlOrNULL(convertedUrl)
// //       expect(orl).toBe(url);
// //     });
// //     test('title test', async () => {
// //       const convertedUrl  = await title.getTitleConvertedUrlOrNULL(url);
// //       const orl  = await urls.getOriginalUrlOrNULL(convertedUrl)
// //       expect(orl).toBe(url);
// //   });
// //   }
// // );



// // // 8. converted to original 저격 케이스
// // // - test url : https://docs.github.com/en/actions 을 actions 로 custom ~/actions
// // // - converted url로  https://docs.github.com/en/actions 을 제출시 맨끝 '/' actions  만 추출해서 reject되어야하는것이 값이 나오는지를 테스트.


// // describe(' converted to original 저격 케이스', () => {
// //   const url = "https://docs.github.com/en/actions";
// //   const custom = "actions"

// //   test('custom test', async () => {
// //       const convertedUrl  = await urls.getConvertedUrlOrNULL(url, custom);
// //       //await console.log(convertedUrl);
// //       const orl  = await urls.getOriginalUrlOrNULL(url)
// //       expect(orl).toBe(null);
// //     });
// //   }
// // );



// // /////////////////////////////////////////////////////////////////////////////////
// // /////////////////////////////////////////////////////////////////////////////////
// // /////////////////////////////////////////////////////////////////////////////////
// // /////////////////////////////////////////////////////////////////////////////////
// // /////////////////////////////////////////////////////////////////////////////////
// // /////////////////////////////////////////////////////////////////////////////////


// // //custom test
// // // 1. custom with emoji
// // // - test url : https://docs.github.com/en/actions
// // // - 2. 후 나온 이모지를 4. 로 custom 할시에 -> reject
// // // 2. custom with title
// // // - test url : https://docs.github.com/en/actions
// // // - 3. 후 나온 이모지를 4. 으로 custom 할시에 -> reject
// // // 3 custom 가능 문자열 테스트 X


// // describe('custom test', () => {
// //   const url = "https://docs.github.com/en/actions";
// //   test('custom test with simple', async () => {
// //       const convertedUrll  = await urls.getConvertedUrlOrNULL(url);
// //       const custom = convertedUrll.substring(convertedUrll.lastIndexOf('/') + 1);
// //       const convertedUrl  = await urls.getConvertedUrlOrNULL(url, custom);
// //       //await console.log(convertedUrl);
// //       expect(convertedUrl).toBe(null);
// //     });

// //     test('custom test with emoji', async () => {
// //       const convertedUrll  = await emoji.getConvertedEmojiUrlOrNULL(url);
// //       const custom = convertedUrll.substring(convertedUrll.lastIndexOf('/') + 1);
// //       const convertedUrl  = await urls.getConvertedUrlOrNULL(url, custom);
// //       //await console.log(convertedUrl);
// //       expect(convertedUrl).toBe(null);
// //     });
    
// //     test('custom test with title', async () => {
// //       const convertedUrll  = await title.getTitleConvertedUrlOrNULL(url);
// //       const custom = convertedUrll.substring(convertedUrll.lastIndexOf('/') + 1);
// //       const convertedUrl  = await urls.getConvertedUrlOrNULL(url, custom);
// //       //await console.log(convertedUrl);
// //       expect(convertedUrl).toBe(null);
// //     });
// //   }
// // );

// // // # title test
// // // 1. title same title
// // // - test url :
// // // - https://www.naver.com/
// // // - http://www.naver.com/
// // // - url1을 3 그후 url2를 3 할시에 reject 체크
// // // 2. title with custom된 파일에 대해서
// // // - test url :
// // // - https://www.naver.com/
// // // - http://www.naver.com/
// // // - url1을 3 그 후 url2를 3 할시에 reject 체크
// // // 3. 일반적인 접근이 안되는 url 테스트
// // // - test url : https://www.notion.so/42jals/JalS-Home-7fb4100ecff643e1899e9e41677f6df6
// // // - 3 ->  reject


// // describe('title test', () => {
// //   test('title test with custom', async () => {
// //     const url1 = "http://www.naver.com/";
// //     const url2 = "https://www.naver.com/";
// //     title.getTitleConvertedUrlOrNULL(url1);
// //     const convertedUrl = title.getTitleConvertedUrlOrNULL(url2);
// //     //await console.log(convertedUrl);
// //     expect(convertedUrl).toBe(null);
// //   });
  
// //   test('title test with custom', async () => {
// //   const url = "https://www.notion.so/42jals/JalS-Home-7fb4100ecff643e1899e9e41677f6df6";    
// //   const convertedUrl = title.getTitleConvertedUrlOrNULL(url);
// //     //await console.log(convertedUrl);
// //     expect(convertedUrl).toBe(null);
// //   });
// // });
