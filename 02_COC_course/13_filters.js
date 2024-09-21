// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// //---->Method:1
// const mynums = arr.filter((num) => num > 4)
// console.log(mynums)

// //---->Method:2
// const mynums = arr.filter((num) => {       //when scope
//     return num > 4                                 // open then use 'return'
// })
// console.log(mynums)

// ++++ Example ++++ //
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2010 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

// const userbooks = books.filter((findbook) => findbook.genre === 'Science')
// console.log(userbooks)

// const userbooks = books.filter((findbook) => findbook.edition === 2010)
// console.log(userbooks)

const userbooks = books.filter((findbook) => {
    return findbook.genre === 'Science' && findbook.edition === 2010
})
console.log(userbooks)
