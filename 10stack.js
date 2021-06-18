/**
 * 基本用法
 */
const stack = [];
stack.push(1);
stack.push(2);
const item1 = stack.pop();
const item2 = stack.pop();

/**
 * 有效括号
 */
var isValid = function (s) {
    if (s.length % 2 === 1) {
        return false;
    }
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        if (c === '(' || c === '{' || c === '[') {
            stack.push(c);
        } else {
            const t = stack[stack.length - 1];
            if (
                (t === '(' && c === ')') ||
                (t === '{' && c === '}') ||
                (t === '[' && c === ']')
            ) {
                stack.pop();
            } else {
                return false;
            }
        }
    }
    return stack.length === 0;
}

/**
 * JS函数调用堆栈
 */
const func1 = () => {
    func2();
}
const func2 = () => {
    func3();
}
const func2 = () => {
}

func1();