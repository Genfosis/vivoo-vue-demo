<script lang="ts" setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import Hydration from '@/assets/images/hydration.png'
import BulletPoint from '@/assets/images/bullet_point.png'
import Keto from '@/assets/images/keto.png'
const route = useRoute()
const id = parseInt(route.params["id"] as string)
const isWater = id === 1
const icon = computed(() => isWater? Hydration : Keto)
const title = computed(() => isWater ? "Water" : "Keto")
const result = computed(() => isWater ? "Dehydration" : "Great")
const description = computed(() => isWater? "Water is a vital component for sustaining life, as every cell, tissue, and organ in the body relies on it for optimal functioning. It is crucial in facilitating the digestion, absorption, and transportation of nutrients to cells, as well as in the formation of essential biochemical reactions necessary for overall well-being. Maintaining proper hydration offers several benefits, including the regulation of body temperature, enhancement of cognitive function, maximization of physical performance, and improvement in the digestion and absorption of nutrients." : "Ketones, a type of acid produced by the liver, become prominent when the body lacks the required glucose for energy and resorts to burning fat. This process occurs during periods of fasting or adaptation to starvation. In healthy individuals, hormonal regulation ensures that blood sugar levels remain within a normal range despite ketone production.For individuals not following a ketogenic diet, elevated levels of ketones in urine may stem from various factors such as skipping meals, inadequate food intake, excessive alcohol consumption, prolonged hunger, eating disorders, fasting, or engaging in long-term exercises.")
const score = computed(() => isWater? "3/10": "10/10")
const aboutResult = computed(() => isWater? "According to your body and activity level, your appropriate water intake amount is 2.5 liters per day.We suggest these techniques to help you reach your water intake goal:": "You have already achieved commendable results; however, maintaining a healthy lifestyle remains crucial. For example:")
const suggestions = computed(() => {
    if(isWater) {
        return [
            "Set reminders to remind yourself to drink water at regular intervals throughout the day.",
            "Carry a water bottle; having water readily available makes it easier to stay hydrated.",
            "Flavor your water; add a slice of lemon, cucumber, or a splash of natural fruit juice to enhance the taste.",
            "Include water-rich foods in your diet, such as watermelon, cucumber, and celery, to contribute to overall hydration."
        ]
    }

    
    return ["Sustain a well-balanced diet that incorporates a variety of fruits, vegetables, whole grains, lean proteins, and healthy fats. This ensures the intake of essential nutrients for overall health.",
"Integrate regular physical activity into your routine, aiming for at least 150 minutes of moderate-intensity exercise per week. This practice promotes cardiovascular health, enhances strength, and fosters flexibility.",
"Ensure sufficient water intake throughout the day to stay hydrated. Water is essential for bodily functions, and proper hydration supports overall well-being."]
})
const unit = computed(() => isWater? 'Specific Gravity': 'mg/dL')
const resultNumber = computed(() => isWater? '1.020': '0')

</script>
<template>
    <v-container>
    <v-container>
        <v-sheet :elevation="3" rounded class="stat-container" :class="{['keto-container']: !isWater, ['water-container']: isWater}">
            <v-container>
            <v-img :src="icon" max-height="100px" ></v-img>
                <h1 class="text-h4">{{title}}</h1>
                <h2 class="text-h5">{{result}}</h2>
                <p class="text-body">{{description}}</p>
            </v-container>
            <hr/>
            <v-container>
                <v-row>
                    <v-col>
                        <h3 class="text-h5">Score</h3>
                        <p class="text-body">{{ score }}</p>
                    </v-col>
                    <v-col>
                        <h3 class="text-h5">{{ unit }}</h3>
                        <p class="text-body">{{ resultNumber }}</p>
                    </v-col>
                </v-row>
            </v-container>
        </v-sheet>
    </v-container>
    <v-container>
            <v-container>
                <h1 class="text-h4">About Result</h1>
                    <v-sheet class="suggestion-container"  elevation="3" rounded>
                        <h1 class="text-h5">Suggestion</h1>
                            <p class="text-body">{{ aboutResult }}</p>
<v-list lines="one">
  <v-list-item class="text-body" v-for="(suggestion,index) in suggestions" :key="index" :prepend-avatar="BulletPoint">{{ suggestion }}</v-list-item>
</v-list>
            </v-sheet>
            </v-container>
    </v-container>
    </v-container>
</template>
<style scoped>

.suggestion-container {
    padding: 20px;
    margin-top: 20px;
}
.stat-container {
    padding: 10px;
    text-align: center;
}
.keto-container {
    background: linear-gradient(180deg, #6FAF83 0%, #FFFFFF 20%);
}

.water-container {
    background: linear-gradient(180deg, #47A9DA 0%, #FFFFFF 20%);
}
</style>