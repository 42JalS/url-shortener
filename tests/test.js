/* eslint-disable no-undef */
const mongus = require('../loaders/mongoose');
const title = require('../services/title.urls.service');
const urls = require('../services/urls.service');
const emoji = require('../services/urls.emoji.service');

mongus();

describe('하나의 https url에대해서', () => {
    const url = "https://docs.github.com/en/actions";
    test('simple test', async () => {
        const convertedUrl  = await urls.getConvertedUrlOrNULL(url);
        console.log(convertedUrl);
        const orl  = await urls.getOriginalUrlOrNULL(convertedUrl)
        expect(orl).toBe(url);
    });

    test('emoji test', async () => {
      const convertedUrl  = await emoji.getConvertedEmojiUrlOrNULL(url);
      console.log(convertedUrl);
      const orl  = await urls.getOriginalUrlOrNULL(convertedUrl)
      expect(orl).toBe(url);
    });

    test('custom test', async () => {
      const custom = "custom";
      const convertedUrl  = await urls.getConvertedUrlOrNULL(url, custom);
      console.log(convertedUrl);
      const orl  = await urls.getOriginalUrlOrNULL(convertedUrl)
      expect(orl).toBe(url);
    });
    
    test('title test', async () => {
      const convertedUrl  = await title.getTitleConvertedUrlOrNULL(url);
      const orl  = await urls.getOriginalUrlOrNULL(convertedUrl)
      expect(orl).toBe(url);
    });
  }
);

////////////////////////////////////////////////////////////////////////////////


describe('하나의 http url에대해서 case1', () => {
    const url = "http://www.naver.com/";
    test('simple test', async () => {
        const convertedUrl  = await urls.getConvertedUrlOrNULL(url);
        console.log(convertedUrl);
        const orl  = await urls.getOriginalUrlOrNULL(convertedUrl)
        expect(orl).toBe(url);
    });

    test('emoji test', async () => {
      const convertedUrl  = await emoji.getConvertedEmojiUrlOrNULL(url);
      console.log(convertedUrl);
      const orl  = await urls.getOriginalUrlOrNULL(convertedUrl)
      expect(orl).toBe(url);
    });
    test('custom test', async () => {
          const custom = "custom";
          const convertedUrl  = await urls.getConvertedUrlOrNULL(url, custom);
          console.log(convertedUrl);
          const orl  = await urls.getOriginalUrlOrNULL(convertedUrl)
          expect(orl).toBe(url);
    });

    test('title test', async () => {
          const convertedUrl  = awtitle.getTitleConvertedUrlOrNULL(url);
          const orl  = await urls.getOriginalUrlOrNULL(convertedUrl)
          expect(orl).toBe(url);
    });
  }
);

////////////////////////////////////////////////////////////////////////


describe('하나의 http url에대해서 case2', () => {
    const url = "http://www.nspna.com/news/?mode=view&newsid=539519";
    test('simple test', async () => {
      const convertedUrl  = await urls.getConvertedUrlOrNULL(url);
      console.log(convertedUrl);
      const orl  = await urls.getOriginalUrlOrNULL(convertedUrl)
      expect(orl).toBe(url);
    });
    test('emoji test', async () => {
          const convertedUrl  = await emoji.getConvertedEmojiUrlOrNULL(url);
          console.log(convertedUrl);
          const orl  = await urls.getOriginalUrlOrNULL(convertedUrl)
          expect(orl).toBe(url);
      });
    test('custom test', async () => {
          const custom = "custom";
          const convertedUrl  = await urls.getConvertedUrlOrNULL(url, custom);
          console.log(convertedUrl);
          const orl  = await urls.getOriginalUrlOrNULL(convertedUrl)
          expect(orl).toBe(url);
        });
    test('title test', async () => {
          const convertedUrl  = awtitle.getTitleConvertedUrlOrNULL(url);
          const orl  = await urls.getOriginalUrlOrNULL(convertedUrl)
          expect(orl).toBe(url);
    });
  }
);


////////////////////////////////////////////////////////////////////////////////



describe('없는 site 형식에 대해서 정상작동하는가?', () => {
    const url = "swtpumpkin/node-githubActions-CI";
      test('simple test', async () => {
        const convertedUrl  = await urls.getConvertedUrlOrNULL(url);
        console.log(convertedUrl);
        const orl  = await urls.getOriginalUrlOrNULL(convertedUrl)
        expect(orl).toBe(url);
    });

    test('emoji test', async () => {
        const convertedUrl  = await emoji.getConvertedEmojiUrlOrNULL(url);
        console.log(convertedUrl);
        const orl  = await urls.getOriginalUrlOrNULL(convertedUrl)
        expect(orl).toBe(url);
    });

    test('Custom test', async () => {
      const custom = "custom";
      const convertedUrl  = await urls.getConvertedUrlOrNULL(url, custom);
      console.log(convertedUrl);
      const orl  = await urls.getOriginalUrlOrNULL(convertedUrl)
      expect(orl).toBe(url);
    });

    test('title url', async () => {
      const custom = "custom";
      const convertedUrl  = await urls.getConvertedUrlOrNULL(url, custom);
      const orl  = await urls.getOriginalUrlOrNULL(convertedUrl)
      expect(orl).toBe(url);
    });
  }
);

/////////////////////////////////////////////////////////

describe('위의 url형식이 아닌 일반적인 문자열에대해서 작동', () => {
    const url = "alkdsnflsakdnflsa";
    test('simple test', async () => {
      const convertedUrl  = await urls.getConvertedUrlOrNULL(url);
      console.log(convertedUrl);
      const orl  = await urls.getOriginalUrlOrNULL(convertedUrl)
      expect(orl).toBe(null);
  });

  test('emoji test', async () => {
        const convertedUrl  = await emoji.getConvertedEmojiUrlOrNULL(url);
        console.log(convertedUrl);
        const orl  = await urls.getOriginalUrlOrNULL(convertedUrl)
        expect(orl).toBe(null);
    });

  test('custom test', async () => {
        const custom = "custom";
        const convertedUrl  = await urls.getConvertedUrlOrNULL(url, custom);
        console.log(convertedUrl);
        const orl  = await urls.getOriginalUrlOrNULL(convertedUrl)
        expect(orl).toBe(null);
    });

  test('title test', async () => {
    const convertedUrl  = await title.getTitleConvertedUrlOrNULL(url);
    const orl  = await urls.getOriginalUrlOrNULL(convertedUrl)
    expect(orl).toBe(null);
  });
  }
);

/////////////////////////////////////////////////////////

describe('연속적인 url 테스트 converted 된 값을 다시 converted simple test', () => {
    const urll = "https://docs.github.com/en/actions";
    const url = urls.getConvertedUrlOrNULL( urll);

    test('simple test', async () => {
      const convertedUrl  = await urls.getConvertedUrlOrNULL(url);
      console.log(convertedUrl);
      const orl  = await urls.getOriginalUrlOrNULL(convertedUrl)
      expect(orl).toBe(url);
    });

    test('emoji test', async () => {
          const convertedUrl  = await emoji.getConvertedEmojiUrlOrNULL(url);
          console.log(convertedUrl);
          const orl  = await urls.getOriginalUrlOrNULL(convertedUrl)
          expect(orl).toBe(url);
    });

    test('custom test', async () => {
          const custom = "custom";
          const convertedUrl  = await urls.getConvertedUrlOrNULL(url, custom);
          console.log(convertedUrl);
          const orl  = await urls.getOriginalUrlOrNULL(convertedUrl)
          expect(orl).toBe(url);
    });

    test('title test', async () => {
      const convertedUrl  = await title.getTitleConvertedUrlOrNULL(url);
      const orl  = await urls.getOriginalUrlOrNULL(convertedUrl)
      expect(orl).toBe(url);
    });
  } 
);



/////////////////////////////////////////////////////////////////////////////////

describe('연속적인 url 테스트 converted 된 값을 다시 converted emoji test', () => {
  const urll = "https://docs.github.com/en/actions";
  const url = emoji.getConvertedEmojiUrlOrNULL(urll);

  test('simple test', async () => {
    const convertedUrl  = await urls.getConvertedUrlOrNULL(url);
    console.log(convertedUrl);
    const orl  = await urls.getOriginalUrlOrNULL(convertedUrl)
    expect(orl).toBe(url);
  });

  test('emoji test', async () => {
        const convertedUrl  = await emoji.getConvertedEmojiUrlOrNULL(url);
        console.log(convertedUrl);
        const orl  = await urls.getOriginalUrlOrNULL(convertedUrl)
        expect(orl).toBe(url);
  });

  test('custom test', async () => {
        const custom = "custom";
        const convertedUrl  = await urls.getConvertedUrlOrNULL(url, custom);
        console.log(convertedUrl);
        const orl  = await urls.getOriginalUrlOrNULL(convertedUrl)
        expect(orl).toBe(url);
  });

  test('title test', async () => {
    const convertedUrl  = await title.getTitleConvertedUrlOrNULL(url);
    const orl  = await urls.getOriginalUrlOrNULL(convertedUrl)
    expect(orl).toBe(url);
  });
} 
);



/////////////////////////////////////////////////////////////////////////////////

describe('연속적인 url 테스트 converted 된 값을 다시 converted custom test', () => {
  const urll = "https://docs.github.com/en/actions";
  const customm = "custommomom"
  const url = urls.getConvertedUrlOrNULL(urll, customm);

  test('simple test', async () => {
    const convertedUrl  = await urls.getConvertedUrlOrNULL(url);
    console.log(convertedUrl);
    const orl  = await urls.getOriginalUrlOrNULL(convertedUrl)
    expect(orl).toBe(url);
  });

  test('emoji test', async () => {
        const convertedUrl  = await emoji.getConvertedEmojiUrlOrNULL(url);
        console.log(convertedUrl);
        const orl  = await urls.getOriginalUrlOrNULL(convertedUrl)
        expect(orl).toBe(url);
  });

  test('custom test', async () => {
        const custom = "custom";
        const convertedUrl  = await urls.getConvertedUrlOrNULL(url, custom);
        console.log(convertedUrl);
        const orl  = await urls.getOriginalUrlOrNULL(convertedUrl)
        expect(orl).toBe(url);
  });

  test('title test', async () => {
    const convertedUrl  = await title.getTitleConvertedUrlOrNULL(url);
    const orl  = await urls.getOriginalUrlOrNULL(convertedUrl)
    expect(orl).toBe(url);
  });
});



/////////////////////////////////////////////////////////////////////////////////


describe('연속적인 url 테스트 converted 된 값을 다시 converted title test', () => {
  const urll = "https://docs.github.com/en/actions";
  const customm = "custommomom"
  const url = urls.getConvertedUrlOrNULL(urll, customm);

  test('simple test', async () => {
    const convertedUrl  = await urls.getConvertedUrlOrNULL(url);
    console.log(convertedUrl);
    const orl  = await urls.getOriginalUrlOrNULL(convertedUrl)
    expect(orl).toBe(url);
  });

  test('emoji test', async () => {
        const convertedUrl  = await emoji.getConvertedEmojiUrlOrNULL(url);
        console.log(convertedUrl);
        const orl  = await urls.getOriginalUrlOrNULL(convertedUrl)
        expect(orl).toBe(url);
  });

  test('custom test', async () => {
        const custom = "custom";
        const convertedUrl  = await urls.getConvertedUrlOrNULL(url, custom);
        console.log(convertedUrl);
        const orl  = await urls.getOriginalUrlOrNULL(convertedUrl)
        expect(orl).toBe(url);
  });

  test('title test', async () => {
    const convertedUrl  = await title.getTitleConvertedUrlOrNULL(url);
    const orl  = await urls.getOriginalUrlOrNULL(convertedUrl)
    expect(orl).toBe(url);
  });
});

/////////////////////////////////////////////////////////////////////////////////


describe('매우긴 url에서의 작동', () => {
  const url = "https://www.google.com/search?q=%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84&sxsrf=AOaemvJjS3mxF0LMC15ItKD64ei8OcuHeQ%3A1637904355174&ei=42-gYaSMCo78wQOSqYnoAQ&ved=0ahUKEwjkiZCapbX0AhUOfnAKHZJUAh0Q4dUDCA4&uact=5&oq=%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84%EC%9C%BC%EC%95%84%EC%95%84%EC%95%84&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEOgQIABADOggILhCABBCxAzoICAAQgAQQsQM6CwgAEIAEELEDEIMBOgUILhCABEoECEEYAVCDCVj9JGD0JWgGcAB4A4ABrwGIAfEJkgEDMS44mAEAoAEBoAECwAEB&sclient=gws-wiz";
  test('simple test', async () => {
    const convertedUrl  = await urls.getConvertedUrlOrNULL(url);
    console.log(convertedUrl);
    const orl  = await urls.getOriginalUrlOrNULL(convertedUrl)
    expect(orl).toBe(url);
  });
  test('emoji test', async () => {
      const convertedUrl  = await emoji.getConvertedEmojiUrlOrNULL(url);
      console.log(convertedUrl);
      const orl  = await urls.getOriginalUrlOrNULL(convertedUrl)
      expect(orl).toBe(url);
  });
  test('custom test', async () => {
      const custom = "custom";
      const convertedUrl  = await urls.getConvertedUrlOrNULL(url, custom);
      console.log(convertedUrl);
      const orl  = await urls.getOriginalUrlOrNULL(convertedUrl)
      expect(orl).toBe(url);
    });
    test('title test', async () => {
      const convertedUrl  = await title.getTitleConvertedUrlOrNULL(url);
      const orl  = await urls.getOriginalUrlOrNULL(convertedUrl)
      expect(orl).toBe(url);
  });
  }
);



// 8. converted to original 저격 케이스
// - test url : https://docs.github.com/en/actions 을 actions 로 custom ~/actions
// - converted url로  https://docs.github.com/en/actions 을 제출시 맨끝 '/' actions  만 추출해서 reject되어야하는것이 값이 나오는지를 테스트.


describe(' converted to original 저격 케이스', () => {
  const url = " https://docs.github.com/en/actions";
  const custom = "actions"

  test('custom test', async () => {
      const convertedUrl  = await urls.getConvertedUrlOrNULL(url, custom);
      console.log(convertedUrl);
      const orl  = await urls.getOriginalUrlOrNULL(url)
      expect(orl).toBe(null);
    });
  }
);



/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////


//custom test
// 1. custom with emoji
// - test url : https://docs.github.com/en/actions
// - 2. 후 나온 이모지를 4. 로 custom 할시에 -> reject
// 2. custom with title
// - test url : https://docs.github.com/en/actions
// - 3. 후 나온 이모지를 4. 으로 custom 할시에 -> reject
// 3 custom 가능 문자열 테스트 X


describe('custom with simple', () => {
  const url = " https://docs.github.com/en/actions";
  const custom = "actions"
  
  test('custom test', async () => {
      const convertedUrl  = await urls.getConvertedUrlOrNULL(url, custom);
      console.log(convertedUrl);
      const orl  = await urls.getOriginalUrlOrNULL(url)
      expect(orl).toBe(null);
    });
  }
);


describe('custom with emoji', () => {
  const url = " https://docs.github.com/en/actions";
  const custom = "actions"

  test('custom test', async () => {
      const convertedUrl  = await urls.getConvertedUrlOrNULL(url, custom);
      console.log(convertedUrl);
      const orl  = await urls.getOriginalUrlOrNULL(url)
      expect(orl).toBe(null);
    });
  }
);






const convertedUrl = fullConvertedUrl.substring(fullConvertedUrl.lastIndexOf('/') + 1);