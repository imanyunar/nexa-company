<template>
  <div class="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
    <!-- Dynamic Interactive Particles Canvas with deep dark theme -->
    <canvas ref="canvasRef" class="absolute inset-0 w-full h-full"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const canvasRef = ref(null)
let animationFrameId = null
let particles = []
let mouse = { x: null, y: null, radius: 100 }

class Particle {
  constructor(w, h) {
    this.w = w
    this.h = h
    this.x = Math.random() * w
    this.y = Math.random() * h
    this.vx = (Math.random() - 0.5) * 0.4
    this.vy = (Math.random() - 0.5) * 0.4
    this.radius = Math.random() * 1.8 + 0.8
    
    // Crisp dark-studio accent colors
    const colors = ['#17C3F2', '#3A4CE0', '#8A2BE2', '#E620C5']
    this.color = colors[Math.floor(Math.random() * colors.length)]
    this.baseAlpha = Math.random() * 0.4 + 0.2
    this.alpha = this.baseAlpha
    this.pulseSpeed = Math.random() * 0.02 + 0.01
    this.pulseAngle = Math.random() * Math.PI * 2
  }

  update(w, h) {
    this.x += this.vx
    this.y += this.vy

    if (this.x < 0) this.x = w
    if (this.x > w) this.x = 0
    if (this.y < 0) this.y = h
    if (this.y > h) this.y = 0

    this.pulseAngle += this.pulseSpeed
    this.alpha = this.baseAlpha + Math.sin(this.pulseAngle) * 0.15

    if (mouse.x !== null && mouse.y !== null) {
      const dx = mouse.x - this.x
      const dy = mouse.y - this.y
      const dist = Math.sqrt(dx * dx + dy * dy)
      if (dist < mouse.radius) {
        const force = (mouse.radius - dist) / mouse.radius
        this.x -= (dx / dist) * force * 1.2
        this.y -= (dy / dist) * force * 1.2
      }
    }
  }

  draw(ctx) {
    ctx.save()
    ctx.globalAlpha = Math.max(0.1, this.alpha)
    ctx.fillStyle = this.color
    ctx.shadowBlur = 6
    ctx.shadowColor = this.color
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
    ctx.fill()
    ctx.restore()
  }
}

function initCanvas() {
  const canvas = canvasRef.value
  if (!canvas) return
  const ctx = canvas.getContext('2d')
  if (!ctx) return

  let w = (canvas.width = window.innerWidth)
  let h = (canvas.height = window.innerHeight)

  const count = Math.min(Math.floor((w * h) / 22000), 55)
  particles = Array.from({ length: count }, () => new Particle(w, h))

  function handleResize() {
    if (!canvas) return
    w = canvas.width = window.innerWidth
    h = canvas.height = window.innerHeight
    particles = Array.from({ length: count }, () => new Particle(w, h))
  }

  function handleMouseMove(e) {
    mouse.x = e.clientX
    mouse.y = e.clientY
  }

  function handleMouseLeave() {
    mouse.x = null
    mouse.y = null
  }

  window.addEventListener('resize', handleResize)
  window.addEventListener('mousemove', handleMouseMove)
  document.addEventListener('mouseleave', handleMouseLeave)

  function render() {
    ctx.clearRect(0, 0, w, h)

    // Connecting lines with subtle dark-glow opacity
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const p1 = particles[i]
        const p2 = particles[j]
        const dx = p1.x - p2.x
        const dy = p1.y - p2.y
        const dist = Math.sqrt(dx * dx + dy * dy)

        if (dist < 100) {
          const alpha = (1 - dist / 100) * 0.12
          ctx.strokeStyle = `rgba(23, 195, 242, ${alpha})`
          ctx.lineWidth = 0.6
          ctx.beginPath()
          ctx.moveTo(p1.x, p1.y)
          ctx.lineTo(p2.x, p2.y)
          ctx.stroke()
        }
      }
    }

    particles.forEach(p => {
      p.update(w, h)
      p.draw(ctx)
    })

    animationFrameId = requestAnimationFrame(render)
  }

  render()

  return () => {
    window.removeEventListener('resize', handleResize)
    window.removeEventListener('mousemove', handleMouseMove)
    document.removeEventListener('mouseleave', handleMouseLeave)
    if (animationFrameId) cancelAnimationFrame(animationFrameId)
  }
}

let cleanup = null

onMounted(() => {
  cleanup = initCanvas()
})

onUnmounted(() => {
  if (cleanup) cleanup()
})
</script>
