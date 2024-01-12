<script lang="ts" setup>
import Avatar from "@/assets/images/mock_avatar.png"
</script>
<template>
  <v-app>
    <v-app-bar :elevation="2" color="primary">
      <template v-slot:prepend>
        <v-avatar :image="Avatar"></v-avatar>
      </template>
      <template v-slot:append>
        <v-btn icon="mdi-bell-badge"></v-btn>
      </template>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
    <v-bottom-navigation bg-color="primary">
    <v-btn value="recent">
      <v-icon>mdi-home-account</v-icon>
      <span>Home</span>
    </v-btn>
    <v-btn disabled value="favorites">
      <v-icon>mdi-microscope</v-icon>
      <span>Scan</span>
    </v-btn>
    <v-btn disabled value="favorites">
      <v-icon>mdi-handshake</v-icon>
      <span>Habit Partner</span>
    </v-btn>
    <v-btn disabled value="nearby">
      <v-icon>mdi-medal</v-icon>
      <span>Leaderboard</span>
    </v-btn>
</v-bottom-navigation>
  </v-app>

</template>
