const intersections = document.querySelectorAll('.intersection');
const links = document.querySelectorAll('.link');

const iOptions = {
    root: null,
    threshold: .5,
    rootMargin: "0px"
};

const iObserver = new IntersectionObserver(entries => {
    entries.forEach((entry) => {
        if(!entry.isIntersecting){
            console.log(entry.target);
            let targetId = entry.target.getAttribute('id');
            targetId = '#' + targetId;
            links.forEach(link => {
                const linkHref = link.getAttribute('href');

                if(targetId === linkHref){
                    link.classList.remove('active');
                }
            })
        }
        if(entry.isIntersecting){
            console.log(entry.target);
            let targetId = entry.target.getAttribute('id');
            targetId = '#' + targetId;
            
            links.forEach(link => {
                const linkHref = link.getAttribute('href');
                
                if(targetId === linkHref){
                    console.log(targetId);
                    console.log(linkHref);
                    link.classList.add('active');
                }
            })
        }
    })
}, iOptions);

intersections.forEach(intersection => {
    iObserver.observe(intersection);
})

