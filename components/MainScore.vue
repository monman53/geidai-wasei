<script setup>
import bravuraMetadata from '@/assets/bravura_metadata.json'
// const { data:  } = await useFetch('/bravura_metadata.json')
</script>

<template>
  <div>
    <h2>楽譜</h2>
    <svg width="800" height="200" viewBox="-200 -50 400 100">
        <line v-for="i in [0, 1, 2, 3, 4]" :key="i" x1="0" :y1="-4*i" x2="100" :y2="-4*i" stroke="black"  :stroke-width="bravuraMetadata.engravingDefaults.staffLineThickness"/>
        <text x="4" y="-4" class="bravura-text">&#xe050;</text>
        <text :x="100 - bravuraMetadata.glyphAdvanceWidths.barlineDouble * 4" y="0" class="bravura-text">&#xe031;</text>
    </svg>
  </div>
</template>

<style>
    @font-face {
        font-family: 'Bravura';
        src: url('Bravura.otf') format('opentype');
    }

    body {
        font-family: sans-serif;
    }

    svg {
        border: 1px solid #ccc;
    }

    .bravura-text {
        font-family: 'Bravura', sans-serif;
        /* font-size: 20px; */
        /* fill: black; */
        /* fill: red; */
    }
</style>