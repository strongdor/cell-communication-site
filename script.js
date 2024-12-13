document.addEventListener("DOMContentLoaded", () => {
    const backToTopButton = document.getElementById('backToTop');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        backToTopButton.style.display = 'inline-block';
      } else {
        backToTopButton.style.display = 'none';
      }
    });
  
    backToTopButton.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
  document.addEventListener("DOMContentLoaded", () => {
    const exploreBtn = document.querySelector(".explore-btn");

    exploreBtn.addEventListener("click", (e) => {
        e.preventDefault(); // Prevent the default jump to the section
        document.querySelector("#introduction").scrollIntoView({
            behavior: "smooth"
        });
    });
});
