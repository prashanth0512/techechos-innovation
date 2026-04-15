

document.addEventListener('DOMContentLoaded', () => {
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
