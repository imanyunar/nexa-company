<template>
  <div class="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
    <!-- Floating Glowing Gradient Aurora Orbs -->
    <div class="absolute -top-[20%] -left-[10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-br from-[#3A4CE0]/20 via-[#17C3F2]/15 to-transparent blur-[120px] animate-orb-1"></div>
    <div class="absolute top-[40%] -right-[15%] w-[55vw] h-[55vw] rounded-full bg-gradient-to-bl from-[#E620C5]/15 via-[#8A2BE2]/15 to-transparent blur-[130px] animate-orb-2"></div>
    <div class="absolute -bottom-[20%] left-[20%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-tr from-[#17C3F2]/15 via-[#3A4CE0]/15 to-transparent blur-[120px] animate-orb-3"></div>

    <!-- Animated Subtle Background Grid Matrix -->
    <div class="absolute inset-0 bg-grid-pattern opacity-[0.04]"></div>

    <!-- Dynamic Interactive Particles Canvas -->
    <canvas ref="canvasRef" class="absolute inset-0 w-full h-full opacity-60"></canvas>
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
    this.vx = (Math.random() - 0.5) * 0.6
    this.vy = (Math.random() - 0.5) * 0.6
    this.radius = Math.random() * 2 + 1
    
    // Nexa Theme Colors: Cyan, Blue, Magenta, White
    const colors = ['#17C3F2', '#3A4CE0', '#E620C5', '#8A2BE2', '#FFFFFF']
    this.color = colors[Math.floor(Math.random() * colors.length)]
    this.baseAlpha = Math.random() * 0.5 + 0.2
    this.alpha = this.baseAlpha
    this.pulseSpeed = Math.random() * 0.02 + 0.01
    this.pulseAngle = Math.random() * Math.PI * 2
  }

  update(w, h) {
    this.x += this.vx
    this.y += this.vy

    // Wrap around boundaries
    if (this.x < 0) this.x = w
    if (this.x > w) this.x = 0
    if (this.y < 0) this.y = h
    if (this.y > h) this.y = 0

    // Subtle pulsing glow
    this.pulseAngle += this.pulseSpeed
    this.alpha = this.baseAlpha + Math.sin(this.pulseAngle) * 0.2

    // Mouse proximity interaction
    if (mouse.x !== null && mouse.y !== null) {
      const dx = mouse.x - this.x
      const dy = mouse.y - this.y
      const distance = Math.sqrt(dx * dx + dy * dy)
      if (distance < mouse.radius) {
        const force = (mouse.radius - distance) / mouse.radius
        this.x -= (dx / distance) * force * 1.5
        this.y -= (dy / distance) * force * 1.5
      }
    }
  }

  draw(ctx) {
    ctx.save()
    ctx.globalAlpha = Math.max(0.1, this.alpha)
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

  const count = Math.min(Math.floor((w * h) / 18000), 75)
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

    // Draw connecting lines between close particles
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const p1 = particles[i]
        const p2 = particles[j]
        const dx = p1.x - p2.x
        const dy = p1.y - p2.y
        const dist = Math.sqrt(dx * dx + dy * dy)

        if (dist < 120) {
          const alpha = (1 - dist / 120) * 0.18
          ctx.strokeStyle = `rgba(23, 195, 242, ${alpha})`
          ctx.lineWidth = 0.8
          ctx.beginPath()
          ctx.moveTo(p1.x, p1.y)
          ctx.lineTo(p2.x, p2.y)
          ctx.stroke()
        }
      }
    }

    // Update & draw particles
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

<style scoped>
.bg-grid-pattern {
  background-size: 40px 40px;
  background-image: 
    linear-gradient(to right, rgba(255, 255, 255, 0.15) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.15) 1px, transparent 1px);
}

@keyframes orbFloat1 {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  50% {
    transform: translate(8vw, 10vh) scale(1.15);
  }
}

@keyframes orbFloat2 {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  50% {
    transform: translate(-10vw, -8vh) scale(1.2);
  }
}

@keyframes orbFloat3 {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  50% {
    transform: translate(6vw, -6vh) scale(1.1);
  }
}

.animate-orb-1 {
  animation: orbFloat1 18s ease-in-out infinite;
}

.animate-orb-2 {
  animation: orbFloat2 22s ease-in-out infinite;
}

.animate-orb-3 {
  animation: orbFloat3 26s ease-in-out infinite;
}
</style>
