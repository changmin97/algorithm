const solution = function(arr){
    let sort = arr.filter((a,b)=>true).sort((a,b)=>b-a)
    let answer = []
    for(let x of arr){
        answer.push(sort.indexOf(x)+1)
    }
    console.log(answer)
}
let arr=[87, 89, 92, 100, 76]
solution(arr)

//답지 answer배열을 [1,1,1,1,1]로 만들어두고 
// 이중반복문이용해서 점수 높은거 발견할떄마다 등수+1
// function solution(arr){  
//     let n=arr.length;
//!     let answer=Array.from({length:n}, ()=>1); 배열만드는거
//     for(let i=0; i<n; i++){
//         for(let j=0; j<n; j++){
//             if(arr[j]>arr[i]) answer[i]++;
//         }
//     }             
//     return answer;
// }

// let arr=[87, 89, 92, 100, 76]
// console.log(solution(arr));