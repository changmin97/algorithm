const solution = function(day,arr){
    let count = 0
    for(let i = 0; i < arr.length; i++){
        if((arr[i]+"").split("")[1] === day+"" ){
            count++
        }
    }
    console.log(count)
}
const arr = [25,23,11,47,53,17,33]
solution(3,arr)

//답지
// function solution(day, arr){
//     let answer=0;
//     for(let x of arr){
//!    if(x%10==day) answer++   일의자리 이렇게 구함 2536%10 = 6
//     }
    
//     return answer;
// }

// arr=[25, 23, 11, 47, 53, 17, 33];
// console.log(solution(3, arr));