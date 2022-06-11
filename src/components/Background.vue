<template>
  <canvas
    ref="canvas"
    class="fixed top-0 w-full min-h-screen h-full bg-black -z-50"
    width="1920"
    height="1080"
  />
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue"

const canvas = ref(null)
const stars = []
let intervalId

onMounted(() => {
  const ctx = canvas.value.getContext("2d")
  ctx.fillStyle = "white"

  for (let i = 0; i < 150; i++) {
    const x = Math.random() * canvas.value.width
    const y = Math.random() * canvas.value.height
    const dx = Math.random() * 2 - 1
    const dy = Math.random() * 2 - 1
    stars.push({ x, y, dx, dy })
  }

  intervalId = setInterval(() => {
    ctx.clearRect(0, 0, canvas.value.width, canvas.value.height)

    ctx.globalAlpha = 1
    for (let star of stars) {
      star.x =
        (((star.x + star.dx) % canvas.value.width) + canvas.value.width) %
        canvas.value.width
      star.y =
        (((star.y + star.dy) % canvas.value.height) + canvas.value.height) %
        canvas.value.height
      ctx.fillRect(star.x, star.y, 1, 1)
    }
  })
})

onUnmounted(() => clearInterval(intervalId))
</script>
