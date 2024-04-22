<template>
  <div class="form__frame">
    <form>
      <slot></slot>
    </form>
  </div>
</template>

<style scoped>
.form__frame {
  background-color: rgba(0, 0, 0, 0.6);;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
form {
 width: 350px;
 height: 575px;
 background-color: burlywood;
}
</style>

