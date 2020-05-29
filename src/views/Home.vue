<template>
  <div class="home">
    <h1>
      Take a photo and add some filters...
    </h1>
    <Camera />
  </div>
</template>

<script>
// @ is an alias to /src
import Camera from '@/components/Camera.vue'

export default {
  name: 'Home',
  components: {
    Camera
  }
}
</script>
