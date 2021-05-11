<template>
  <div>
    <div class="carousel-block">
      <div id="demo" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div>Save Up to 50%</div>
            <a href="#">Shop Now — Ends 5.12</a>
          </div>
          <div class="carousel-item">
            <div>Free Shipping & 60-Day Free Returns</div>
            <a href="#">Join Now</a>
          </div>
          <div class="carousel-item">
            <div>Save Up to 50%</div>
            <a href="#">Shop Now — Ends 5.12</a>
          </div>
        </div>
        <!-- Left and right controls -->
          <a class="carousel-control-prev" href="#demo" data-slide="prev">
            <i class="fas fa-chevron-circle-left"></i>
          </a>
          <a class="carousel-control-next" href="#demo" data-slide="next">
            <i class="fas fa-chevron-circle-right"></i>
          </a>
        </div>
    </div>
  </div>
</template>
<style scoped>
.carousel-block {
  color: #111;
  background: #f5f5f5;
  height: 50px;
  text-align: center;
  vertical-align: middle;
}
.carousel-item {
  color: #444;
  font-size: 12px;
  height: 50px;
  text-align: center;
  vertical-align: middle;
}
.carousel-inner {
    height: 50px;
    padding: 8px;
}
.carousel-inner img {
  width: 100%;
  height: auto;
}
.carousel-control-prev,
.carousel-control-next {
  color: #111;
}
</style>
