<template>
  <div class="pt-5">
    <h1 class="title text-center mb-5">Escolha sua população inicial de pássaros:</h1>

    <div class="grid">
      <div class="bird_picker">

      </div>

      <div class="remaining_points">uhuhu</div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.grid {
  display: flex;
}

.bird_picker{
  background: red;
  flex-grow: 4;
}

.remaining_points{
  background: blue;
  flex-grow:1;
}

</style>
