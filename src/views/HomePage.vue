<script setup lang="ts">
import Hydration from '@/assets/images/hydration.png'

import { ref } from 'vue';
import { useDisplay } from 'vuetify/lib/framework.mjs';
defineProps<{fullName: string}>()
const display = useDisplay()


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
            <v-col cols="6" md="4" >
                <v-sheet rounded :elevation="5" class="vivoo-score-sheet">
                    <div class="vivoo-score-header" style="background: linear-gradient(180deg,#47A9DA 0%, white 80%)"></div>
                    <v-container class="vivoo-score-container">
                        <h2>Dehydrated</h2>
                        <p class="text-body-2">Water</p>
                    </v-container>
                </v-sheet>
            </v-col>
            <v-col cols="6" md="4">
                <v-sheet rounded :elevation="5" class="vivoo-score-sheet">
                    <div class="vivoo-score-header" style="background: linear-gradient(180deg,orange,white 80%)"></div>
                    <v-container class="vivoo-score-container">
                        <h2>Optimal</h2>
                        <p class="text-body-2">pH</p>
                    </v-container>
                </v-sheet>
            </v-col>
            <v-col cols="6" md="4">
                <v-sheet rounded :elevation="5" class="vivoo-score-sheet">
                    <div class="vivoo-score-header" style="background: linear-gradient(180deg,blue,white 80%)"></div>
                    <v-container class="vivoo-score-container">
                        <h2>Optimal</h2>
                        <p class="text-body-2">Calcium</p>
                    </v-container>
                </v-sheet>
            </v-col>
            <v-col cols="6" md="4">
                <v-sheet rounded :elevation="5" class="vivoo-score-sheet">
                    <div class="vivoo-score-header" style="background: linear-gradient(180deg,purple,white 80%)"></div>
                    <v-container class="vivoo-score-container">
                        <h2>Low</h2>
                        <p class="text-body-2">Magnesium</p>
                    </v-container>
                </v-sheet>
            </v-col>
            <v-col cols="6" md="4">
                <v-sheet rounded :elevation="5" class="vivoo-score-sheet">
                    <div class="vivoo-score-header" style="background: linear-gradient(180deg,orangered,white 80%)"></div>
                    <v-container class="vivoo-score-container">
                        <h2>Low</h2>
                        <p class="text-body-2">Vitamin C</p>
                    </v-container>
                </v-sheet>
            </v-col>
            <v-col cols="6" md="4">
                <v-sheet rounded :elevation="5" class="vivoo-score-sheet">
                    <div class="vivoo-score-header" style="background: linear-gradient(180deg,gray,white 80%)"></div>
                    <v-container class="vivoo-score-container">
                        <h2>High</h2>
                        <p class="text-body-2">Sodium</p>
                    </v-container>
                </v-sheet>
            </v-col>
            <v-col cols="6" md="4">
                <v-sheet rounded :elevation="5" class="vivoo-score-sheet">
                    <div class="vivoo-score-header" style="background: linear-gradient(180deg,salmon,white 80%)"></div>
                    <v-container class="vivoo-score-container">
                        <h2>Great</h2>
                        <p class="text-body-2">Protein</p>
                    </v-container>
                </v-sheet>
            </v-col>
            <v-col cols="6" md="4">
                <v-sheet rounded :elevation="5" class="vivoo-score-sheet">
                    <div class="vivoo-score-header" style="background: linear-gradient(180deg,darkslategray,white 80%)"></div>
                    <v-container class="vivoo-score-container">
                        <h2>No risk</h2>
                        <p class="text-body-2">Oxidative Stress</p>
                    </v-container>
                </v-sheet>
            </v-col>
            <v-col cols="6" md="4">
                <v-sheet rounded :elevation="5" class="vivoo-score-sheet">
                    <div class="vivoo-score-header" style="background: linear-gradient(180deg,#6FAF83 0%,white 80%)"></div>
                    <v-container class="vivoo-score-container">
                        <h2>Great</h2>
                        <p class="text-body-2">Ketone</p>
                    </v-container>
                </v-sheet>
            </v-col>
            


        </v-row>       
    </v-container>
    
    <!-- Vdsgsreadgreagggggggggggga -->




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
    /* background-color: #ffecc9; */
    padding: 15px;
}
.vivoo-score-sheet {
    /* background-color: #ffecc9; */
    padding-bottom: 15px;
}
.vivoo-score-header {
    width: 100%;
    height: 30px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
}
.vivoo-score-container {
    padding: 5px;
    padding-top: 0px;
    padding-bottom: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
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
    padding: 5px;
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
    padding: 0px 16px 0px 20px;
}

</style>