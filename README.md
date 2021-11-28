# url-shortener


| API | HTTP 메서드 | 설명 |
| --- | --- | --- |
| url | POST | 단축 URL 생성하기|
| custom-url | POST | 원하는 단어로 단축 URL 생성하기|
| emoji-url | POST | 이모지로 단축 URL 생성하기|
| title-url | POST | 원본 문서의 타이틀 정보로 단축 URL 생성하기|
| original-url | GET | 단축 URL로 원본 URL 가져오기|


# 단축 URL 생성하기

## 설명

원본 URL을 `https://YOUR_DOMAIN.COM/url`과 같은 형태로 변환한 단축 URL 정보를 JSON 형식으로 반환합니다.

## 요청 URL

```
{
   "originalUrl": "www.google.com"
}
```

### HTTP 메서드

- POST

### POST body

| body | 타입 | 설명 |
| --- | --- | --- |
| originalUrl | String | 단축할 원본 URL |

### 요청 예 (SAMPLE REQUEST)

```bash

curl https://YOUR_DOMAIN.COM/url \
-d originalUrl = "www.google.com"
```

## 응답

응답에 성공하면 결괏값을 JSON 형식으로 반환합니다.

| 속성 | 타입 | 설명 |
| --- | --- | --- |
| message | string | 응답에 성공하면 ok
또는 오류 메시지를 반환 |
| status | string | HTTP 상태 코드 |
| data.id | string | 단축 URL의 해시 정보 |
| data.url | string | 단축된 URL |
| data.originalUrl | string | 원본 URL |
| data.createdTime | string | 단축 URL이 생성된 시간 |

### 응답 예

```
{
	"message":"ok",
	"status":"200",
  "data": {
		"id":"61a33012b2cf8248701fc65c",
		"url":"https://YOUR_DOMAIN.COM/my-cat",
		"originalUrl":"https://www.google.com/search?q=cat&newwindow=1&sxsrf=AOaemvIqIxvEfN6ZNsv7283UL2p36HTlZg:1638087698316&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjGifma0Lr0AhUur1YBHfoCAqAQ_AUoAXoECAIQAw&biw=1113&bih=796&dpr=2",
		"createdTime":"2021-11-28T07:30:26.424Z"
  }
}
```

---

## 오류 코드

단축 URL API의 주요 오류 코드는 다음과 같습니다.

| HTTP 상태 코드 | 오류 메시지 | 설명 |
| --- | --- | --- |
| 400 | Original url is invalid | 요청 originalUrl 에 오류가 있습니다. POST body 값형식을 확인해 주십시오. |
| 400 | Failed to save database | 서버 내부에 오류로 데이터베이스에 저장을 실패하였습니다. (IN Developing) |
| 404 | 404 Not Found | 요청 URL을 서버에서 찾을 수 없습니다. |
| 500 | Internal Server Error | 서버 내부에 오류가 발생했습니다. "개발자 포럼"에 오류를 신고해 주십시오. |

---


# 원하는 단어로 단축 URL 생성하기
## 설명

원본 URL과 사용자 지정 단어(customWord)를 POST 요청하면 원본 URL을`https://YOUR_DOMAIN.COM/customURL`과 같은 형태로 변환한 단축 URL 정보를 JSON 형식으로 반환합니다.

## 요청 URL (JSON)

```
{
   "originalUrl": "www.google.com"
   "customWord" : "gg"
}
```

### HTTP 메서드

- POST

### POST body

| body | 타입 | 설명 |
| --- | --- | --- |
| originalUrl | String | 단축할 원본 URL |
| customWord | String | 원하는 단축 단어 |

### 요청 예 (SAMPLE REQUEST)

```bash
curl https://YOUR_DOMAIN.COM/custom-url \
-d originalUrl = "www.google.com" \
-d customWord = "gg"
```

## 응답

응답에 성공하면 결괏값을 JSON 형식으로 반환합니다.

| 속성 | 타입 | 설명 |
| --- | --- | --- |
| message | string | 응답에 성공하면 ok
또는 오류 메시지를 반환 |
| status | string | HTTP 상태 코드 |
| data.id | string | 단축 URL의 해시 정보 |
| data.url | string | 단축된 URL |
| data.originalUrl | string | 원본 URL |
| data.createdTime | string | 단축 URL이 생성된 시간 |

### 응답 예

```
{
	"message":"ok",
	"status":"200",
  "data": {
		"id":"61a33012b2cf8248701fc65c",
		"url":"https://localhost/my-cat",
		"originalUrl":"https://www.google.com/search?q=cat&newwindow=1&sxsrf=AOaemvIqIxvEfN6ZNsv7283UL2p36HTlZg:1638087698316&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjGifma0Lr0AhUur1YBHfoCAqAQ_AUoAXoECAIQAw&biw=1113&bih=796&dpr=2",
		"createdTime":"2021-11-28T07:30:26.424Z"
  }
}
```

---

## 오류 코드

단축 URL API의 주요 오류 코드는 다음과 같습니다.

| HTTP 상태 코드 | 오류 메시지 | 설명 |
| --- | --- | --- |
| 400 | Original url is invalid | 요청 originalUrl 에 오류가 있습니다. POST body 값형식을 확인해 주십시오. |
| 400 | Custom word is invalid | 요청 customWord에 오류가 있습니다. POST body 값형식을 확인해 주십시오. |
| 400 | Custom word already uesd | CustomWord가 이미 존재합니다. 다른 CustomWord를 사용해주세요. |
| 404 | 404 Not Found | 요청 URL을 서버에서 찾을 수 없습니다. |
| 500 | Internal Server Error | 서버 내부에 오류가 발생했습니다. "개발자 포럼"에 오류를 신고해 주십시오. |

---



# 이모지로 단축 URL 생성하기

### 설명

원본 URL을 `https://yore-site/url`과 같은 형태로 변환한 단축 URL 정보를 JSON 형식으로 반환합니다.

### 요청 URL

```
{
   "originalUrl": "www.google.com"
}
```

### HTTP 메서드

- POST

### POST body

| body | 타입 | 설명 |
| --- | --- | --- |
| originalUrl | String | 단축할 원본 URL |

### 요청 예 (SAMPLE REQUEST)

```bash
curl https://your-url/emoji-url \
-d originalUrl = "www.google.com"
```

### 응답

응답에 성공하면 결괏값을 JSON 형식으로 반환합니다.

| 속성 | 타입 | 설명 |
| --- | --- | --- |
| message | string | 응답에 성공하면 ok
또는 오류 메시지를 반환 |
| status | string | HTTP 상태 코드 |
| data.id | string | 단축 URL의 해시 정보 |
| data.url | string | 단축된 URL |
| data.originalUrl | string | 원본 URL |
| data.createdTime | string | 단축 URL이 생성된 시간 |

### 응답 예

```
{
	"message":"ok",
	"status":"200",
  "data": {
		"id":"61a33012b2cf8248701fc65c",
		"url":"https://localhost/my-cat",
		"originalUrl":"https://www.google.com/search?q=cat&newwindow=1&sxsrf=AOaemvIqIxvEfN6ZNsv7283UL2p36HTlZg:1638087698316&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjGifma0Lr0AhUur1YBHfoCAqAQ_AUoAXoECAIQAw&biw=1113&bih=796&dpr=2",
		"createdTime":"2021-11-28T07:30:26.424Z"
  }
}
```

---

## 오류 코드

단축 URL API의 주요 오류 코드는 다음과 같습니다.

| HTTP 상태 코드 | 오류 메시지 | 설명 |
| --- | --- | --- |
| 400 | Original url is invalid | 요청 originalUrl 에 오류가 있습니다. POST body 값형식을 확인해 주십시오. |
| 400 | Failed to save database | 서버 내부에 오류로 데이터베이스에 저장을 실패하였습니다. (IN Developing) |
| 404 | 404 Not Found | 요청 URL을 서버에서 찾을 수 없습니다. |
| 500 | Internal Server Error | 서버 내부에 오류가 발생했습니다. "개발자 포럼"에 오류를 신고해 주십시오. |

---


# 원본 문서의 타이틀 정보로 단축 URL 생성하기

## 설명

원본 URL을 원본 사이트의 title 값을 가진 `https://YOUR_DOMAIN.COM/title`과 같은 형태로 변환한 단축 URL 정보를 JSON 형식으로 반환합니다.

## 요청 URL (JSON)

```
{
   "originalUrl": "www.google.com"
}
```

### HTTP 메서드

- POST

### POST body

| body | 타입 | 설명 |
| --- | --- | --- |
| originalUrl | String | 단축할 원본 URL |

### 요청 예 (SAMPLE REQUEST)

```bash
curl https://YOUR_DOMAIN.COM/title-url \
-d originalUrl = "www.google.com"
```

## 응답

응답에 성공하면 결괏값을 JSON 형식으로 반환합니다.

| 속성 | 타입 | 설명 |
| --- | --- | --- |
| message | string | 응답에 성공하면 ok
또는 오류 메시지를 반환 |
| status | string | HTTP 상태 코드 |
| data.id | string | 단축 URL의 해시 정보 |
| data.url | string | 단축된 URL |
| data.originalUrl | string | 원본 URL |
| data.createdTime | string | 단축 URL이 생성된 시간 |

### 응답 예

```
{
	"message":"ok",
	"status":"200",
  "data": {
		"id":"61a33012b2cf8248701fc65c",
		"url":"https://YOUR_DOMAIN.COM/my-cat",
		"originalUrl":"https://www.google.com/search?q=cat&newwindow=1&sxsrf=AOaemvIqIxvEfN6ZNsv7283UL2p36HTlZg:1638087698316&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjGifma0Lr0AhUur1YBHfoCAqAQ_AUoAXoECAIQAw&biw=1113&bih=796&dpr=2",
		"createdTime":"2021-11-28T07:30:26.424Z"
  }
}
```

---

## 오류 코드

단축 URL API의 주요 오류 코드는 다음과 같습니다.

| HTTP 상태 코드 | 오류 메시지 | 설명 |
| --- | --- | --- |
| 400 | Original url is invalid | 요청 originalUrl 에 오류가 있습니다. POST body 값형식을 확인해 주십시오. |
| 400 | Reject get title-url some reason | 버 내부 오류 또는 타이틀이 존재하지 않아 타이틀 url을 저장할 수 없습니다. (IN Developing) |
| 404 | 404 Not Found | 요청 URL을 서버에서 찾을 수 없습니다. |
| 500 | Internal Server Error | 서버 내부에 오류가 발생했습니다. "개발자 포럼"에 오류를 신고해 주십시오. |

---




# 단축 URL로 원본 URL 가져오기

## 설명

단축 URL을 요청시 원본 URL `https:/www.google.com`과 같은 형태의 원본 URL을 반환합니다.

## 요청 URL (JSON)

```
{
   "convertedUrl": "www.google.com"
}
```

:::danger Take care

요청 주소의 `:convertedUrl` 에 넘길 URL 문자열은 인코딩되어야 합니다.

:::

### HTTP 메서드

- GET

### POST body

| body | 타입 | 설명 |
| --- | --- | --- |
| originalUrl | String | 단축할 원본 URL |

### 요청 예 (SAMPLE REQUEST)

```bash
curl https://YOUR_DOMAIN.COM/original-url/:convertedUrl \
-d convertedUrl: "www.google.com"
```

## 응답

응답에 성공하면 결괏값을 JSON 형식으로 반환합니다.

| 속성 | 타입 | 설명 |
| --- | --- | --- |
| message | string | 응답에 성공하면 ok
또는 오류 메시지를 반환 |
| status | string | HTTP 상태 코드 |
| data.id | string | 단축 URL의 해시 정보 |
| data.url | string | 단축된 URL |
| data.originalUrl | string | 원본 URL |
| data.createdTime | string | 단축 URL이 생성된 시간 |

### 응답 예

```
{
	"message":"ok",
	"status":"200",
  "data": {
		"id":"61a33012b2cf8248701fc65c",
		"url":"https://YOUR_DOMAIN.COM/google",
		"originalUrl":"https://www.google.com",
		"createdTime":"2021-11-28T07:30:26.424Z"
  }
}
```

---

## 오류 코드

단축 URL API의 주요 오류 코드는 다음과 같습니다.

| HTTP 상태 코드 | 오류 메시지 | 설명 |
| --- | --- | --- |
| 400 | This is not a converted url | 요청 convertedURL이 존재하지 않습니다. convertedURL을 확인해주세요. |
| 400 | Reject get title-url some reason | 서버 내부 오류 또는 타이틀이 존재하지 않아 타이틀 url을 저장할 수 없습니다. (In Developing) |
| 404 | 404 Not Found | 요청 URL을 서버에서 찾을 수 없습니다. |
| 500 | Internal Server Error | 서버 내부에 오류가 발생했습니다. "개발자 포럼"에 오류를 신고해 주십시오. |

---