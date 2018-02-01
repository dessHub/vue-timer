<template>
  <div id="wrapper">
    <nav class="navbar navbar-default">
      <div class="container">
        <a class="navbar-brand" href="#">
          <i class="glyphicon glyphicon-timer"></i>
          Vue Timer Tracker
        </a>
        <ul class="nav navbar-nav">
           <li><router-link to="/">Home</router-link></li>
           <li><router-link to="/time-entries">Timer Entries</router-link></li>
        </ul>
      </div>
    </nav>
    <div class="container">
      <div class="col-md-3">
        <sidebar :time="totalTime"></sidebar>
      </div>
      <div class="col-md-9">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue'

export default {
  name: 'App',
  components: { 'sidebar': Sidebar },
  data () {
    return {
      totalTime: 1.5
    }
  },
  events: {
    timeUpdate (timeEntry) {
      this.totalTime += parseFlaot(timeEntry.totalTime)
    },
    deleteTime (timeEntry) {
      this.totalTime -= parseFloat(timeEntry.totalTime)
    }
  }
};
</script>

<style>

</style>
