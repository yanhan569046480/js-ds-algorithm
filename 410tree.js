let tree = {
    val: 'a',
    children: [{
            val: 'b',
            children: [{
                    val: 'd',
                    children: []
                },
                {
                    val: 'e',
                    children: []
                }
            ]
        },
        {
            val: 'c',
            children: [{
                    val: 'f',
                    children: []
                },
                {
                    val: 'g',
                    children: []
                }
            ]
        }
    ]
}

// 深度优先遍历
let dfs = (root) => {
    console.log(root.val);
    root.children.forEach(child => {
        dfs(child);
    })
}

// dfs(tree);

// 广度优先遍历
let bfs = (root) => {
    let queue = [root];
    while (queue.length > 0) {
        let node = queue.shift();
        console.log(node.val)
        node.children.forEach(child => {
            queue.push(child);
        })
    }
}

bfs(tree);