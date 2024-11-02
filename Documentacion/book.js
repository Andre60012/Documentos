/**
 * A book with a title and an author.
 */
class Book {
    /**
     * Creates the Book class.
     *
     * @param {string} title - The title of the book.
     * @param {string} author - The author of the book.
     */
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }

    /**
     * Returns a formatted description of the book.
     *
     * @returns {string} A description of the book including the title and author.
     */
    getDescription() {
        return `${this.title} by ${this.author}`;
    }
}

const book = new Book("Harry Potter", "J.K. Rowling");
console.log(book.getDescription());
