export function FadeIn(className) {
    const element = document.querySelector(`${className}`);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const intersecting = entry.isIntersecting;
  
        if (intersecting) {
          entry.target.classList.remove("invisible");
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
          entry.target.classList.add("invisible");
        }
      });
  
    });
    observer.observe(element);
  }