class Book {
constructor(
    title,
    author,
    copyrightDate,
    ISBN,
    numberOfPages,
    NUC,
    discarded
) {
    this.title = title;
    this.author = author;
    this.copyrightDate = copyrightDate;
    this.ISBN = ISBN;
    this.numberOfPages = numberOfPages;
    this.NUC = NUC;
    this.discarded =discarded;
}
checkout(uses =1) {
    this.NUC += uses;
}
}

class Manual extends Book {
constructor(
    title,
    author,
    copyrightDate,
    ISBN,
    numberOfPages,
    NUC,
    discarded
){ super(title, author, copyrightDate, ISBN, numberOfPages, NUC, discarded)
}
    dispose(currentYear){
        if(currentYear -this.copyrightDate > 5){
            this.discarded = "Yes";
        }
    }
}
const myManual = new Manual("Top Secret Shuttle Building Manual", "Redacted", 2013, 0000000000000, 1147, 1, "No");

class Novel extends Book {
constructor(
    title,
    author,
    copyrightDate,
    ISBN,
    numberOfPages,
    NUC,
    discarded
){super(title, author, copyrightDate, ISBN, numberOfPages, NUC, discarded)
}
    discard(){
        if(this.NUC > 100){
            this.discarded = "Yes";
        }
    }
}
const myNovel = new Novel("Pride and Prejudice", "Jane Austen", 1813, 1111111111111, 432, 32, "No");

myNovel.checkout(5);
myNovel.discard();
console.log(myNovel);

myManual.dispose(2023);
console.log(myManual);