<template>
    <div>
      <div class="carousel-block">
        <div id="demo" class="carousel slide" data-ride="carousel">
          <!-- Indicators -->
          <ul class="carousel-indicators">
            <li data-target="#demo" data-slide-to="0" class="active"></li>
            <li data-target="#demo" data-slide-to="1"></li>
            <li data-target="#demo" data-slide-to="2"></li>
          </ul>

          <!-- The slideshow -->
          <div class="carousel-block">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="../assets/blazer/blazer-mid-77-shoe-2PCxLw-0.jpg" 
                alt="Los Angeles" />
              </div>
              <div class="carousel-item">
                <img
                  src="../assets/blazer/blazer-mid-77-shoe-2PCxLw-1.jpg"
                  alt="Chicago"
                />
              </div>
              <div class="carousel-item">
                <img src="../assets/blazer/blazer-mid-77-shoe-2PCxLw-2.jpg" 
                alt="New York" />
              </div>
            </div>

            <!-- Left and right controls -->
            <a class="carousel-control-prev" href="#demo" data-slide="prev">
              <span class="carousel-control-prev-icon"></span>
            </a>
            <a class="carousel-control-next" href="#demo" data-slide="next">
              <span class="carousel-control-next-icon"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
</template>
<style scoped>
.carousel-block {
    /* background: #f5f5f5; */
    background: #f08585;
    height: auto;
    /* width: 100%;
    height: 100vh; */
}
.carousel-inner {
    width: 250px;
    height: 250px;
    margin: auto;
    overflow: hidden;
}
.carousel-inner img {
    width: 100%;
    height: auto;
  }
</style>