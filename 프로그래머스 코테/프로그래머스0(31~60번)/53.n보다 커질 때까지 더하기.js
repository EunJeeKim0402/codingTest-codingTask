// 레벨 0
// https://school.programmers.co.kr/learn/courses/30/lessons/181884

/*
정수 배열 numbers와 정수 n이 매개변수로 주어집니다. 
numbers의 원소를 앞에서부터 하나씩 더하다가 그 합이 n보다 커지는 순간 
이때까지 더했던 원소들의 합을 return 하는 solution 함수를 작성해 주세요.
*/

function solution(numbers, n) {
    var answer = 0;
    
    for (let i=0; i<numbers.length; i++) {
        answer = answer + numbers[i];
        if (answer > n) {
            return answer;
            break;
        }
    }
    
    return answer;
}