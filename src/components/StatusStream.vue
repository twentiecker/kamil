<template>
  <div class="container">
    <div class="item">
      <div class="circle">
        <i class="bi bi-card-text"></i>
      </div>
      <div class="description">
        <h2>Pedaftaran</h2>
        <h4>15/04/2022 - 20:25h</h4>
      </div>
    </div>

    <div class="item">
      <div class="circle">
        <i class="bi bi-credit-card"></i>
      </div>
      <div class="description">
        <h2>Upload Berkas</h2>
        <h4>16/04/2022 - 19:25h</h4>
      </div>
    </div>

    <div class="item">
      <div class="circle">
        <i class="bi bi-truck"></i>
      </div>
      <div class="description">
        <h2>Seleksi</h2>
        <h4>17/04/2022 - 18:25h</h4>
      </div>
    </div>

    <div class="item">
      <div class="circle">
        <i class="bi bi-box-seam"></i>
      </div>
      <div class="description">
        <h2>Pengumuman</h2>
        <h4>18/04/2022 - 17:25h</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@import url('https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css');

* {
  font-family: 'Roboto';
  box-sizing: border-box;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  min-height: 95vh;
}

.container {
  display: flex;
}

.item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 275px;
  transform: translate(0);
}

.item .circle {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 88px;
  height: 88px;
  border: solid 5px #194de9;
  border-radius: 44px;
  transform: translate(0);
  background-color: rgb(0, 153, 255);
}

/* Before (Circle Animation) */
.item .circle::before {
  content: '';
  position: absolute;
  z-index: -1;
  top: -5px;
  left: -5px;
  right: -5px;
  bottom: -5px;
  background: #ffffff;
  transform: scaleX(1);
  transform-origin: 100% 0%;
  animation: 1s animate-circle forwards linear;
}

.item:nth-child(2) .circle::before {
  animation-delay: 2s;
}

.item:nth-child(3) .circle::before {
  animation-delay: 4s;
}

.item:nth-child(4) .circle::before {
  animation-delay: 6s;
}

@keyframes animate-circle {
  0% {
    transform: scaleX(1);
  }
  100% {
    transform: scaleX(0);
  }
}

/* After (Line Animation) */
.item .circle::after {
  content: '';
  position: absolute;
  z-index: -1;
  background: #194de9;
  height: 5px;
}

.item:not(:nth-child(4)) .circle::after {
  left: 80px;
  animation: 1s animate-line forwards linear;
}

@keyframes animate-line {
  0% {
    width: 0;
  }
  100% {
    width: 190px;
  }
}

.item:nth-child(1) .circle::after {
  animation-delay: 1s;
}

.item:nth-child(2) .circle::after {
  animation-delay: 3s;
}

.item:nth-child(3) .circle::after {
  animation-delay: 5s;
}

/* Icon Animation */
.item .circle i {
  font-size: 32pt;
  color: #ffffff;
  transform: scale(0);
  animation: 0.5s animate-icon forwards cubic-bezier(0.175, 0.885, 0.32, 1.4);
}

@keyframes animate-icon {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}

.item:nth-child(1) .circle i {
  animation-delay: 0.25s;
}

.item:nth-child(2) .circle i {
  animation-delay: 2.25s;
}

.item:nth-child(3) .circle i {
  animation-delay: 4.25s;
}

.item:nth-child(4) .circle i {
  animation-delay: 6.25s;
}

/* Description Animation */
.item .description {
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0;
  animation: 0.5s animate-description forwards ease-in;
}

@keyframes animate-description {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.item:nth-child(1) .description {
  animation-delay: 0.25s;
}

.item:nth-child(2) .description {
  animation-delay: 2.25s;
}

.item:nth-child(3) .description {
  animation-delay: 4.25s;
}

.item:nth-child(4) .description {
  animation-delay: 6.25s;
}

/* Texts */
.item h2 {
  color: #020e26;
  font-size: 16pt;
  margin: 0;
  margin-top: 32px;
}

.item h4 {
  color: #020e26;
  font-size: 12pt;
  font-weight: 400;
  margin: 0;
  margin-top: 8px;
}
</style>
