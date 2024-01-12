<script setup lang="ts">
import Hydration from '@/assets/images/hydration.png'
import Avatar from '@/assets/images/avatar.png'
import Temperature from '@/assets/images/temperature.png'
import Steps from '@/assets/images/steps.png'
import Ph from '@/assets/images/ph.png'
import Calcium from '@/assets/images/calcium.png'
import Salt from '@/assets/images/salt.png'
import VitaminC from '@/assets/images/vitamin_c.png'
import Magnesium from '@/assets/images/magnesium.png'
import Protein from '@/assets/images/protein.png'
import OxidativeStress from '@/assets/images/oxidative_stress.png'
import Ketone from '@/assets/images/keto.png'

import { DETAIL_PAGE, STAT_PREVIEW_PAGE } from '@/routes/route-name';
import { useRouter } from 'vue-router';
import { useDisplay } from 'vuetify/lib/framework.mjs';
defineProps<{fullName: string}>()
const display = useDisplay()
const router = useRouter()
const isMobile = display.smAndDown

</script>
<template>
    <v-container class="home-container" style="padding-top: 16px;">
        <v-sheet rounded :elevation="5" class="stats-container">
            <v-container class="gfs-score-container">
                <v-avatar class="m-4" size="64" :image="Avatar"></v-avatar>
                <h1 class="text-h5">Body Investor</h1>
                <v-container>
                    <h2 class="text-h4">70</h2>
                </v-container>
                <h2 class="text-h5">Genfosis Score</h2>
                <v-container class="share-button">
                <v-btn @click="() => router.push({name: STAT_PREVIEW_PAGE})" prepend-icon="mdi-share-variant" color="tertiary">
                    Share
                </v-btn>
            </v-container>

            </v-container>
        </v-sheet>
    </v-container>
    <!-- Health Score Section -->
    <v-container class="home-container" style="display: grid; grid-template-columns: repeat(2, 1fr);grid-column-gap: 20px;">
        <v-container class="health-score-container">
            <v-sheet rounded :elevation="5" class="stats-container">
                <v-container class="gfs-score-container">
                    <img height="100" :src="Steps"/>
                    <h2 class="text-h5">18K/12K</h2>
                    <p class="text-body">Steps</p>
                </v-container>
            </v-sheet>
        </v-container>
        <v-container class="health-score-container" >
            <v-sheet rounded :elevation="5" class="stats-container">
                <v-container class="gfs-score-container">
                    <img height="100" :src="Temperature"/>
                    <h2 class="text-h5" >36.6°C</h2>
                    <p class="text-body">{{ isMobile ? 'Temp' : 'Temperature'}}</p>
                </v-container>
            </v-sheet>
        </v-container>
    </v-container>
    <!-- Vivoo Score Section -->
    <v-container class="section-name-container">
        <h2 class="text-h5">Chemical Overview</h2>
    </v-container>
    <v-container class="home-container">
        <v-row class="align-center">
            <v-col cols="6" md="4" >
                <v-sheet @click="() => router.push({name: DETAIL_PAGE, params: {id: 1}})" rounded :elevation="5" :style="{borderTop: '25px  solid #005E7C'}">
                    <v-container class="vivoo-score-container">
                        <v-avatar  :image="Hydration" :size="60" style="margin-top: -10px;margin-left: -10px;"></v-avatar>
                        <h3 class="text-h6">Dehydrated</h3>
                        <p class="text-body-2">Water</p>
                    </v-container>
                </v-sheet>
            </v-col>
            <v-col cols="6" md="4">
                <v-sheet rounded :elevation="5" :style="{borderTop: '25px  solid #89CFF0'}">
                    <v-container class="vivoo-score-container" >
                        <v-avatar :image="Ph" :size="60" style="margin-top: -10px;margin-left: -10px;"></v-avatar>
                        <h2 class="text-h6">Optimal</h2>
                        <p class="text-body-2">pH</p>
                    </v-container>
                </v-sheet>
            </v-col>
            <v-col cols="6" md="4">
                <v-sheet rounded :elevation="5" :style="{borderTop: '25px  solid #BDD7EE'}">
                    <v-container class="vivoo-score-container" >
                        <v-avatar :image="Calcium" :size="60" style="margin-top: -10px;margin-left: -10px;"></v-avatar>
                        <h2 class="text-h6">Optimal</h2>
                        <p class="text-body-2">Calcium</p>
                    </v-container>
                </v-sheet>
            </v-col>
            <v-col cols="6" md="4">
                <v-sheet rounded :elevation="5" class="caution" :style="{borderTop: '25px  solid #6FAF83'}">
                    <v-container class="vivoo-score-container" >
                        <v-avatar :image="Magnesium" :size="60" style="margin-top: -10px;margin-left: -10px;"></v-avatar>

                        <h2 class="text-h6">Low</h2>
                        <p class="text-body-2">Magnesium</p>
                    </v-container>
                </v-sheet>
            </v-col>
            <v-col cols="6" md="4">
                <v-card rounded :elevation="5" class="caution" :style="{borderTop: '25px  solid #FFA07A'}">
                    <v-container class="vivoo-score-container" >
                        <v-avatar :image="VitaminC" :size="60" style="margin-top: -10px;margin-left: -10px;"></v-avatar>
                        <v-row>
                            <v-col>
                            <h2 class="text-h6">Low</h2>
                            <p class="text-body-2">Vitamin C</p>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card>
                
            </v-col>
            <v-col cols="6" md="4">
                <v-sheet rounded :elevation="5" class="caution" :style="{borderTop: '25px  solid #A0A0A0'}">
                    <v-container class="vivoo-score-container" >
                        <v-avatar :image="Salt" :size="60" style="margin-top: -10px;margin-left: -10px;"></v-avatar>
                        <h2 class="text-h6">High</h2>
                        <p class="text-body-2">Sodium</p>
                    </v-container>
                </v-sheet>
            </v-col>
            <v-col cols="6" md="4">
                <v-sheet rounded :elevation="5" :style="{borderTop: '25px  solid #FFD700'}">
                    <v-container class="vivoo-score-container" >
                        <v-avatar :image="Protein" :size="60" style="margin-top: -10px;margin-left: -10px;"></v-avatar>
                        <h2 class="text-h6">Great</h2>
                        <p class="text-body-2">Protein</p>
                    </v-container>
                </v-sheet>
            </v-col>
            <v-col cols="6" md="4">
                <v-sheet rounded :elevation="5" :style="{borderTop: '25px  solid #D9534F'}">
                    <v-container class="vivoo-score-container" >
                        <v-avatar :image="OxidativeStress" :size="60" style="margin-top: -10px;margin-left: -10px;"></v-avatar>
                        <h2 class="text-h6">No risk</h2>
                        <p class="text-body-2">Oxidative Stress</p>
                    </v-container>
                </v-sheet>
            </v-col>
            <v-col cols="6" md="4">
                <v-sheet :style="{borderTop: '25px  solid #4CAF50'}" @click="() => router.push({name: DETAIL_PAGE, params: {id: 2}})" rounded :elevation="5">
                    <v-container class="vivoo-score-container" >
                        <v-avatar :image="Ketone" :size="60" style="margin-top: -10px;margin-left: -10px;"></v-avatar>
                        <h2 class="text-h6">Great</h2>
                        <p class="text-body-2">Ketone</p>
                    </v-container>
                </v-sheet>
            </v-col>
            


        </v-row>       
    </v-container>



</template>
<style scoped>
.caution {
    background-image: url('@/assets/images/caution.png');
    background-repeat: no-repeat;
    background-size: 30px;
    background-position: calc(100% - 10px) 10px;
}
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
    padding: 0px 0px 0px 0px;
}
.vivoo-score-header {
    width: 100%;
    height: 30px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
}
.vivoo-score-container {
    padding: 12px;
    display: flex;
    flex-direction: column;
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

.share-button {
    text-align:right;
}
.chemical-card {
    border-top: 25px  solid #005E7C;
}
</style>