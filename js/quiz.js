// Quiz engine — handles .quiz-block elements injected into topic pages
function initQuizzes(container) {
  container.querySelectorAll('.quiz-block').forEach(block => {
    const options = block.querySelectorAll('.quiz-option');
    const feedback = block.querySelector('.quiz-feedback');
    let answered = false;

    options.forEach(opt => {
      opt.addEventListener('click', () => {
        if (answered) return;
        answered = true;

        const correct = opt.dataset.correct === 'true';
        const explanation = block.dataset.explanation || '';

        options.forEach(o => {
          o.classList.add('disabled');
          if (o.dataset.correct === 'true') o.classList.add('correct');
        });

        opt.classList.add(correct ? 'correct' : 'incorrect');

        if (feedback) {
          feedback.textContent = correct
            ? '✓ Correct! ' + explanation
            : '✗ Not quite. ' + explanation;
          feedback.className = 'quiz-feedback show ' + (correct ? 'correct' : 'incorrect');
        }
      });
    });
  });
}

// Auto-init on DOMContentLoaded for any quizzes already in the page
document.addEventListener('DOMContentLoaded', () => {
  initQuizzes(document);
});
