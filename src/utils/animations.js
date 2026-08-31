import anime from 'animejs'

// Check if user prefers reduced motion
export const prefersReducedMotion = () => {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

// Staggered fade in & slide up for card lists and sections
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

// Hero entrance animation
export const animateHeroEntrance = ({ headline, subtitle, cta, visual }) => {
  if (prefersReducedMotion()) return
  const tl = anime.timeline({
    easing: 'easeOutCubic'
  })

  if (headline) {
    tl.add({
      targets: headline,
      opacity: [0, 1],
      translateY: [30, 0],
      duration: 800
    })
  }

  if (subtitle) {
    tl.add({
      targets: subtitle,
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 600
    }, '-=500')
  }

  if (cta) {
    tl.add({
      targets: cta,
      opacity: [0, 1],
      translateY: [15, 0],
      duration: 600
    }, '-=400')
  }

  if (visual) {
    tl.add({
      targets: visual,
      opacity: [0, 1],
      scale: [0.95, 1],
      duration: 800
    }, '-=600')
  }

  return tl
}

// SVG Stroke drawing animation
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

// Counter animation for metrics
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
