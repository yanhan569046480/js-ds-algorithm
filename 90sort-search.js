/**
 *  冒泡排序，时间复杂度O(n^2)
 */
Array.prototype.bubbleSort = function () {
    for (let i = 0; i < this.length - 1; i++) {
        for (let j = 0; j < this.length - i - 1; j++) {
            if (this[j] > this[j + 1]) {
                const temp = this[j];
                this[j] = this[j + 1];
                this[j + 1] = temp;
            }
        }
    }
};
const arr = [5, 4, 3, 2, 1];
arr.bubbleSort();

/**
 *  选择排序，时间复杂度O(n^2)
 */
Array.prototype.selectionSort = function () {
    for (let i = 0; i < this.length - 1; i++) {
        let indexMin = i;
        for (let j = 0; j < this.length; j++) {
            if (this[j] < this[indexMin]) {
                indexMin = j;
            }
        }
        const temp = this[i];
        this[i] = this[indexMin];
        this[indexMin] = temp;
    }
};
const arr = [5, 4, 3, 2, 1];
arr.selectionSort();

/**
 *  插入排序，时间复杂度O(n^2)
 */
Array.prototype.insertSort = function () {
    for (let i = 0; i < this.length; i++) {
        const temp = this[i];
        let j = i;
        while (j > 0) {
            if (this[j - 1] > temp) {
                this[j] = this[j - 1];
            } else {
                break;
            }
            j--;
        }
        this[j] = temp;
    }
};
const arr = [5, 4, 3, 2, 1];
arr.insertSort();

/**
 *  归并排序，时间复杂度O(N * logN)
 */
Array.prototype.mergeSort = function () {
    const rec = (arr) => {
        if (arr.length === 1) {
            return arr;
        }
        const mid = Math.floor(arr.length / 2);
        const left = arr.slice(0, mid);
        const right = arr.slice(mid, arr.length);
        const orderLeft = rec(left);
        const orderRight = rec(right);
        const res = [];
        while (orderLeft.length || orderRight.length) {
            if (orderLeft.length && orderRight.length) {
                res.push(orderLeft[0] < orderRight[0] ? orderLeft.shift() : orderRight.shift());
            } else if (orderLeft.length) {
                res.push(orderLeft.shift());
            } else if (orderRight.length) {
                res.push(orderRight.shift());
            }
        }
        return res;
    };
    const res = rec(this);
    res.forEach((n, i) => {
        this[i] = n;
    })
};
const arr = [5, 4, 3, 2, 1];
arr.mergeSort();

/**
 *  快速排序，时间复杂度O(N * logN)
 */
Array.prototype.quickSort = function () {
    const rec = (arr) => {
        if (arr.length === 1) {
            return arr;
        }
        const left = [];
        const right = [];
        const mid = arr[0];
        for (let i = 0; i < this.length; i++) {
            if (arr[i] < mid) {
                left.push(arr[i]);
            } else {
                right.push(arr[i]);
            }
        }
        return [...rec(left), mid, ...rec(right)];
    };
    const res = rec(this);
    res.forEach((n, i) => {
        this[i] = n;
    })
};
const arr = [2, 4, 5, 3, 1];
arr.quickSort();

/**
 *  顺序搜索，时间复杂度O(N)
 */
Array.prototype.sequentialSearch = function (item) {
    for (let i = 0; i < this.length; i++) {
        if (this[i] === item) {
            return i;
        }
    }
    return -1;
}
const res = [1, 2, 3, 4, 5].sequentialSearch(3);

/**
 *  二分搜索，时间复杂度O(N)
 */
Array.prototype.binarySearch = function (item) {
    let low = 0;
    let high = this.length - 1;
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        const element = this[mid];
        if (element < item) {
            low = mid + 1;
        } else if (element > item) {
            high = mid - 1;
        } else {
            return mid;
        }
    }
    return -1;
}
const res = [1, 2, 3, 4, 5].binarySearch(0);

/**
 *  合并两个有序链表
 */
var mergeTwoLists = function (l1, l2) {
    const res = new ListNode(0);
    let p = res;
    let p1 = l1;
    let p2 = l2;
    while (p1 && p2) {
        if (p1.val && p2.val) {
            p.next = p1;
            p1 = p1.next;
        } else {
            p.next = p2;
            p2 = p2.next;
        }
        p = p.next;
    }
    if (p1) {
        p.next = p1;
    }
    if (p2) {
        p.next = p2;
    }
    return res.next;
}

/**
 *  猜数字大小
 */
var guessNumber = function (n) {
    let low = 0;
    let high = n;
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        const res = guess(mid);
        if (res === 0) {
            return mid;
        } else if (res === 1) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
}