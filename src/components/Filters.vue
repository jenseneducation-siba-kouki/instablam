<template>
  <div class="filters" v-show="imgUrl">
    <div class="filter">
      <label for="brightness">Brightness</label>
      <input
        type="range"
        min="-100"
        max="100"
        step="1"
        :value="0"
        id="brightness"
        data-filter="brightness"
        v-on:change="changeBrightness"
      />
    </div>
    <div class="filter">
      <label for="contrast">Contrast</label>
      <input
        type="range"
        min="-100"
        max="100"
        step="1"
        value="0"
        data-filter="contrast"
        v-on:change="changeContrast"
      />
    </div>
     <div class="filter">
      <label for="exposure">Exposure</label>
      <input
        type="range"
        min="-100"
        max="100"
        step="1"
        value="0"
        data-filter="exposure"
        v-on:change="changeExposure"
      />
    </div>
    <div class="filter">
      <label for="vibrance">Vibrance</label>
      <input
        type="range"
        min="-100"
        max="100"
        step="1"
        value="0"
        data-filter="vibrance"
        v-on:change="changeVibrance"
      />
    </div>
    <div class="filter">
      <label for="saturaction">Saturaction</label>
      <input
        type="range"
        min="-100"
        max="100"
        step="1"
        value="0"
        data-filter="saturation"
        v-on:change="changeSaturaction"
      />
    </div>
    <div class="filter">
      <label for="sepia">Sepia</label>
      <input
        type="range"
        min="-100"
        max="100"
        step="1"
        value="0"
        data-filter="sepia"
        v-on:change="changeSepia"
      />
    </div>
    <div class="filter">
      <label for="hue">Hue</label>
      <input
        type="range"
        min="-100"
        max="100"
        step="1"
        value="0"
        data-filter="hue"
        v-on:change="changeHue"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Filters",
  props: ["imgUrl"],

  methods: {
    changeBrightness(event) {
      const value = parseInt(event.target.value);
      console.log(event.target.value);
      this.Caman("#photo", this.imgUrl, function() {
        if (value < -10 && value < 10) {
          this.revert();
        }
        this.brightness(value - this.oldValue);
        this.oldValue = value;
        this.render();
      });
    },
    changeContrast(event) {
      const value = parseInt(event.target.value);
      console.log(event.target.value);
      this.Caman("#photo", this.imgUrl, function() {
        if (value < -10 && value < 10) {
          this.revert();
        }
        this.contrast(value - this.oldValue);
        this.oldValue = value;
        this.render();
      });
    },
    changeExposure(event) {
      const value = parseInt(event.target.value);
      console.log(event.target.value);
      this.Caman("#photo", this.imgUrl, function() {
        if (value < -10 && value < 10) {
          this.revert();
        }
        this.exposure(value - this.oldValue);
        this.oldValue = value;
        this.render();
      });
    },
     changeVibrance(event) {
      const value = parseInt(event.target.value);
      console.log(event.target.value);
      this.Caman("#photo", this.imgUrl, function() {
        if (value < -10 && value < 10) {
          this.revert();
        }
        this.vibrance(value - this.oldValue);
        this.oldValue = value;
        this.render();
      });
    },
    changeSaturaction(event) {
      const value = parseInt(event.target.value);
      console.log(event.target.value);
      this.Caman("#photo", this.imgUrl, function() {
        if (value < -10 && value < 10) {
          this.revert();
        }
        this.saturation(value - this.oldValue);
        this.oldValue = value;
        this.render();
      });
    },
    changeSepia(event) {
      const value = parseInt(event.target.value);
      console.log(event.target.value);
      this.Caman("#photo", this.imgUrl, function() {
        if (value < -10 && value < 10) {
          this.revert();
        }
        this.sepia(value - this.oldValue);
        this.oldValue = value;
        this.render();
      });
    },
    changeHue(event) {
      const value = parseInt(event.target.value);
      console.log(event.target.value);
      this.Caman("#photo", this.imgUrl, function() {
        if (value < -10 && value < 10) {
          this.revert();
        }
        this.hue(value - this.oldValue);
        this.oldValue = value;
        this.render();
      });
    },
  }
};
</script>

<style scoped>
.filters {
  width: 100%;
  margin: auto;
  padding: 1rem;
}

.label {
  margin: auto;
  padding: 3rem;
}

@media screen and (min-width: 800px) {
  .filters {
    width: 100%;
  }
  input {
    width: 450px;
    justify-items: center;
  }
}
</style>