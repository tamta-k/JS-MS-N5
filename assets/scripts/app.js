const addMovieModel = document.getElementById ('add-modal');
const startAddMovieButon = document.querySelector ('header button');

const backdrop = document.getElementById('backdrop');
const cancelAddMovieButton = addMovieModel.querySelector('.btn--passive');
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
const userInput = document.querySelectorAll ('input');
const entryTextSection = document.getElementById ('entry-text');

const movies = [];

const updateUI= () => {

};

const toogleBackdrop = () => {
    backdrop.classList.toggle('visible');
};

const toggleMovieModal = () => {
    //addMovieModel.className = 'model card';
    addMovieModel.classList.toggle('visible');
    toogleBackdrop();
};

const clearMovieInput = () => {
    for (const usrInput of userInput){
        usrInput.value = '';
    }
};


const cancelAddMovieHandler = () => {
    toggleMovieModal()
};

const addMovieHandler = () => {
    const titleValue = userInput [0].value;
    const ImageValue = userInput [1].value;
    const ratingValue = userInput [2].value;

    if (titleValue.trim() === '' || ImageValue.trim() === '' || ratingValue.trim() === ''  || +ratingValue < 1 || +ratingValue > 5) {
        alert ('Please enter valid value \n *Rating beetwin 1 and 5');
        return;
    }

    const newMovie = {
        title: titleValue,
        image: ImageValue,
        rating: ratingValue
    };

    movies.push(newMovie);
    console.log (movies);
    toggleMovieModal();
    clearMovieInput();
};

const backdropClickHandler = () => {
    toggleMovieModal();
};


startAddMovieButon.addEventListener('click', toggleMovieModal);
backdrop.addEventListener('click', backdropClickHandler);
cancelAddMovieButton.addEventListener ('click', cancelAddMovieHandler);
confirmAddMovieButton.addEventListener ('click', addMovieHandler);