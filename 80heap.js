/**
 *  最小堆类
 */
class MinHeap {
    constructor() {
        this.heap = [];
    }

    swap(i1, i2) {
        const temp = this.heap[i1];
        this.heap[i1] = this.heap[i2];
        this.heap[i2] = temp;
    }

    getParentIndex(i) {
        return (i - 1) >> 1;
    }

    getLeftIndex(i) {
        return i * 2 + 1;
    }

    getRightIndex(i) {
        return i * 2;
    }

    shiftUp(index) {
        const parentIndex = this.getParentIndex(index);
        if (this.heap[parentIndex] && this.heap[parentIndex] > this.heap[index]) {
            this.swap(parentIndex, index);
            this.shiftUp(parentIndex);
        }
    }

    shiftDown(index) {
        const leftIndex = this.getLeftIndex(index);
        const rightIndex = this.getRightIndex(index);
        if (this.heap[leftIndex] && this.heap[leftIndex] < this.heap[index]) {
            this.swap(leftIndex, index);
            this.shiftDown(leftIndex);
        }
        if (this.heap[rightIndex] && this.heap[rightIndex] < this.heap[index]) {
            this.swap(rightIndex, index);
            this.shiftDown(rightIndex);
        }
    }

    insert(value) {
        this.heap.push(value);
        this.shiftUp(this.heap.length - 1);
    }

    pop() {
        this.heap[0] = this.heap.pop();
        this.shiftDown(0);
    }

    peek() {
        return this.heap[0];
    }

    size() {
        return this.heap.length;
    }
}

const minHeap = new MinHeap();
minHeap.insert(3);
minHeap.insert(2);
minHeap.insert(1);
minHeap.pop();

/**
 *  数组中第K个最大元素
 */
var findKthLargest = function (nums, k) {
    const h = new MinHeap();
    nums.forEach(n => {
        h.insert(n);
        if (h.size() > k) {
            h.pop();
        }
    });
    return h.peek();
};

/**
 *  数组中前K个高频元素，时间复杂度O(N * logN)
 */
var topKFrequent = function (nums, k) {
    const map = new Map();
    nums.forEach(n => {
        map.set(n, map.has(n) ? map.get(n) + 1 : 1);
    });
    const list = Array.from(map).sort((a, b) => b[1] - a[1]);
    return list.slice(0, k).map(n => n[0]);
};
/**
 *  数组中前K个高频元素，时间复杂度O(N * logK)，K比N小，所以此算法更优
 */
var topKFrequent = function (nums, k) {
    const map = new Map();
    nums.forEach(n => {
        map.set(n, map.has(n) ? map.get(n) + 1 : 1);
    });
    const h = new MinHeap();
    map.forEach((value, key) => {
        h.insert({value, key});
        if (h.size() > k) {
            h.pop();
        }
    });
    return h.heap.map(a => a.key);
};

/**
 *  合并K个排序链表
 */
class ListNode {
    constructor(val, next) {
        this.val = val;
        this.next = next;
    }
}

var mergeKLists = function (lists) {
    const res = new ListNode(0);
    let p = res;
    const h = new MinHeap();
    lists.forEach(l => {
        if (l) {
            h.insert(l);
        }
    });
    while (h.size()) {
        const n = h.pop();
        p.next = n;
        p = p.next;
        if (n.next) {
            h.insert(n.next);
        }
    }
    return res.next;
};