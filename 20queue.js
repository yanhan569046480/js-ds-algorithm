/**
 * 基本用法
 */
const queue = [];
queue.push(1);
queue.push(2);
const item1 = queue.shift();
const item2 = queue.shift();

/**
 * 最近的请求次数
 */
var RecentCounter = function () {
    this.queue = [];
}

RecentCounter.prototype.ping = function (t) {
    this.queue.push(t);
    while (this.queue[0] < t - 3000) {
        this.queue.shift();
    }
    return this.queue.length;
}

/**
 * 事件循环与任务队列
 */