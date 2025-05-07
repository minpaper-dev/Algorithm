function solution(n, computers) {
    const visit_arr = Array(n).fill(false)
    let count = 0

    function dfs(node) {
        visit_arr[node] = true
        
        for(let next = 0; next < n; next++ ) {
            if(computers[node][next] === 1 && !visit_arr[next]) dfs(next)
        }
    }
    
    for(let i = 0; i < n; i++){
        // 방문하지 않았다면 탐색
        if(!visit_arr[i]){
            dfs(i)
            count++
        }
        
    }
    return count
    
    
}