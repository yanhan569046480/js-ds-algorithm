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

/**
 * 深度优先遍历
 */
let dfs = (root) => {
    console.log(root.val);
    root.children.forEach(child => {
        dfs(child);
    })
}
dfs(tree);

/**
 * 广度优先遍历
 */
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

const bt = {
    val: 1,
    left:{
        val: 2,
        left:{
            val: 4,
            left:null,
            right:null
        },
        right:{
            val: 5,
            left:null,
            right:null
        }
    },
    right:{
        val: 3,
        left:{
            val: 6,
            left:null,
            right:null
        },
        right:{
            val: 7,
            left:null,
            right:null
        }
    }
}
/**
 * 二叉樹先序遍历（递归版）
 */
const preorder = (root)=>{
    if(!root) {return;}
    console.log(root.val);
    preorder(root.left);
    preorder(root.right);
}
/**
 * 二叉樹先序遍历（非递归版）
 */
const preorder2 = (root)=>{
    if(!root) {return;}
    const stack = [root];
    while (stack.length){
        const n = stack.pop();
        console.log(n.val);
        if(n.right) stack.push(n.right);
        if(n.left) stack.push(n.left);
    }
}
preorder(bt);
preorder2(bt);

/**
 * 二叉樹中序遍历（递归版）
 */
const inorder = (root)=>{
    if(!root) {return;}
    inorder(root.left);
    console.log(root.val);
    inorder(root.right);
}
/**
 * 二叉樹中序遍历（非递归版）
 */
const inorder2 = (root)=>{
    if(!root) {return;}
    const stack = [];
    let p = root;
    while (stack.length || p){
        while (p){
            stack.push(p);
            p = p.left;
        }
        const n = stack.pop();
        console.log(n.val);
        p = n.right;
    }
}
inorder(bt);
inorder2(bt);

/**
 * 二叉樹后序遍历（递归版）
 */
const postorder = (root)=>{
    if(!root) {return;}
    postorder(root.left);
    postorder(root.right);
    console.log(root.val);
}
/**
 * 二叉樹后序遍历（非递归版）
 */
const postorder2 = (root)=>{
    if(!root) {return;}
    const outputStack = [];
    const stack = [root];
    while (stack.length){
        const n = stack.pop();
        outputStack.push(n);
        if(n.right) stack.push(n.right);
        if(n.left) stack.push(n.left);
    }
    while (outputStack.length){
        const n = outputStack.pop();
        console.log(n.val);
    }
}
postorder(bt);
postorder2(bt);

/**
 * 二叉樹的最大深度
 */
var maxDepth = function (root) {
    let res = 0;
    const dfs = (n, l)=>{
        if(!n){return;}
        if(!n.left && !n.right){
            res = Math.max(res, l);
        }
        dfs(n.left, l + 1);
        dfs(n.right, l + 1);
    };
    dfs(root, 1);
    return res;
}

/**
 * 二叉樹的最小深度
 */
var minDepth = function (root) {
    if(!root){return 0;}
    const q = [[root, 1]];
    while (q.length){
        const [n, l] = q.shift();
        if(!n.left && !n.right){
            return l;
        }
        if(n.left) q.push([n.left, l + 1]);
        if(n.right) q.push([n.right, l + 1]);
    }
}

/**
 * 二叉樹的层序遍历
 */
var levelOrder = function (root) {
    if(!root) return [];
    const q = [root];
    const res = [];
    while (q.length){
        let len = q.length;
        res.push([]);
        while (len--){
            const n = q.shift();
            res[res.length - 1].push(n.val);
            if(n.left) q.push(n.left);
            if(n.right) q.push(n.right);
        }
    }
    return res;
}

/**
 * 二叉樹的中序遍历（LeetCode）
 */
var inorderTraversal = function (root) {
    const res = [];
    const stack = [];
    let p = root;
    while (stack.length || p){
        while (p){
            stack.push(p);
            p = p.left;
        }
        const n = stack.pop();
        res.push(n.val);
        p = n.right;
    }
    return res;
}

/**
 * 路径总和（LeetCode）
 */
var hasPathSum = function (root, sum) {
    if(!root) return false;
    let res = false;
    const dfs = (n, s)=>{
        if(!n.left && !n.right && s === sum){
            res = true;
        }
        if(n.left) dfs(n.left, s + n.left.val);
        if(n.right) dfs(n.right, s + n.right.val);
    };
    dfs(root, root.val);
    return res;
}

/**
 * 遍历JSON的所有节点值
 */
const json = {
    a: { b: { c:1 }},
    d: [1, 2]
}
const dfs = (n, path) => {
    console.log(n, path);
    Object.keys(n).forEach(k => {
        dfs(n[k], path.concat(k))
    })
};
dfs(json, []);