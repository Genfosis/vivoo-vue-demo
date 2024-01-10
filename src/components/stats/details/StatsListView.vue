<template>
    <v-container>
        <v-row>
            <v-col v-for="n in 9" :key="n" cols="4">
                <v-card class="d-flex mx-auto justify-center"  max-width="200" height="200" elevation="10" active-class="#">
                    <div class="flex-col text-center">
                        <v-icon icon="fas fa-solid fa-droplet"></v-icon>
                        <div class="text-h5">water</div>
                    </div>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>