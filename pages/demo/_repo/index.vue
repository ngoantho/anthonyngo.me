<template>
</template>

<script>
export default {
  async asyncData({params}) {
    const repo = params.repo
    return { repo }
  },
  created() {
    window.location.href = `https://ngoantho.github.io/${this.repo}`
  },
}
</script>

<style>

</style>
