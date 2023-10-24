const navIntersection = document.getElementById('landing-nav');
const mainHeader = document.getElementById('main-header');

const options = {
    root: null,
    threshold: 0,
    rootMargin: "0px"
};

const observer = new IntersectionObserver(entries => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            // console.log(entry.isIntersecting);
            // console.log(mainHeader);
            mainHeader.classList.remove('active');
        } else {
            // console.log(entry.isIntersecting);
            // console.log(mainHeader);
            mainHeader.classList.add('active');
        }
    })
}, options);

observer.observe(navIntersection);
