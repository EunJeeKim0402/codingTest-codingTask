// 레벨 0
// https://school.programmers.co.kr/learn/courses/30/lessons/181829

/*
2차원 정수 배열 board와 정수 k가 주어집니다.
i + j <= k를 만족하는 모든 (i, j)에 대한 board[i][j]의 합을 return 하는 solution 함수를 완성해 주세요.
*/

function solution(board, k) {
    var answer = 0;
    
    for (let i=0; i<board.length; i++) {
        for (let j = 0; j < board[0].length; j += 1) {
            if (i + j <= k) {
                answer += board[i][j];
            }
        }
    }
    
    return answer;
}

/*
다른 풀이
*/