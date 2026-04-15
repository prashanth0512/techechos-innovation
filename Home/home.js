
document.addEventListener('DOMContentLoaded', () => {


    const statsSection = document.querySelector('.stats-inner');
    const statNums = document.querySelectorAll('.stat-num');
    let animated = false;

    const countUp = (el) => {
        const target = parseInt(el.getAttribute('data-target'));
        const duration = 2000;
        let startTime = null;

        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            el.innerText = Math.floor(progress * target);
            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                el.innerText = target;
            }
        };
        requestAnimationFrame(animate);
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !animated) {
                statNums.forEach(num => countUp(num));
                animated = true;
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    if (statsSection && statNums.length > 0) {
        observer.observe(statsSection);
    }

    const faqs = document.querySelectorAll('.faq-item');
    faqs.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            faqs.forEach(f => {
                f.classList.remove('active');
                f.querySelector('.faq-answer').style.maxHeight = null;
            });
            
            if (!isActive) {
                item.classList.add('active');
                const answer = item.querySelector('.faq-answer');
                answer.style.maxHeight = answer.scrollHeight + 40 + "px";
            }
        });
    });
});
