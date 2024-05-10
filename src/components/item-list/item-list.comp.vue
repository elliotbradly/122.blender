<template>
    <div>
        <h3>Items:</h3>
        <ul>
            <li v-for="(item, index) in items" :key="item.id">
                {{ item.name }}
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
defineProps<{ items: any[] }>()
</script>

