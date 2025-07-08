<script setup>
</script>

<template>
  <div>
    <h2>楽譜</h2>
    <svg width="800" height="200" viewBox="-200 -50 400 100">
        <text x="5" y="-5" class="bravura-text" fill="red">&#xe050;</text>
        <line x1="0" y1="0" x2="100" y2="0" stroke="black" />
        <line x1="0" y1="-5" x2="100" y2="-5" stroke="black" />
        <line x1="0" y1="-10" x2="100" y2="-10" stroke="black" />
        <line x1="0" y1="-15" x2="100" y2="-15" stroke="black" />
        <line x1="0" y1="-20" x2="100" y2="-20" stroke="black" />
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
        font-size: 20px;
        /* fill: black; */
        /* fill: red; */
    }
</style>