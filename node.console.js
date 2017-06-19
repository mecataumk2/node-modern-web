/*console 객체*/
console.log('%d + %d = %d', 273, 52, 273 + 52, 52273);
console.log('%d + %d = %d & %d', 273, 52, 273 + 52);
console.log('숫자: %d + %d = %d', 273, 52, 273 + 52);
console.log('문자열: %s', 'Hello World...!', '특수문자와 상관 없음');
console.log('JSON: %j', {name: 'Mecataumk2'});

// 시간 측정 시작
console.time('timer1');
let output = 1;
for (let i=1; i <=10; i++){
    output *= i;
}
console.log('Result: ', output);

// 시간 측정 종료
console.timeEnd('timer1');

// 글자에 색 적용
console.log('\u001b[31m', 'Hello World...!');
console.log('\u001b[32m', 'Hello World...!');
console.log('\u001b[33m', 'Hello World...!');
console.log('\u001b[34m', 'Hello World...!');
console.log('\u001b[35m', 'Hello World...!');
console.log('\u001b[36m', 'Hello World...!');

// 글자에 밝은 색 적용
console.log('\u001b[1m');
console.log('\u001b[31m', 'Hello World...!');
console.log('\u001b[32m', 'Hello World...!');
console.log('\u001b[33m', 'Hello World...!');
console.log('\u001b[34m', 'Hello World...!');
console.log('\u001b[35m', 'Hello World...!');
console.log('\u001b[36m', 'Hello World...!');

// 글자 색 초기화
console.log('\u001b[0m');
console.log('\u001b[31m', 'Hello World...!');
console.log('\u001b[32m', 'Hello World...!');

// 글자 색 응용
console.log('\u001b[1m','\u001b[31m', 'Hello World...!');