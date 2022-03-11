let id = 0
export default class Task {

    constructor(text, priority, dueDate) {
        this.id = id++
        this.text = text
        this.priority = priority
        this.dueDate = dueDate
    }
}