const url = require('url');

const parsedObject = url.parse('http://hanbit.co.kr/store/books/look.php?p_code=B4250257160');
console.log(parsedObject);
// query를 객체로 리턴(querystring 모듈을 대체할 수 있음)
console.log(url.parse('http://hanbit.co.kr/store/books/look.php?p_code=B4250257160', true));
