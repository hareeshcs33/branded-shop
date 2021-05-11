<template>
  <div class="nav-wrapper">
    <div class="top-navbar">
      <div>H</div>
      <div class="nav-block">
        <router-link to="/help">Help</router-link>
        <router-link to="/joinUs">Join Us</router-link>
        <router-link to="/signIn">Sign In</router-link>
      </div>
    </div>
    <div class="main-navbar">
      <div class="main-nav-block">
        <div class="brand-logo">Logo</div>
        <div
          class="menu-links"
          @mouseenter="showSubNav"
          @mouseleave="hideSubNav"
        >
          <div class="link">New Releases</div>
          <div class="link">Men</div>
          <div class="link">WoMen</div>
          <div class="link">Kids</div>
          <div class="link">Customize</div>
          <div class="link">Sale</div>
        </div>
        <div class="search-box">
          <i class="fas fa-search"></i>
          <input type="text" placeholder="search" />
        </div>
        <div class="favorites-cart-links">
          <div class="favorite-link"><i class="far fa-heart"></i></div>
          <div class="cart-link"><i class="fas fa-cart-plus"></i></div>
        </div>
      </div>
      <div class="sub-nav-block" :class="showHideSubnav ? 'show-subnav' : ''">
        <ul class="parent-ul-list">
          <li>
            <ul class="child-ul-list">
              <li>aaaaaa</li>
              <li>bbbbbbb</li>
              <li>aaaaaa</li>
              <li>bbbbbbb</li>
              <li>aaaaaa</li>
              <li>bbbbbbb</li>
            </ul>
          </li>
          <li>
            <ul>
              <li>aaaaaa</li>
              <li>bbbbbbb</li>
              <li>aaaaaa</li>
              <li>bbbbbbb</li>
              <li>aaaaaa</li>
              <li>bbbbbbb</li>
            </ul>
          </li>
          <li>
            <ul>
              <li>aaaaaa</li>
              <li>bbbbbbb</li>
              <li>aaaaaa</li>
              <li>bbbbbbb</li>
              <li>aaaaaa</li>
              <li>bbbbbbb</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showHideSubnav: false
    };
  },
  methods: {
    showSubNav() {
      console.log("show");
      this.showHideSubnav = true;
    },
    hideSubNav() {
      console.log("hide");
      this.showHideSubnav = false;
    }
  }
};
</script>

<style scoped>
.top-navbar {
  background: #f5f5f5;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
}

.nav-block a {
  color: #111;
  font-size: 12px;
  display: inline-block;
  text-decoration: none;
  padding: 5px 10px;
}
.main-navbar {
  color: #111;
  background-color: #fff;
  padding: 5px 30px;
  position: relative;
}
.main-nav-block {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.menu-links {
  display: flex;
}
.menu-links .link {
  font-size: 17px;
  line-height: 1.5;
  padding: 10px 15px;
  border-bottom: 2px solid transparent;
  transition: 0.5s;
  cursor: pointer;
}
.menu-links .link:hover {
  border-bottom: 2px solid #111;
}
.search-box {
  border: 1px solid #ccc;
  padding: 6px;
  border-radius: 18px;
}
.search-box input {
  border: 0;
}
.search-box input:focus {
  outline: 0;
  border: 0;
}
.favorites-cart-links {
  display: flex;
}

.cart-link {
  color: #ddd;
}
.favorite-link,
.cart-link {
  font-size: 22px;
  padding: 0 10px;
  cursor: pointer;
}
.sub-nav-block {
  position: absolute;
  left: 0;
  right: 0;
  height: calc(100vh - 100px);
  background-color: #fff;
  visibility: hidden;
  transition: 0.4s;
  z-index: 1;
  display: none; /* temp */
}
.sub-nav-block.show-subnav {
  visibility: visible;
  transition: 0.4s;
}
.parent-ul-list,
.child-ul-list {
  padding: 0;
}
.parent-ul-list li,
.child-ul-list li {
  list-style: none;
}
.parent-ul-list {
  display: flex;
}

</style>
