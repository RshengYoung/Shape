class Iterator<T> {
    private arguments: T[]
    private index: number

    constructor(args: T[]) {
        this.arguments = args
        this.index = 0
    }

    first(): T {
        this.index = 0
        return this.arguments[this.index]
    }

    next(): T {
        this.index ++
        return this.arguments[this.index]
    }

    currentItem(): T {
        if (this.index >= this.arguments.length || this.index < 0)
            throw "Error: The index is illegal."
        return this.arguments[this.index]
    }

    isDone(): Boolean {
        return this.index >= this.arguments.length - 1
    }
}


export default Iterator