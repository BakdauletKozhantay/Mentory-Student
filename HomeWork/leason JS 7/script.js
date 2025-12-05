const accordionBlocks = document.querySelectorAll('.accordion__block');

accordionBlocks.forEach(block => {
  const header = block.querySelector('.accordion__header');
  const content = block.querySelector('.accordion__content');
  const chevron = block.querySelector('img'); // стрелка

  // При загрузке — если открыт, выставить высоту
  if (block.getAttribute('accordion-state') === 'open') {
    content.style.maxHeight = content.scrollHeight + "px";
    chevron.style.transform = "rotate(180deg)";
  }

  block.addEventListener('click', (event) => {
    const isHeaderClick = header.contains(event.target);
    if (!isHeaderClick) return;

    const isOpen = block.getAttribute('accordion-state') === 'open';

    // Закрыть все аккордионы, кроме текущего
    accordionBlocks.forEach(other => {
      if (other !== block) {
        other.setAttribute('accordion-state', 'closed');
        const otherContent = other.querySelector('.accordion__content');
        const otherChevron = other.querySelector('img');

        otherContent.style.maxHeight = null;
        otherChevron.style.transform = "rotate(0deg)";
      }
    });

    // Открыть/закрыть текущий
    if (!isOpen) {
      block.setAttribute('accordion-state', 'open');
      content.style.maxHeight = content.scrollHeight + "px";
      chevron.style.transform = "rotate(180deg)";
    } else {
      block.setAttribute('accordion-state', 'closed');
      content.style.maxHeight = null;
      chevron.style.transform = "rotate(0deg)";
    }
  });
});
