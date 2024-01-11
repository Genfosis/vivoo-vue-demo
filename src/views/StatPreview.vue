<script setup lang="ts">
import Avatar from '@/assets/images/avatar.png'
import Hydration from '@/assets/images/hydration.png'
import FitnessLevel from '@/assets/images/fitness_level.png'
import EatingHabit from '@/assets/images/eating_habit.png'
import Streak from '@/assets/images/streak.png'
import { ref } from 'vue';
import { useDisplay } from 'vuetify/lib/framework.mjs';
defineProps<{fullName: string}>()
const display = useDisplay()
const isMobile = display.smAndDown
const hydration = ref(40)
const fitnessLevel = ref(70)
const eatingHabit = ref(30)

</script>
<template>
    <v-container class="container">
    <v-container>
        <v-sheet rounded :elevation="5" class="stats-container">
        <v-container class="background">
            <h1 class="text-h6">Junee Juriya</h1>
            <h2 class="text-subtitle-1">15-01-2024</h2>
        <v-row class="align-center">
            <v-col :cols="isMobile? 4:6">
                <v-img v-if="!isMobile" :src="Avatar" aspect-ratio="16/9"></v-img>
            </v-col>
            <v-col>
                <v-container class="detail">
                    <h1 class="text-h6">Health Score</h1>
                    <v-avatar class="health-score" variant="elevated" :size="isMobile? 30: 60" color="blue" text="70"></v-avatar>
                    <div class="progress-bar-wrapper">
                        <v-avatar :size="isMobile? 40: 50" :image="Hydration"></v-avatar>
                        <v-progress-linear
                            v-model="hydration"
                            rounded
                            color="amber"
                            :height="isMobile? 10: 20"
                        ></v-progress-linear>
                    </div>
                    <div class="progress-bar-wrapper">
                        <v-avatar :size="isMobile? 40: 50" :image="FitnessLevel"></v-avatar>
                        <v-progress-linear
                            rounded
                            v-model="fitnessLevel"
                            color="blue"
                            :height="isMobile? 10: 20"
                        ></v-progress-linear>
                    </div>
                    <div class="progress-bar-wrapper">
                        <v-avatar :size="isMobile? 40: 50" :image="EatingHabit"></v-avatar>
                        <v-progress-linear
                            v-model="eatingHabit"
                            rounded
                            color="amber"
                            :height="isMobile? 10: 20"
                        ></v-progress-linear>
                    </div>
                </v-container>
            </v-col>
        </v-row>
        </v-container>
        <v-sheet class="achievement-banner" rounded color="surface"   :elevation="9">
        <v-container >
           <v-row class="align-center">
            <v-col :cols="isMobile? 2: 1">
                <v-avatar size="40" :image="Streak"></v-avatar>
            </v-col>
            <v-col :cols="isMobile? 10: 11">
                <p>4 Week Exercise Streak !</p>
            </v-col>
           </v-row>
        </v-container>
        </v-sheet>
        </v-sheet>
    </v-container>
    <v-container>
        <v-row justify="end">
       <v-btn prepend-icon="mdi-share-variant" color="primary" class="butotn">Share</v-btn>
    </v-row>
    </v-container>
</v-container>
</template>
<style scoped>
.container {
    padding-bottom: 10px;
}
.health-score {
    margin-left: auto;
    margin-right: auto;
}
.detail {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    text-align: center;
    gap: 10px;
}
.stats-container {
    background-color: hsl(39, 100%, 89%);
    padding: 10px;
  
}
@media only screen and (max-width: 960px) {
 .stats-container {
    background-size: 160px;
    background-image: url('@/assets/images/avatar.png');
    background-position: left;
    background-repeat: no-repeat;
    padding: 15px;
 }
}

.achievement-banner {
    width: 60%;
    min-width: 250px;
    margin-left: auto;
    margin-right: auto;
}
.progress-bar-wrapper {
    display: flex;
    align-items: center;
}
p {
    text-align: left;
}
</style>