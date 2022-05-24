window.addEventListener('scroll', onScroll) /*tirou o onScroll do body e colocou diretamente na window para parar de dar o erro no console em que a página tentava dar o scroll antes de carregar tudo*/

onScroll()
function onScroll () {
    showNavOnScroll()
    showBackToTopButtonOnScroll()

    activateMenuAtCurrentSection(home)
    activateMenuAtCurrentSection(services)
    activateMenuAtCurrentSection(about)
    activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
    // linha alvo
    const targetLine = scrollY + innerHeight / 2

    // Verificar se a seção passou da linha
    // quais dados vou precisar?

    // o topo da seção
    const sectionTop = section.offsetTop

    // a altura da seção
    const sectionHeight = section.offsetHeight

    // o topo da seção chegou ou ultrapassou a linha alvo
    const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

    // verificar se a base está abaixo da linha alvo
    // quais dados vou precisar?

    // a seção termina onde?

    const sectionEndsAt = sectionTop + sectionHeight

    // o final da seção passou da linha alvo
    const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

    // limites da seção
    const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

    const sectionId = section.getAttribrute('id')
    const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`) /*colocando função dentro de string. Coloque a string com acento grave (crase) e depois o dolar e colchetes (esse dolar chama-se interpolação)*/
    /*Aqui ele está pegando o atributo id da seção home do html???*/

    menuElement.classList.remove('active')
    if(sectionBoundaries) {
        menuElement.classList.add('active')
    }    
}

function showNavOnScroll(){
    if(scrollY > 0) {
        navigation.classList.add('scroll')
    } else {
        navigation.classList.remove('scroll')
    }
}

function showBackToTopButtonOnScroll(){
    if(scrollY > 550) {
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
}

function openMenu() { //pega o body e adiciona a classe expanded
    document.body.classList.add('menu-expanded')

}

function closeMenu() { //em 1:54 do video 2/5 ele ensina como fazer isso, mas no meu não está fechando
    document.body.classList.remove('menu-expanded')

}

ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
}).reveal(`
#home',
#home img,
#home .stats,
#services,
services header,
services .card,
#about,
#about header,
#about .content`) 
/*Template literals = ao colocar o acento agudo ele permite quebrar a linha para organizar melhor*/

function sayMyName() {
    console.log (name)
}
