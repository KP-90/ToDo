let count
if (localStorage.getItem("count")) {
    count = localStorage.getItem("count")
}
else {
    count = 0
    localStorage.setItem("count", 0)
}

export default class Task {

    constructor(text, priority, dueDate) {
        this.id = parseInt(count)
        count += 1
        localStorage.setItem("count", count)
        this.text = text
        this.priority = priority
        this.dueDate = dueDate
    }
}