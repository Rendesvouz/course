export const useScrollAnimation = () => {
    const observeElements = () => {
      if (import.meta.client) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add('visible')
              }
            })
          },
          { threshold: 0.1 }
        )
  
        const elements = document.querySelectorAll('.fade-in')
        elements.forEach((el) => observer.observe(el))
      }
  
      return { observeElements }
    }
  
    onMounted(() => {
      observeElements()
    })
  
    return { observeElements }
  }