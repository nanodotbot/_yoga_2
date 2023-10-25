const blutIntersection = document.querySelectorAll('.blur-intersecting');

const blurOptions = {
    root: null,
    threshold: .5,
    rootMargin: "0px"
};

const blurObserver = new IntersectionObserver(entries => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('active');
            // console.log('intersecting:', entry.target);
        } else {
            entry.target.classList.remove('active');
            // console.log('not intersecting:', entry.target);
        }
    })
}, blurOptions);

blutIntersection.forEach(intersection => {
    blurObserver.observe(intersection);
});