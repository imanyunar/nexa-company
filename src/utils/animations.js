import anime from 'animejs'

// Check if user prefers reduced motion
export const prefersReducedMotion = () => {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

// ═══════════════════════════════════════════
// SCROLL-REVEAL (IntersectionObserver-based)
// ═══════════════════════════════════════════
// Observes elements and triggers fade+slide animation when they enter the viewport.
// Usage: call once in onMounted with a CSS selector.

export const observeScrollReveal = (selector, options = {}) => {
  if (prefersReducedMotion()) return

  const {
    threshold = 0.12,
    rootMargin = '0px 0px -60px 0px',
    stagger = 100,
    distance = 40,
    duration = 700,
    easing = 'easeOutCubic'
  } = options

  const elements = document.querySelectorAll(selector)
  if (!elements.length) return

  // Set initial hidden state
  elements.forEach((el) => {
    el.style.opacity = '0'
    el.style.transform = `translateY(${distance}px)`
  })

  const observer = new IntersectionObserver(
    (entries) => {
      const visibleEntries = entries.filter((e) => e.isIntersecting)
      if (!visibleEntries.length) return

      visibleEntries.forEach((entry, idx) => {
        observer.unobserve(entry.target)
        anime({
          targets: entry.target,
          opacity: [0, 1],
          translateY: [distance, 0],
          easing,
          duration,
          delay: idx * stagger
        })
      })
    },
    { threshold, rootMargin }
  )

  elements.forEach((el) => observer.observe(el))

  return observer
}

// ═══════════════════════════════════════════
// STAGGERED FADE IN (instant, no scroll observation)
// ═══════════════════════════════════════════
export const animateStaggerFadeIn = (targets, options = {}) => {
  if (prefersReducedMotion()) return
  return anime({
    targets,
    opacity: [0, 1],
    translateY: [24, 0],
    easing: 'easeOutCubic',
    duration: options.duration || 800,
    delay: anime.stagger(options.stagger || 100, { start: options.delay || 150 }),
    ...options
  })
}

// ═══════════════════════════════════════════
// HERO ENTRANCE ANIMATION
// ═══════════════════════════════════════════
export const animateHeroEntrance = ({ headline, subtitle, cta, visual }) => {
  if (prefersReducedMotion()) return
  const tl = anime.timeline({
    easing: 'easeOutCubic'
  })

  if (headline) {
    tl.add({
      targets: headline,
      opacity: [0, 1],
      translateY: [40, 0],
      duration: 900
    })
  }

  if (subtitle) {
    tl.add(
      {
        targets: subtitle,
        opacity: [0, 1],
        translateY: [25, 0],
        duration: 700
      },
      '-=550'
    )
  }

  if (cta) {
    tl.add(
      {
        targets: cta,
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 600
      },
      '-=450'
    )
  }

  if (visual) {
    tl.add(
      {
        targets: visual,
        opacity: [0, 1],
        translateX: [60, 0],
        scale: [0.96, 1],
        duration: 900,
        easing: 'easeOutQuart'
      },
      '-=700'
    )
  }

  return tl
}

// ═══════════════════════════════════════════
// SVG STROKE DRAWING
// ═══════════════════════════════════════════
export const animateStrokeDraw = (pathElement, duration = 1600) => {
  if (prefersReducedMotion() || !pathElement) return
  const pathLength = pathElement.getTotalLength ? pathElement.getTotalLength() : 2000
  pathElement.style.strokeDasharray = pathLength
  pathElement.style.strokeDashoffset = pathLength

  return anime({
    targets: pathElement,
    strokeDashoffset: [pathLength, 0],
    easing: 'easeInOutQuad',
    duration,
    delay: 200
  })
}

// ═══════════════════════════════════════════
// SECTION HEADER REVEAL  (text wipe-up)
// ═══════════════════════════════════════════
export const animateSectionHeader = (selector) => {
  if (prefersReducedMotion()) return

  const headers = document.querySelectorAll(selector)
  if (!headers.length) return

  headers.forEach((el) => {
    el.style.opacity = '0'
    el.style.transform = 'translateY(30px)'
  })

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          observer.unobserve(entry.target)
          anime({
            targets: entry.target,
            opacity: [0, 1],
            translateY: [30, 0],
            easing: 'easeOutCubic',
            duration: 800
          })
        }
      })
    },
    { threshold: 0.2 }
  )

  headers.forEach((el) => observer.observe(el))
}

// ═══════════════════════════════════════════
// COUNTER ANIMATION
// ═══════════════════════════════════════════
export const animateCounter = (targetElement, endValue, duration = 1500) => {
  if (!targetElement) return
  const obj = { val: 0 }
  anime({
    targets: obj,
    val: endValue,
    round: 1,
    easing: 'easeOutExpo',
    duration,
    update: () => {
      targetElement.textContent = obj.val
    }
  })
}
