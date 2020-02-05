<template>
  <div id="app">
    <div class="container">
      <img v-bind:src="img_path" height="250px" >
      <h1>red : {{Math.round(red*100) +"%"}}, black {{Math.round(black*100) +"%"}}</h1>
    </div>

  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
      red : 0.0,
      black : 0.0,
      img_path : './assets/logo.png',
    }
  },
  sockets: {
    connect() {
      console.log('socket connected')
    },
    send_to_front(msg) {

      this.red = msg.red;
      this.black = msg.black;
      this.img_path = msg.img_path;
      console.log(msg)
    }
  },
}
</script>

<style>

*{
  box-sizing: border-box;
}
body {
  margin : 0px;
}

img {
  border : solid 1px #111;
}

.container {
  margin : 100px auto 0 auto;
  padding : 20px;
  width : 60%;
  border : solid 1px #111;
  text-align :center;
}

</style>
