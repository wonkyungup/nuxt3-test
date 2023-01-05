<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col cols="12" xs="12" sm="10" md="10" lg="8" xl="8">
        <v-card>
          <v-card-title class="headline">
            화천 마이스터를 소개합니다.
          </v-card-title>
          <v-card-text>
            <v-row dense>
              <v-col cols="6">
                기획자
                <li>원진철</li>
              </v-col>
              <v-col cols="6">
                개발자
                <li>원경업</li>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions>
            <v-btn
                color="primary"
                block
                to="/"
            > 돌아가기 </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  methods: {
    // @click="onClickBack"
    onClickBack () {
      if (this.$route['path'] !== '/') {
        this.$router['push']('/')
      }
    }
  }
}
</script>
