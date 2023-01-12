<template>
  <div>
    <NuxtLayout name="custom">
      Custom page
      <button style="color: red" @click="goBack">
        Go back
      </button>
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
const router = useRouter()

definePageMeta({
  layout: false
})
async function goBack (): Promise<void> {
  await router.back()
}
</script>
