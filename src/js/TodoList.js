// import EventEmitter from 'events';
const EventEmitter = require('events').EventEmitter;

const STORAGE_KEY = 'todolist';

// export default class TodoList extends EventEmitter {
class TodoList extends EventEmitter {
    constructor (opts = {}) {
        super();
        
        this.list = this.loadList();
    }

    loadList () {
        const storage = localStorage.getItem(STORAGE_KEY);
        this.list = storage ? JSON.parse(storage) : [];
        return this.list;
    }    

    saveList () {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(this.list));
        this.emit('change', this.list);
    }

    find (id) {
        let matched;
        this.list.forEach((item) => {
            matched = (item.id == id) ? item : matched;
        });
        return matched;
    }

    add (item) {
        item.id = Date.now();
        item.date = item.date || new Date();
        
        this.list.push(item);
        this.saveList();
    }

    reduce (id) {
        const newList = [];
        this.list.forEach((item) => {
            if (item.id != id) {
                newList.push(item);
            }
        });
        this.list = newList;
        this.saveList();
    }

    saveItem (id, item) {
        this.list.forEach((item, index) => {
            if (item.id == id) {
                this.list[index] = item;
            }
        });
        this.saveList();
    }
};

module.exports = TodoList;
