<template>
  <section>
    <base-form>
      <div class="form__control">
          <h1>로그인</h1>
        </div>
        <div class="form__control">
          <input type="text" id="id" name="id" placeholder="아이디">
        </div>
        <div class="form__control">
          <input type="password" id="password" name="password" placeholder="비밀번호">
        </div>
        <base-button>제출</base-button>
    </base-form>
  </section>
</template>

<script>
export default {}
</script>

<style scoped>
  input {
  width: 300px;
  height: 30px;
}
</style>