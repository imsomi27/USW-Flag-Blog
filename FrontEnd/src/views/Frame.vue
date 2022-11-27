<template>
  <body>
    <div class="Container">
      <div class="HeaderBox">
        <div class="firstbox">
          <div>
            <h2 class="Header_Title">제목 Title</h2>
          </div>
        </div>
        <div class="secondbox">
          <div class="Current_UserBox">
            <p class="Current_User">A</p>
            <p class="Current_User">cy</p>
            <p class="Current_User">임</p>
          </div>
        </div>
      </div>
      <div class="MainBox">
        <div class="uk-button" type="button" uk-toggle="target: #offcanvas-overlay"><span uk-icon="chevron-double-right"></span></div>
        <div id="offcanvas-overlay" uk-offcanvas="overlay: true">
          <div class="uk-offcanvas-bar">
            <button class="uk-offcanvas-close" type="button" uk-close></button>
            <h2>문제가 있는 게시판</h2>
            <ul class="menu_list">
              <li class="item">자유게시판</li>
              <li class="item">사진게시판</li>
              <li class="item">유저게시판</li>
            </ul>
          </div>
        </div>
        <aside class="SideBox">
          <h4 style="color: white;" >문제가 있는 게시판</h4>
          <ul class="menu_list">
            <li class="item">자유게시판</li>
            <li class="item">사진게시판</li>
            <li class="item">유저게시판</li>
          </ul>
        </aside>
        <!-- <div>     
            <button class="" @mouseover="MouseOver"></button>
            <div v-bind:class="`offcanvas-header ${openSideBar && '띠용스타일'}`">
          </div>
        </div> -->
        <div class="ContentBox">
          <div class="btn_open" type="button" v-on:click="opensidebar"></div>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
export default {
  components: {
  },
  data() {
    return {
      sampleData: "",
      hover: false,
    };
  },
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    MouseOver: () => {
    },
    opensidebar: () => {
    },
    // toggle: () => {
    //   this.hover = !this.hover
    // }
  },
};

</script>
<style>
.uk-offcanvas-bar {
  background-color: rgb(172, 214, 251);
}

.uk-button{
  padding: 0 5px !important;
}

.uk-button:hover {
  box-shadow: 1px 1px rgba(0, 0, 0, 0.25);
}
</style>

<style scoped>

/*기본 CSS*/
* {
  box-sizing: border-box;
}
html {font-size: 16px;}
body {
  margin: 0;
  margin-top: 125px;
  width: 100%;
  height: 100%;
  align-items: center;
}
.Container {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  background-color: #2c2c2c;
}

/*모바일용 CSS
@media (max-width: 767px) {
}*/
/*태블릿용 CSS
@media (min-width: 768px) and (max-width: 1024px) {
}*/
/*태블릿 이하 CSS*/
@media (max-width: 1024px){
  .HeaderBox {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 25%;
    display: flex;
  }
  .Header_Title {
    padding: 10px;
    font-size: 2rem;
    color: white;
  }
  .firstbox {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    margin-left: 18%;
    width: 60%;
  }
  .secondbox {
    width: 65%;
  }
  .Current_UserBox {
    display: flex;
    justify-content: flex-end;
    margin: 10px;
  }
  .Current_User {
    margin: 1px;
    width: 20px;
    font-size: 1.2rem;
    color: white;
    border-radius: 25%;
    background-color: #378975;
  }
  .MainBox {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 75%;
    display: flex;
  }
  .ContentBox {
    display: flex;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(221, 236, 248);
  }
  /*.SideBox{
    position: absolute;
    width: 16%;
    height: 100%;
    background-color: rgb(172, 214, 251);
    transition: 0.3s;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    line-height: 70px;
  }*/
  .SideBox {
    display: none;
  }
  

  /*.offcanvas{
    width: 170px;
    height: 100%;
    padding-top: 30px;
    background-color: rgb(172, 214, 251);
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    line-height: 70px;
  }*/
}
/*PC용 CSS*/
@media (min-width: 1024px) {
  .HeaderBox {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 25%;
    display: flex;
  }
  .Header_Title {
    padding: 10px;
    font-size: 2rem;
    color: white;
  }
  .firstbox {
    display: flex;
    align-items: flex-end;
    margin-left: 18%;
    width: 40%;
  }
  .secondbox {
    width: 65%;
  }
  .Current_UserBox {
    display: flex;
    justify-content: flex-end;
    margin: 10px;
  }
  .Current_User {
    margin: 1px;
    width: 20px;
    font-size: 1.2rem;
    color: white;
    border-radius: 25%;
    background-color: #378975;
  }
  .MainBox {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 75%;
    display: flex;
    background-color: aliceblue;
  }
  .uk-button {
    display: none;
  }
  .SideBox {
    width: 16%;
    padding-top: 30px;
    background-color: rgb(172, 214, 251);
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    line-height: 70px;
  }
  
  .ContentBox {
    display: flex;
    margin: 0;
    padding: 0;
    width: 84%;
    height: 100%;
    background-color: rgb(221, 236, 248);
  }

}
</style>
