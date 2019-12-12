<template>
  <v-app>
    <v-app-bar app clipped-left dark color="primary">
            <router-link to="/">
                <v-toolbar-title class="font-weight-bold">
                   <span class="white--text">hello-vue</span>
                </v-toolbar-title>
            </router-link>
            <v-spacer></v-spacer>
            <v-text-field
                    id="suchfeld"
                    flat
                    solo-inverted
                    hide-details
                    label="Suche"
                    clearable
                    v-model="query"
                    prepend-inner-icon="mdi-magnify"
                    @keyup.enter="search"
                    color="black"
            >
            </v-text-field>
            <v-spacer></v-spacer>
            <router-link to="/test">
                <v-toolbar-title class="font-weight-bold">
                   <span class="white--text">Test</span>
                </v-toolbar-title>
            </router-link>
            <v-spacer></v-spacer>
            <router-link to="/about">
                <v-toolbar-title class="font-weight-bold">
                   <span class="white--text">About</span>
                </v-toolbar-title>
            </router-link>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>

  </v-app>
</template>

