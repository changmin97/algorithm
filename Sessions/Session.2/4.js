const solution = function(arr){
    let plus = 0
    let answer = 0
    for(let x of arr){
        if(x === 0){
            plus = 0
            continue
        }
        plus++
        answer += plus
    }
    console.log(answer)
}
let arr=[1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
solution(arr)


//답지
// function solution(arr){         
//     let answer=0, cnt=0;
//     for(let x of arr){
//         if(x===1){
//             cnt++;
//             answer+=cnt;
//         }
//         else cnt=0;
//     }
       
//     return answer;
// }

// let arr=[1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
// console.log(solution(arr));