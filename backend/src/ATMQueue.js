class ATMQueue {
    constructor() {
        this.queue = [];
    }

    enqueue(person) {
        this.queue.push(person);
    }

    dequeue() {
        return this.queue.shift();
    }

    isEmpty() {
        return this.queue.length === 0;
    }

    size() {
        return this.queue.length;
    }

    peek() {
        return this.queue[0];
    }
}

module.exports = ATMQueue;