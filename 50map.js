/**
 * 字典基本用法
 */
const map = new Map();

/**
 * 增
 */
map.set('a', 'aa');
map.set('b', 'bb');

/**
 * 删
 */
map.delete('b');

/**
 * 改
 */
map.set('a', 'aaa');

/**
 * 求两个数组的交集
 */
var intersection = function (nums1, nums2) {
    const map = new Map();
    nums1.forEach(item => {
        map.set(item, true);
    })
    const res = [];
    nums2.forEach(item => {
        if (map.get(item)) {
            res.push(item);
            map.delete(item);
        }
    });
    return res;
};

/**
 * 有效的括号
 */
var isValid = function (s) {
    if (s.length % 2 === 1) {
        return false;
    }
    const stack = [];
    const map = new Map();
    map.set('(', ')');
    map.set('{', '}');
    map.set('[', ']');
    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        if (map.has(c)) {
            stack.push(c);
        } else {
            const t = stack[stack.length - 1];
            if (map.get(t) === c) {
                stack.pop();
            } else {
                return false;
            }
        }
    }
    return stack.length === 0;
}