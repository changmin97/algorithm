const solution = function(a,b,c){
    let min = a
    if( min > b ){
        min = b
    }
    if( min > c ){
        min = c
    }

    console.log(min)
}
solution(3,5,1)
