<template>
  <div class="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
    <!-- Atmospheric Ambient Mesh Layer for Light Mode & Dark Mode -->
    <div 
      class="absolute -top-32 -left-32 w-[650px] h-[650px] rounded-full blur-3xl pointer-events-none transition-opacity duration-700"
      :class="isDark 
        ? 'bg-fuchsia-600/10 opacity-60' 
        : 'bg-gradient-to-br from-fuchsia-300/25 via-pink-200/20 to-transparent opacity-90'"
    ></div>

    <div 
      class="absolute top-[20%] -right-40 w-[700px] h-[700px] rounded-full blur-3xl pointer-events-none transition-opacity duration-700"
      :class="isDark 
        ? 'bg-sky-500/10 opacity-50' 
        : 'bg-gradient-to-bl from-sky-300/25 via-cyan-200/20 to-transparent opacity-90'"
    ></div>

    <div 
      class="absolute top-[55%] left-[5%] w-[600px] h-[600px] rounded-full blur-3xl pointer-events-none transition-opacity duration-700"
      :class="isDark 
        ? 'bg-violet-600/10 opacity-50' 
        : 'bg-gradient-to-tr from-violet-300/20 via-indigo-200/15 to-transparent opacity-85'"
    ></div>

    <div 
      v-if="!isDark" 
      class="absolute top-0 inset-x-0 h-[480px] bg-gradient-to-b from-[#eef4ff]/70 via-[#f8f9ff]/40 to-transparent pointer-events-none"
    ></div>

    <!-- Continuous Ambient Animated Background Canvas -->
    <canvas ref="canvasRef" class="absolute inset-0 w-full h-full"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { isDark } from '../utils/theme'

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
    
    this.resetColor()
    this.baseAlpha = isDark.value ? (Math.random() * 0.35 + 0.15) : (Math.random() * 0.28 + 0.14)
    this.alpha = this.baseAlpha
    this.pulseSpeed = Math.random() * 0.02 + 0.008
    this.pulseAngle = Math.random() * Math.PI * 2
  }

  resetColor() {
    const darkColors = ['#C239D8', '#99D4FF', '#7B68EE', '#ffffff']
    const lightColors = ['#c026d3', '#0284c7', '#7c3aed', '#6366f1']
    const palette = isDark.value ? darkColors : lightColors
    this.color = palette[Math.floor(Math.random() * palette.length)]
  }

  update(w, h) {
    this.x += this.vx
    this.y += this.vy

    if (this.x < 0) this.x = w
    if (this.x > w) this.x = 0
    if (this.y < 0) this.y = h
    if (this.y > h) this.y = 0

    this.pulseAngle += this.pulseSpeed
    this.alpha = this.baseAlpha + Math.sin(this.pulseAngle) * 0.1

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
    if (isDark.value) {
      ctx.globalAlpha = Math.max(0.08, this.alpha)
      ctx.fillStyle = this.color
      ctx.shadowBlur = 8
      ctx.shadowColor = this.color
    } else {
      ctx.globalAlpha = Math.max(0.12, this.alpha * 0.75)
      ctx.fillStyle = this.color
    }
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

    // Connecting lines with subtle color tint
    const lineAlphaFactor = isDark.value ? 0.1 : 0.05
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const p1 = particles[i]
        const p2 = particles[j]
        const dx = p1.x - p2.x
        const dy = p1.y - p2.y
        const dist = Math.sqrt(dx * dx + dy * dy)

        if (dist < 110) {
          const alpha = (1 - dist / 110) * lineAlphaFactor
          ctx.strokeStyle = isDark.value 
            ? `rgba(194, 57, 216, ${alpha})` 
            : `rgba(124, 58, 237, ${alpha})`
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

watch(isDark, () => {
  particles.forEach(p => p.resetColor())
})

onUnmounted(() => {
  if (cleanup) cleanup()
})
</script>
