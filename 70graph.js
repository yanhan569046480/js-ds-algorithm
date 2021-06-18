const graph = {
    0: [1, 2],
    1: [2],
    2: [0, 3],
    3: [3]
}

/**
 *  图的深度优先遍历
 */
const visited = new Set();
const dfs = (n) => {
    console.log(n);
    visited.add(n);
    graph[n].forEach(c => {
        if (!visited.has(c)) {
            dfs(c);
        }
    });
}
dfs(2);

/**
 *  图的广度优先遍历
 */
const visited = new Set();
const bfs = (a) => {
    visited.add(a);
    const q = [a];
    while (q.length) {
        const n = q.shift();
        console.log(n);
        graph[n].forEach(c => {
            if (!visited.has(c)) {
                q.push(c);
                visited.add(c);
            }
        });
    }
}
bfs(2);

/**
 *  有效数字
 */
var isNumber = function (s) {
    const graph = {
        0: {'blank': 0, 'sign': 1, '.': 2, 'digit': 6},
        1: {'digit': 6, '.': 2},
        2: {'digit': 3},
        3: {'digit': 3, 'e': 4},
        4: {'digit': 5, 'sign': 7},
        5: {'digit': 5},
        6: {'digit': 6, '.': 3, 'e': 4},
        7: {'digit': 5},
    }

    let state = 0;
    for (let c of s.trim()) {
        if (c >= '0' && c <= '9') {
            c = 'digit';
        } else if (c === ' ') {
            c = 'blank';
        } else if (c === '+' || c === '-') {
            c = 'sign';
        }
        state = graph[state][c]
        if (state === undefined) {
            return false;
        }
        if (state === 3 || state === 5 || state === 6) {
            return true;
        }
    }
}

/**
 *  太平洋大西洋水流问题
 */
var pacificAtlantic = function (matrix) {
    if (!matrix || !matrix[0]) {
        return [];
    }
    const m = matrix.length;
    const n = matrix[0].length;
    const flow1 = Array.from({length: m}, () => new Array(n).fill(false));
    const flow2 = Array.from({length: m}, () => new Array(n).fill(false));

    const dfs = (r, c, flow) => {
        flow[r][c] = true;
        [[r - 1, c], [r + 1, c], [r, c - 1], [r, c + 1]].forEach(([nr, nc]) => {
            if (
                nr >= 0 && nr <= m && nc >= 0 && nc < n && !flow[nr][nc] && matrix[nr][nc] >= matrix[r][c]
            ) {
                dfs(nr, nc, flow);
            }
        });
    }

    for (let r = 0; r < m; r++) {
        dfs(r, 0, flow1);
        dfs(r, n - 1, flow2);
    }
    for (let c = 0; c < n; c++) {
        dfs(0, c, flow1);
        dfs(m - 1, c, flow2);
    }

    const res = [];
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (flow1[r][c] && flow2[r][c]) {
                res.push([r, c]);
            }
        }
    }
    return res;
}

/**
 *  克隆图
 */
class Node {
    constructor(val, neighbors) {
        this.val = val;
        this.neighbors = neighbors;
    }
}

var cloneGraph = function (node) {
    if (!node) {
        return;
    }
    const visited = new Map();
    visited.set(node, new Node(node.val));
    const q = [node];
    while (q.length) {
        const n = q.shift();
        (n.neighbors || []).forEach(ne => {
            if (!visited.has(ne)) {
                q.push(ne);
                visited.set(ne, new Node(ne.val));
            }
            visited.get(n).neighbors.push(visited.get(ne));
        });
    }
    return visited.get(node);
}