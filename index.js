let message = document.querySelector('#message')

let form = document.querySelector('form')

const addMovie = (event) => {

    event.preventDefault()

    let inputField = document.querySelector('input')
    let movie =  document.createElement('li')
    let movieTitle =  document.createElement('span')
    movieTitle.textContent = inputField.value
    movieTitle.addEventListener('click', crossOffMovie)

    movie.appendChild(movieTitle)

    let deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'x'
    deleteBtn.addEventListener('click', deleteMovie)
    movie.appendChild(deleteBtn)

    inputField.value = ''
    
    return document.querySelector('ul').appendChild(movie)

    

} 
form.addEventListener('submit', addMovie)

const deleteMovie = (event) => {
    event.target.parentNode.remove() 
    message.textContent = `${event.target.parentNode.firstChild.textContent} deleted!`
    revalMessage()
}

const crossOffMovie = (event) => {
    event.target.classList.toggle('checked') 
    if(event.target.classList.contains('checked')){
        message.textContent = `${event.target.textContent} watched!`
    }else{
        message.textContent = `${event.target.textContent} added back`
    }
    revalMessage()
}

const revalMessage = () => {
    setTimeout(() => {
        message.classList.add('hide')
    }, 1000);
    message.classList.remove('hide')
}