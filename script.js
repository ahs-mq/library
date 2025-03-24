let mylib= [];
let sub= document.getElementById("submit");

function AddBook(title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
        return `${this.title} by ${this.author}, ${this.pages} pages , ${read}`
    };
}

function addBooktoLibrary(){
    let book = {};
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.querySelector('input[name=readstatus]:checked').value;
    let details = new AddBook(title,author,pages,read);
    book['id'] = crypto.randomUUID();
    book['Title'] = details.title;
    book['author'] = details.author;
    book['pages'] = details.pages;
    book['read'] = details.read;
    mylib.push(book);
    let table = document.getElementById("shelf");
    let row = table.insertRow(-1);
    let c1 = row.insertCell(0);
    let c2 = row.insertCell(1);

    c1.innerText = details.info();

    let remove = document.createElement("button");
    remove.style.backgroundColor = "#d65f51"
    remove.style.fontFamily = "Baskervville, serif";
    remove.style.fontWeight = "600";
    remove.style.fontSize = "1.5rem";
    remove.style.padding = "3px";
    remove.textContent = "Delete Book";
    remove.addEventListener("click",()=>
    {
        if (row.rowIndex > 0){
            table.deleteRow(row.rowIndex);
            mylib.splice(row.rowIndex - 1, 1);
        }
    })

    c2.appendChild(remove);
}

sub.addEventListener("click", function(event) {
    event.preventDefault();
    addBooktoLibrary();
}
);