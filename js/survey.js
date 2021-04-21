// UI elements
const UIstartBtn = document.querySelector('#start');
const UIsubmitBtn = document.querySelector('#submit');
const UIbackBtn = document.querySelector('.form__btn--back');
const UInextBtn = document.querySelector('.form__btn--next');
const UIbody = document.querySelector('body');
const UIheader = document.querySelector('header');
const UIsections = document.querySelectorAll('.form__section');
const UIboxForm = document.querySelector('div.box');
const UIform = document.querySelector('form');
const UIprogressbarSteps = document.querySelectorAll('.progressbar__step');
const UIcredits = document.getElementById('credits');

let currentTab;

function enableBtn(btn){
    btn.removeAttribute('disabled');
    btn.removeAttribute('aria-hidden');
    btn.classList.remove('invisible');
}

function disbableBtn(btn){
    btn.setAttribute('disabled','');
    btn.setAttribute('aria-hidden', 'true');
    btn.classList.add('invisible');
}

function nextSection(e){
    e.preventDefault();

    if(currentTab < UIsections.length - 1){
        currentTab ++;
        enableBtn(UIbackBtn);
        if(currentTab === UIsections.length - 1){
            disbableBtn(UInextBtn);
        }
        UIprogressbarSteps[currentTab].classList.add('active');
        UIsections[currentTab - 1].classList.add('hidden');
        UIsections[currentTab].classList.remove('hidden');
    }
}

function prevSection(e){
    e.preventDefault();
    if(currentTab > 0){
        currentTab --;
        enableBtn(UInextBtn);
        if(currentTab === 0){
            disbableBtn(UIbackBtn);
        }
        UIprogressbarSteps[currentTab + 1].classList.remove('active');
        UIsections[currentTab + 1].classList.add('hidden');
        UIsections[currentTab].classList.remove('hidden');
    }
}

// Event listeners
UIstartBtn.addEventListener('click', e => {
    e.preventDefault();
    UIheader.classList.add('hidden');
    UIbody.classList.add('start');
    UIboxForm.classList.remove('hidden');
    UIcredits.classList.add('hidden');

    disbableBtn(UIbackBtn);

    UIprogressbarSteps[0].classList.add('active');

    currentTab = 0;
    console.log('click')
    
});

UInextBtn.addEventListener('click', nextSection);
UIbackBtn.addEventListener('click', prevSection);
UIsubmitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    UIbody.classList.remove('start');
    UIbody.classList.add('end');
    UIboxForm.classList.remove('box--content');
    UIcredits.classList.remove('hidden');
    UIboxForm.innerHTML = '<p class="header__description">Thank you!</p>';

});