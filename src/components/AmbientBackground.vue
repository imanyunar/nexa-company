<template>
  <div class="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
    <!-- True Black Canvas with Subtle Vivid Accents -->
    <canvas ref="canvasRef" class="absolute inset-0 w-full h-full"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const canvasRef = ref(null)
let animationFrameId = null
let particles = []
let mouse = { x: null, y: null, radius: 120 }

class Particle {
  constructor(w, h) {
    this.w = w
    this.h = h
    this.x = Math.random() * w
    this.y = Math.random() * h
    this.vx = (Math.random() - 0.5) * 0.35
    this.vy = (Math.random() - 0.5) * 0.35
    this.radius = Math.random() * 1.5 + 0.8
    
    // Reinvented with Accenture Palette: Electric Blue, Crimson Red, Electric Violet
    const colors = ['#0041f0', '#e2062e', '#a600ff', '#ffffff']
    this.color = colors[Math.floor(Math.random() * colors.length)]
    this.baseAlpha = Math.random() * 0.35 + 0.15
    this.alpha = this.baseAlpha
    this.pulseSpeed = Math.random() * 0.02 + 0.008
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
    this.alpha = this.baseAlpha + Math.sin(this.pulseAngle) * 0.12

    if (mouse.x !== null && mouse.y !== null) {
      const dx = mouse.x - this.x
      const dy = mouse.y - this.y
      const dist = Math.sqrt(dx * dx + dy * dy)
      if (dist < mouse.radius) {
        const force = (mouse.radius - dist) / mouse.radius
        this.x -= (dx / dist) * force * 1.4
        this.y -= (dy / dist) * force * 1.4
      }
    }
  }

  draw(ctx) {
    ctx.save()
    ctx.globalAlpha = Math.max(0.08, this.alpha)
    ctx.fillStyle = this.color
    ctx.shadowBlur = 8
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

  const count = Math.min(Math.floor((w * h) / 24000), 50)
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

    // Connecting lines with subtle electric blue glow
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const p1 = particles[i]
        const p2 = particles[j]
        const dx = p1.x - p2.x
        const dy = p1.y - p2.y
        const dist = Math.sqrt(dx * dx + dy * dy)

        if (dist < 110) {
          const alpha = (1 - dist / 110) * 0.1
          ctx.strokeStyle = `rgba(0, 65, 240, ${alpha})`
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
