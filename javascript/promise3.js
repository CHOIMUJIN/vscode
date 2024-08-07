// Promise 명령 처리
const promise1 = () => new Promise(
    resolve => setTimeout(() => resolve('promise1'), 3000)
);
const promise2 = () => new Promise(
    resolve => setTimeout(() => resolve('promise2'), 2000)
);
const promise3 = () => new Promise(
    resolve => setTimeout(() => resolve('promise3'), 1000)
);

let before = Date.now();
Promise.all([promise1(), promise2(), promise3()])
.then(console.log)
.then(() => console.log(Date.now() - before))
.catch(console.error);

// 마이크로태스크 큐
// Promise의 콜백 함수들은 마이크로태스크 큐에서 순차적으로 수행 됨
// 마이크로태스크 큐는 일반적인 태스크 큐보다 수행 우선 순위가 높음

// 태스크 큐에 배정
setTimeout(() => console.log('첫 번째 실행문'), 0);

// 마이크로태스크 큐에 배정
Promise.resolve()
.then(() => console.log('두 번째 실행문'))
.then(() => console.log('세 번째 실행문'));
