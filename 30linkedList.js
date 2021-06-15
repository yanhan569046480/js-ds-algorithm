/**
 * 基本用法
 */
const a = {
    val: 'a'
};
const b = {
    val: 'b'
};
const c = {
    val: 'c'
};
const d = {
    val: 'd'
};
a.next = b;
b.next = c;
c.next = d;

/**
 * 遍历链表
 */
let p = a;
while (p) {
    console.log(p.val);
    p = p.next;
}

/**
 * 插入
 */
const e = {
    val: 'e'
};
c.next = e;
e.next = d;

/**
 * 删除
 */
c.next = d;

/**
 * 删除链表中的节点
 */
var deleteNode = function (node) {
    node.val = node.next.val;
    node.next = node.next.next;
}

/**
 * 反转链表
 */
var reverseList = function (head) {
    let p1 = head;
    let p2 = null;
    while (p1) {
        const temp = p1.netx;
        p1.next = p2;
        p2 = p1;
        p1 = temp;
    }
    return p2;
}

/**
 * 两数相加
 */
var addTwoNumbers = function (l1, l2) {
    const l3 = new ListNode(0);
    let p1 = l1;
    let p2 = l2;
    let p3 = l3;
    let carry = 0;
    while (p1 || p2) {
        const v1 = p1 ? p1.val : 0;
        const v2 = p2 ? p2.val : 0;
        const val = v1 + v2 + carry;
        carry = Math.floor(val / 10);
        p3.next = new ListNode(val % 10);
        if (p1) p1 = p1.next;
        if (p2) p2 = p2.next;
        p3 = p3.next;
    }
    if (carry) {
        p3.next = new ListNode(carry);
    }
    return l3.next;
}

/**
 * 删除排序链表中的重复元素
 */
var deleteDuplicates = function (head) {
    let p = head;
    while (p && p.next) {
        if (p.val === p.next.val) {
            p.next = p.next.next;
        } else {
            p = p.next;
        }
    }
    return head;
}

/**
 * 环形链表
 */
var hasCycle = function (head) {
    let p1 = head;
    let p2 = head;
    while (p1 && p2 && p2.next) {
        p1 = p1.next;
        p2 = p2.next.next;
        if (p1 === p2) {
            return true;
        }
    }
    return false;
}

/**
 * JS中的原型链基本用法一
 */
const obj = {};
const func = () => {};
const arr = [];

/**
 * JS中的原型链基本用法二
 */
const obj = {};
Object.prototype.x = 'x';
const func = () => {};
Function.prototype.y = 'y';

/**
 * instanceOf
 */
const instanceOf = (A, B) => {
    let p = A;
    while (p) {
        if (p === B.prototype) {
            return true;
        }
        p = p.__proto__;
    }
    return false;
}

/**
 * 面试题
 */
var foo = {},
    F = function () {};

Object.prototype.a = 'value a';
Function.prototype.b = 'value b';

/**
 * 使用链表指针获取 JSON 的节点值
 */
const json = {
    a: {
        b: {
            c: 1
        }
    },
    d: {
        e: 2
    },
};

const path = ['d', 'e'];

let p = json;
path.forEach(key => {
    p = p[key];
});