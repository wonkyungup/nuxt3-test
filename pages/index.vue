<template>
  <v-row justify="center" align="center">
    <v-col cols="12" xs="12" sm="10" md="10" lg="8" xl="8">
      <v-card class="logo py-4 d-flex justify-center">
        <NuxtLogo />
        <VuetifyLogo />
      </v-card>
      <v-card>
        <v-card-title class="headline">
          해당 페이지는 "화천 마이스터" 샘플 페이지 입니다.
        </v-card-title>
        <v-card-text>
          <v-container>
            <h4>
              개발환경을 소개합니다
            </h4>
            <br />
            <v-row dense>
              <v-col cols="4">
                프론트엔드
                <li>Nuxt.js</li>
                <li>Vuetify</li>
              </v-col>
              <v-col cols="4">
                백엔드
                <li>Node.js</li>
                <li>Serverless</li>
                <li>JWT</li>
                <li>MYSQL</li>
              </v-col>
              <v-col cols="4">
                배포 환경
                <li>Aws S3</li>
                <li>Aws Route 53</li>
                <li>Aws ACM</li>
                <li>Aws CloudFront</li>
                <li>Aws Lambda</li>
                <li>Aws RDS</li>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
              color="primary"
              block
              to="introduction"
          > 다음 </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  methods: {
    // @click="onClickContinue"
    onClickContinue () {
      if (this.$route['path'] !== '/introduction') {
        this.$router['push']('/introduction')
      }
    }
  }
}
</script>
