<template>
  <div>
    <h1>BravuraフォントとUnicode文字の表示 (OTF版)</h1>
    <svg width="200" height="150" viewBox="0 0 200 150">
        <text x="50" y="100" class="bravura-text">&#xe050;</text>
    </svg>
    <p>上記SVG内にUnicode文字<span class="bravura-text">&#xe050;</span>がBravuraフォントで表示されているはずです。</p>
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
        /* font-size: 80px; */
        /* fill: black; */
        fill: red;
    }
</style>