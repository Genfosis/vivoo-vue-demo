<script setup lang="ts">


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
    <v-container class="home-container" style="padding-top: 16px;">
        <v-sheet rounded :elevation="5" class="stats-container">
            <v-container class="gfs-score-container">
                <v-avatar class="m-4" size="64" color="grey">
                    <img src="/src/assets/logo.png">
                </v-avatar>
                <p>Body Investor</p>
                <h1 style="font-size: 50px;">99</h1>
                <p>Genfosis Score</p>
                <v-btn rounded="lg" style="margin-left: auto;margin-top: -20px;font-size: 10px;">
                    Share
                </v-btn>
            </v-container>
        </v-sheet>
    </v-container>
    <!-- Health Score Section -->
    <v-container class="home-container" style="display: grid; grid-template-columns: repeat(2, 1fr);grid-column-gap: 20px;">
        <v-container class="health-score-container">
            <v-sheet rounded :elevation="5" class="stats-container">
                <v-container class="gfs-score-container">
                    <h2>18K/12K</h2>
                    <p>Steps</p>
                </v-container>
            </v-sheet>
        </v-container>
        <v-container class="health-score-container" >
            <v-sheet rounded :elevation="5" class="stats-container">
                <v-container class="gfs-score-container">
                    <h2 >36.6°C</h2>
                    <p>Temp</p>
                </v-container>
            </v-sheet>
        </v-container>
    </v-container>
    <!-- Vivoo Score Section -->
    <v-container class="section-name-container">
        <h2 style="margin: -10px 0px -5px 0px;">Vivoo Score</h2>
    </v-container>
    <v-container class="home-container">
        <v-row class="align-center">
            <v-col cols="6" md="4">
                <v-sheet rounded :elevation="5" class="stats-container">
                    <v-container class="gfs-score-container">
                        <h2>Dehydration</h2>
                        <p>Water</p>
                    </v-container>
                </v-sheet>
            </v-col>
            <v-col cols="6" md="4">
                <v-sheet rounded :elevation="5" class="stats-container">
                    <v-container class="gfs-score-container">
                        <h2>Optimal</h2>
                        <p>pH</p>
                    </v-container>
                </v-sheet>
            </v-col>
            <v-col cols="6" md="4">
                <v-sheet rounded :elevation="5" class="stats-container">
                    <v-container class="gfs-score-container">
                        <h2>Optimal</h2>
                        <p>Calcium</p>
                    </v-container>
                </v-sheet>
            </v-col>
            <v-col cols="6" md="4">
                <v-sheet rounded :elevation="5" class="stats-container">
                    <v-container class="gfs-score-container">
                        <h2>18K/12K</h2>
                        <p>Steps</p>
                    </v-container>
                </v-sheet>
            </v-col>
            <v-col cols="6" md="4">
                <v-sheet rounded :elevation="5" class="stats-container">
                    <v-container class="gfs-score-container">
                        <h2>18K/12K</h2>
                        <p>Steps</p>
                    </v-container>
                </v-sheet>
            </v-col>
            <v-col cols="6" md="4">
                <v-sheet rounded :elevation="5" class="stats-container">
                    <v-container class="gfs-score-container">
                        <h2>18K/12K</h2>
                        <p>Steps</p>
                    </v-container>
                </v-sheet>
            </v-col>
            <v-col cols="6" md="4">
                <v-sheet rounded :elevation="5" class="stats-container">
                    <v-container class="gfs-score-container">
                        <h2>18K/12K</h2>
                        <p>Steps</p>
                    </v-container>
                </v-sheet>
            </v-col>
            <v-col cols="6" md="4">
                <v-sheet rounded :elevation="5" class="stats-container">
                    <v-container class="gfs-score-container">
                        <h2>18K/12K</h2>
                        <p>Steps</p>
                    </v-container>
                </v-sheet>
            </v-col>
            <v-col cols="6" md="4">
                <v-sheet rounded :elevation="5" class="stats-container">
                    <v-container class="gfs-score-container">
                        <h2>18K/12K</h2>
                        <p>Steps</p>
                    </v-container>
                </v-sheet>
            </v-col>
            



                <!-- <v-sheet rounded :elevation="5" class="stats-container">
                    <v-container class="gfs-score-container">
                        <h2>18K/12K</h2>
                        <p>Steps</p>
                    </v-container>
                </v-sheet> -->
        </v-row>       
    </v-container>
    
    <!-- Vdsgsreadgreagggggggggggga -->


    <v-container>
        <v-sheet rounded :elevation="5" class="stats-container">
        <v-container>
            <h1>Junee Juriya</h1>
            <h1>15-01-2024</h1>
        <v-row class="align-center">
            <v-col :cols="isMobile ? 12 : 6">
            </v-col>
            <v-col>
                <v-container class="detail">
                    <h1>Health Score</h1>
                    <v-avatar class="health-score" variant="elevated" size="60" color="blue" text="70"></v-avatar>
                    <div class="progress-bar-wrapper">
                        <v-progress-linear
                            v-model="hydration"
                            rounded
                            color="amber"
                            height="20"
                        ></v-progress-linear>
                    </div>
                    <div class="progress-bar-wrapper">
                        <v-progress-linear
                            rounded
                            v-model="fitnessLevel"
                            color="blue"
                            height="20"
                        ></v-progress-linear>
                    </div>
                    <div class="progress-bar-wrapper">
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
.home-container {
    padding: 5px 16px 5px 16px;
}
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
.gfs-score-container {
    padding-top: 10px;
    padding-bottom: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}
.health-score-container {
    padding: 0px;
    padding-top: 10px;
    padding-bottom: 10px;
    align-items: center;
    text-align: center;
}
p {
    text-align: left;
}
.section-name-container {
    padding: 0px 16px 0px 16px;
}

</style>