<template>
<div>
  <div class="button">
    <button @click="takePhoto">Take Photo</button>
  </div>

  <video id="me" class="camera"></video>
  <canvas id="photo" v-show="imgUrl"></canvas>
  <Filters :imgUrl="imgUrl" />
</div>

</template>

<script>
import Filters from "@/components/Filters.vue";

export default {
  name: "Camera",
  components :{
  Filters
 },
 data(){
  return {
    stream: {},
    imgUrl: "",
    oldValue: ""
  };

},
 methods: {
   renderCaman() {
      this.Caman("#photo", this.imgUrl, function() {
        this.render();
      });
    },
   async takePhoto() {
      console.log(this.stream);
      const mediaTrack = this.stream.getVideoTracks()[0];
      console.log(mediaTrack);
      const captureImg = new ImageCapture(mediaTrack);
      const photo = await captureImg.takePhoto();
      console.log(photo);
      const imgUrl = URL.createObjectURL(photo);
      console.log(imgUrl);
      this.imgUrl = imgUrl;

      document.querySelector("#photo").src = imgUrl;
      this.$refs.setTimeout(() => {
        this.renderCaman();
      }, 2000);
    },

    async getMedia() {
      try {
        this.stream = await navigator.mediaDevices.getUserMedia({
          video: true
        });
        const videoElem = document.querySelector("#me");
        videoElem.srcObject = this.stream;
        videoElem.addEventListener("loadedmetadata", () => {
          videoElem.play();
        });
        console.log(this.stream);
      } catch (error) {
        console.log(error);
      }
    },
 
},
 mounted() {
   this.getMedia();
}
};
</script>

<style scoped>
button{
  background-color: rgb(165, 161, 161);
  color:white;
  font-size: 16px;
  border-radius: 5px;
  padding:8px;
  margin:15px;
  width: 200px;
}


</style>