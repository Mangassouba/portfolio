<script setup>
import { onMounted, ref } from "vue";

onMounted(() => {
  const menuToggle = document.querySelector(".menu_toggle");
  const sidebar = document.querySelector(".sidebar");

  menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    sidebar.classList.toggle("responsive");
  });
});
</script>

<template>
  <!-- <div class="navbar bar navbar-expand-lg">
    <div class="container">
      <RouterLink to="/" class="navbar-brand logo">Portfolio</RouterLink>
      <div class="">
        <ul class="navbar">
          <li class="nav-item">
            <RouterLink to="/home" class="nav-link">Accueil</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/about" class="nav-link"
              >A propos de nous</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink to="/contact" class="nav-link">Contact</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </div> -->
  <div class="container-fluid m-0 p-0">
    <div class="sidebar">
      <div class="container">
        <div class="row profiles">
          <div class="profile">
            <img src="./assets/image/mgm.png" alt="profile" />
          </div>
          <h2>Hama Houllah</h2>
          <p>Full stack developper</p>
        </div>
        <div class="row">
          <ul class="nav">
            <li class="item">
              <a to="#home" class="nav-link"
                ><i class="fa-solid fa-house"></i> Accueil</a
              >
            </li>
            <li class="item">
              <a ref="#apropos" class="nav-link"
                ><i class="fa-solid fa-user-tie"></i> A propos de
                nous</a
              >
            </li>
            <li class="item">
              <a to="#parcours" class="nav-link"
                ><i class="fa-solid fa-bars-progress"></i> Parcours profesionnel</a
              >
            </li>
            <li class="item">
              <a to="#competence" class="nav-link"
                ><i class="fa-brands fa-discourse"></i> Mes competences</a
              >
            </li>
            <li class="item">
              <a to="#cursus" class="nav-link"
                ><i class="fa-solid fa-book-skull"></i> Cursus</a
              >
            </li>
            <li class="item">
              <a to="#projet" class="nav-link"
                ><i class="fa-solid fa-book-skull"></i> Mes projets</a
              >
            </li>
            <li class="item">
              <a ref="#contact" class="nav-link"
                ><i class="fa-solid fa-at"></i> Contact</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="menu_toggle"></div>
    <div class="main">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.sidebar {
  position: fixed;
  display: flex;
  flex-direction: column;
  height: 90vh;
  width: 256px;
  background-color: #2121219a;
  box-shadow: 0 0 3px #e0e0e0;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  overflow-y: auto;
  border-radius: 5px;
  z-index: 100px;
}

.profiles {
  display: flex;
  justify-content: center;
  text-align: center;
}

.profile {
  width: 150px;
  height: 150px;
  margin: 10px;
}

.profile img {
  width: 100%;
  background-color: #4ecdc4;
  box-shadow: 0 0 10px #fff;
  border-radius: 10px;
}

.nav {
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0;
}

.nav .item {
  border: 1px solid #181717;
}

.nav .item .nav-link {
  text-decoration: none;
  color: #cacaca;
}

.nav .item .nav-link:hover {
  background-color: #4ecdc4;
  color: #181717;
}

.nav .item .nav-link i:hover {
  color: #181717;
}

.main {
  margin-left: 270px;
}

@media screen and (max-width: 480px) {
  .sidebar {
    display: none;
  }

  .nav .item {
  border: 1px solid #8d8d8d;
}
  .menu_toggle {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    right: 20px;
    top: 5px;
  }

  .menu_toggle::before {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    content: "";
    width: 30px;
    height: 2;
    border: 1px solid #4ecdc4;
    background-color: #4ecdc4;
    box-shadow: 0 10px 0 #4ecdc4;
    transform: translateY(-10px);
    cursor: pointer;
    z-index: 9999;
  }

  .menu_toggle.active::before {
    transform: translateY(0) rotate(135deg);
    box-shadow: 0 0 0 var(--primary);
  }

  .menu_toggle::after {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    content: "";
    width: 30px;
    height: 2;
    background-color: #4ecdc4;
    border: 1px solid #4ecdc4;
    /* box-shadow: 0 10px 0  var(--primary); */
    transform: translateY(10px);
    cursor: pointer;
    z-index: 9999;
  }

  .menu_toggle.active::after {
    transform: translateY(0) rotate(-135deg);
    box-shadow: 0 0 0 var(--primary);
  }

  .sidebar.responsive {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    left: 160px;
    top: 50%;
    transform: translateY(-50%);
    background-color: #fff;
    box-shadow: 0 0 2px #4ecdc4;
    z-index: 9999;
    color: #181717;
  }


  .profiles h2,p {
    color: #000000;
  }

  .nav .item .nav-link {
  text-decoration: none;
  color: #000000;
}

.nav .item .nav-link i{
  color: #000000;
}

  .main {
    margin: 10px;
  }
}
</style>
