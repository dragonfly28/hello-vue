<template>
  <v-container>
    <v-layout text-center wrap>
      <v-flex mb-4>
        <div class="about">
          <h1>This is a testing page</h1>
        </div>
      </v-flex>
      <v-flex mb-4>
        <brunnen-form-basic></brunnen-form-basic>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
// @ is an alias to /src
import BrunnenFormBasic from '@/components/BrunnenFormBasic.vue'

export default {
 
 components: {
    BrunnenFormBasic
  }
}
</script>