<template>
  <div id="hero">
    <v-card
    class="mx-auto"
    max-width="470"
    outlined
    >
      <v-list-item three-line>
        <v-list-item-content>
          <div class="text-overline mb-4">
            UX/UI Designer
          </div>
        <v-list-item-title class="text-h5 mb-1">
          Jessica Malfait
        </v-list-item-title>
        <v-list-item-subtitle>
          Making technology more accessible through design and empathy.
        </v-list-item-subtitle>
      </v-list-item-content>
      </v-list-item>  
      <v-card-actions>
      <button-hero></button-hero>
      <button-hero></button-hero>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import ButtonHero from '../buttons/button-hero.vue'

export default {
  components: { ButtonHero },
}
</script>
