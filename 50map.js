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

/**
 * 两数之和
 */
var twoSum = function (nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const n = nums[i];
        const n2 = target - n;
        if (map.has(n2)) {
            return [map.get(n2), i];
        } else {
            map.set(n, i);
        }
    }
}

/**
 * 无重复字符的最长子串
 */
var lengthOfLongestSubstring = function (s) {
    let l = 0;
    let res = 0;
    const map = new Map();
    for (let r = 0; r < s.length; r++) {
        if (map.has(s[r]) && map.get(s[r]) >= 1) {
            l = map.get(s[r]) + 1;
        }
        res = Math.max(res, r - l + 1);
        map.set(s[r], r);
    }
    return res;
}

/**
 * 最小覆盖子串
 */
var minWindow = function (s, t) {
    let l = 0;
    let r = 0;
    const need = new Map();
    for (let c of t) {
        need.set(c, need.has(c) ? need.get(c) + 1 : 1)
    }
    let needType = need.size;
    let res = '';
    while (r < s.length) {
        const c = s[r];
        if (need.has(c)) {
            need.set(c, need.get(c) - 1);
            if (need.get(c) === 0) needType -= 1;
        }
        while (needType === 0) {
            const newRes = s.substring(l, r + 1);
            if (!res || newRes.length < res.length) res = newRes;
            const c2 = s[l];
            if (need.has(c2)) {
                need.set(c2, need.get(c2) + 1);
                if (need.get(c2) === 1) needType += 1;
            }
            l += 1;
        }
        r += 1;
    }
    return res;
}