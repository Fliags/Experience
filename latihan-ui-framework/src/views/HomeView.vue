<template>
  <v-app id="app">

    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
      clipped
      color="#4D77FF"
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="grey--text text--lighten-5"
        >

          <v-list-item v-for="(list, index) in category" :key="index">
            <v-list-item-title class="text-capitalize" @click="changeCategories(list)">{{ list }}</v-list-item-title>
          </v-list-item>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    
    <v-app-bar 
    color="primary"
    app
    clipped-left
    dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>News App</v-toolbar-title>

      <v-spacer></v-spacer>
      
      <v-col class="input" cols="12" sm="6" md="3">
        <v-text-field v-model = message
        placeholder="Search"
        filled
        rounded
        outlined>
        </v-text-field>
      </v-col>

      <v-btn icon @click="changeCategories(message)">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>

    <div class="home">
    <h1>Berita Terkini</h1>
      <div class="container" v-for="(itemNews, index) in news" :key="index">
        <router-link :to="'/detail/id' + index">
          <div class="barNews">
              <v-img class="white--text align-end" height="400px" :src="itemNews.urlToImage" />
              <h2>{{ itemNews.title }}</h2>
              <p>{{ itemNews.description }}</p>
              <v-btn v-if="news[index].author === null"
                rounded
                class="text-capitalize"
              >
                Anonym
              </v-btn>
              <v-card-actions>
                <v-row class="d-flex justify-content-between  px-4 py-4" justify="space-between">
                  <!-- Tombol TechCruch -->
                    <v-btn
                      color="grey darken-3"
                      rounded
                      class="order-1"
                    >
                    <span class="white--text">TechCruch</span>
                    </v-btn>
                    <!-- icon sosial media -->
                    <div class="text-justify d-flex align-center order-2 order-sm-2 mb-3 mb-sm-0"> 
                    <v-tooltip bottom> 
                        <template v-slot:activator="{ on, attrs }"> 
                        <a href="www.redditmedia.com"> 
                            <v-icon 
                            color="#FF4500" 
                            dark 
                            v-bind="attrs" 
                            v-on="on" 
                            >mdi-reddit 
                            </v-icon> 
                        </a> 
                        </template> 
                        <span>Reddit</span> 
                    </v-tooltip> 
        
                    <v-tooltip bottom> 
                        <template v-slot:activator="{ on, attrs }"> 
                        <a href="https://twitter.com/twitter"> 
                            <v-icon 
                            color="info" 
                            dark 
                            v-bind="attrs" 
                            v-on="on" 
                            > 
                            mdi-twitter 
                            </v-icon> 
                        </a> 
                        </template> 
                        <span>Twitter</span> 
                    </v-tooltip> 
                    
                    <v-tooltip bottom> 
                        <template v-slot:activator="{ on, attrs }"> 
                        <a href="https://id-id.facebook.com/"> 
                            <v-icon 
                            color="primary" 
                            dark 
                            v-bind="attrs" 
                            v-on="on" 
                            > 
                            mdi-facebook 
                            </v-icon> 
                        </a> 
                        </template> 
                        <span>Facebook</span> 
                    </v-tooltip> 
        
                    <v-tooltip bottom> 
                        <template v-slot:activator="{ on, attrs }"> 
                        <a href="https://myaccount.google.com/profile"> 
                            <v-icon 
                            color="red" 
                            dark 
                            v-bind="attrs" 
                            v-on="on" 
                            > 
                            mdi-google-plus 
                            </v-icon> 
                        </a> 
                        </template> 
                        <span>Google+</span> 
                    </v-tooltip> 
        
                    <v-tooltip bottom> 
                        <template v-slot:activator="{ on, attrs }"> 
                        <a href="https://www.linkedin.com/"> 
                            <v-icon 
                            color="blue" 
                            dark 
                            v-bind="attrs" 
                            v-on="on" 
                            >mdi-linkedin</v-icon> 
                        </a> 
                        </template> 
                        <span>Lingked In</span> 
                    </v-tooltip> 
                    </div>
                  <!-- Tombol Read More -->
                  <v-btn
                    color="info"
                    class="order-3"
                  >
                  Read More
                  </v-btn>
                </v-row>
              </v-card-actions>
          </div>
        </router-link>
      </div> 
    </div>
  </v-app>
</template>

<script>
  export default {
    
    data: () => ({
      drawer: false,
      group: null,
      message: '',
      category: ["general", "business", "entertainment", "health", "science", "sports", "technology"]
    }),

    watch: {
      group () {
        this.drawer = false
      },
    },
    computed: {
      news(){
        return this.$store.state.listNews
      },
    },
    mounted() {
      this.$store.dispatch('fetchNews')
    },
    methods : {
      changeCategories(payload){
        this.$store.dispatch('changeCategories', payload)
        this.$store.dispatch('fetchNews')
      }
    }
  }
</script>

<style scoped>

*{
  margin: 0;
  padding: 0;
}

h1{
  text-align: center;
}

h2{
  text-align: start;
}

.home{
  width: 95%;
  padding: 25px;
  margin: 20px auto;
}

.barNews{
  background-color: #eee;
  color: black;
  margin: 20px 0;
  padding: 20px;
}

.input{
  padding: 0 0 100px 0;
  margin-top: 132px;
}

a{
  text-decoration: none;
  color: rgb(3, 43, 44);
}

p{
  margin: 10px 0;
}
</style>
