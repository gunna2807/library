function Book(name, author, pages, read) {
    this.name = name
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        return this.name + " by " + this.author +
               ", " + this.pages + " pages, " +
               this.read
    }
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 259, "not read yet");

console.log(theHobbit.info());