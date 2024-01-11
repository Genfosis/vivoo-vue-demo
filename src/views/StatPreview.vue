<script setup lang="ts">
import Avatar from '@/assets/images/avatar.png'
import Hydration from '@/assets/images/hydration.png'
import FitnessLevel from '@/assets/images/fitness_level.png'
import EatingHabit from '@/assets/images/eating_habit.png'

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
    <v-container>
        <v-sheet rounded :elevation="5" class="stats-container">
        <v-container>
            <h1>Junee Juriya</h1>
            <h1>15-01-2024</h1>
        <v-row class="align-center">
            <v-col :cols="isMobile ? 12 : 6">
                <v-img aspect-ratio="16/9" cover :src="Avatar"
></v-img>
            </v-col>
            <v-col>
                <v-container class="detail">
                    <h1>Health Score</h1>
                    <v-avatar class="health-score" variant="elevated" size="60" color="blue" text="70"></v-avatar>
                    <div class="progress-bar-wrapper">
                        <v-avatar size="50" :image="Hydration"></v-avatar>
                        <v-progress-linear
                            v-model="hydration"
                            rounded
                            color="amber"
                            height="20"
                        ></v-progress-linear>
                    </div>
                    <div class="progress-bar-wrapper">
                        <v-avatar size="50" :image="FitnessLevel"></v-avatar>
                        <v-progress-linear
                            rounded
                            v-model="fitnessLevel"
                            color="blue"
                            height="20"
                        ></v-progress-linear>
                    </div>
                    <div class="progress-bar-wrapper">
                        <v-avatar size="50" :image="EatingHabit"></v-avatar>
                        <v-progress-linear
                            v-model="eatingHabit"
                            rounded
                            color="amber"
                            height="20"
                        ></v-progress-linear>
                    </div>
                </v-container>
            </v-col>
        </v-row>
        </v-container>
        <v-sheet class="achievement-banner" rounded color="info"   :elevation="9">
        <v-container >
           <v-row class="align-center">
            <v-col :cols="isMobile? 2: 1">
                <v-avatar size="40" variant="tonal" text="something"></v-avatar>
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
       <v-btn class="butotn">Share</v-btn>
    </v-container>
</template>
<style scoped>
.health-score {
    margin-left: auto;
    margin-right: auto;
}
.detail {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    gap: 15px;
    text-align: center;
}
.stats-container {
    background-color: #ffecc9;
    padding: 15px;
}
.achievement-banner {
    width: 60%;
    min-width: 250px;
    margin-left: auto;
    margin-right: auto;
}
.progress-bar-wrapper {
    padding-top: 10px;
    padding-bottom: 10px;
    display: flex;
    align-items: center;
}
p {
    text-align: left;
}
</style>