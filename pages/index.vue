<script setup lang="ts">
const input = ref()
const message = ref()

async function runTranslate() {
    const res = await translate('Hello')
    message.value = res
}
</script>

<template>
    {{ message }}
    <input type="text" v-model="input" />
    <button @click="runTranslate">Translate</button>
</template>
