<template>
    <v-form>
        <v-container>
            <!-- Positionsnummer -->
            <v-row>
                <v-col
                cols="12"
                md="4"
                >
                    <v-text-field
                        label="Positionsnummer"
                         :rules="this.$getRule('ONLYNUMBERS')"
                        filled
                    ></v-text-field>
                </v-col>
            </v-row>
            <!-- Art und Form -->
            <v-row>
                <v-col
                cols="12"
                md="4"
                >
                    <v-select
                        :items="art"
                        filled
                        label="Art"
                    ></v-select>
                </v-col>
                <v-col
                cols="12"
                md="4"
                >
                    <v-select
                        :items="form"
                        filled
                        label="Form"
                    ></v-select>
                </v-col>
            </v-row>
            <!-- Beckeninnenmaße -->
            <v-row>
                <v-col
                cols="12"
                md="4"
                >
                    <v-text-field
                        label="Becken innen Höhe"
                         :rules="this.$getRule('ONLYNUMBERS')"
                        filled
                    ></v-text-field>
                </v-col>
                <v-col
                cols="12"
                md="4"
                >
                    <v-text-field
                        label="Becken innen Breite"
                        :rules="this.$getRule('ONLYNUMBERS')"
                        filled
                    ></v-text-field>
                </v-col>
                <v-col
                cols="12"
                md="4"
                >
                    <v-text-field
                        label="Becken innen Tiefe"
                        :rules="this.$getRule('ONLYNUMBERS')"
                        filled
                    ></v-text-field>
                </v-col>
            </v-row>
            <!-- Beckenaußenmaße -->
            <v-row>
                <v-col
                cols="12"
                md="4"
                >
                    <v-text-field
                        label="Becken außen Höhe"
                        :rules="this.$getRule('ONLYNUMBERS')"
                        filled
                    ></v-text-field>
                </v-col>
                <v-col
                cols="12"
                md="4"
                >
                    <v-text-field
                        label="Becken außen Breite"
                        :rules="this.$getRule('ONLYNUMBERS')"
                        filled
                    ></v-text-field>
                </v-col>
                <v-col
                cols="12"
                md="4"
                >
                    <v-text-field
                        label="Becken außen Tiefe"
                        :rules="this.$getRule('ONLYNUMBERS')"
                        filled
                    ></v-text-field>
                </v-col>
            </v-row>
            <!-- Wasser -->
            <v-row>
                <v-col
                cols="12"
                md="4"
                >
                    <v-text-field
                        label="Wasservolumen"
                        :rules="this.$getRule('ONLYNUMBERS')"
                        filled
                    ></v-text-field>
                </v-col>
                <v-col
                cols="12"
                md="4"
                >
                    <v-select
                        :items="artWassereinspeisung"
                        filled
                        label="Art der Wassereinspeisung"
                    ></v-select>
                </v-col>
            </v-row>
        </v-container>
    </v-form>
</template>
<script>
  export default {
    data: () => ({
      art: ['Gieskannenbrunnen', 'anderer Brunnen'],
      form: ['rund', 'quadratisch', 'oval'],
      artWassereinspeisung: ['Variante A', 'Variante B'],
    }),
  }
</script>
