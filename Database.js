module.exports = class Database {
    #storage = {
        authors: [],
        books: [],
        posters: [],
        orders: [],
        users: []
    }

    find(key) {
        return this.#storage[key]
    }

    saveAuthor(author) {
        this.#storage.authors.push(author)
    }

    findBookByName(bookName) {
        return this.#storage.books.find(b => b.book === bookName)
    }

    saveBook(book) {
        const bookExits = this.findBookByName(book.name)
        if (!bookExits) {
            this.#storage.books.push(book)
        }
    }

    addBookToStock(bookName, quantity) {
        const book = this.findBookByName(bookName)
        book?.addToStock(quantity)
    }

    removeBooksFromStock(bookName, quantity) {
        const book = this.findBookByName(bookName)
        book?.removeFromStock(quantity)
    }

    findPosterByName(posterName) {
        return this.#storage.posters.find(b => b.poster === posterName)
    }

    savePoster(poster) {
        const posterExits = this.findPosterByName(poster.name)
        if (!posterExits) {
            this.#storage.posters.push(poster)
        }
    }

    addPosterToStock(posterName, quantity) {
        const poster = this.findPosterByName(posterName)
        poster?.addToStock(quantity)
    }

    removePostersFromStock(posterName, quantity) {
        const poster = this.findPosterByName(posterName)
        poster?.removeFromStock(quantity)
    }

    saveUser(user) {
        const userExists = this.#storage.users.find(u => u.email === user.email)
        if (!userExists) {
            this.#storage.users.push(user)
        }
    }

    saveOrder(order) {
        this.#storage.orders.push(order)
    }

    showStorage() {
        console.table(this.#storage.authors)
        console.table(this.#storage.books)
        console.table(this.#storage.orders)
        console.table(this.#storage.users)
        console.table(this.#storage.orders.map(order => order.data))
    }
}