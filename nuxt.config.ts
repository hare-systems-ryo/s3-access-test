// import hsUi from 'nuxt-hs-ui'
// https://nuxt.com/docs/api/configuration/nuxt-config
import twConfig from './tailwind.config';

const env = String(process.env.APP_ENV);
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    //
    ['nuxt-hs-ui', twConfig],
    ['@nuxtjs/tailwindcss', {}],
    '@pinia/nuxt',
    [
      '@kgierke/nuxt-basic-auth',
      {
        enabled: env !== 'development',
        users: (() => {
          const keyPaires: any = [];
          new Array(10).fill(null).forEach((row, index) => {
            const keyUser = `BASIC_AUTH_USER${index + 1}_NAME`;
            const keyPass = `BASIC_AUTH_USER${index + 1}_PASS`;
            if (keyUser in process.env && keyPass in process.env) {
              const user = String(process.env[keyUser]);
              const pass = String(process.env[keyPass]);
              if (user && pass) {
                keyPaires.push({
                  username: user,
                  password: pass,
                });
              }
            }
          });
          console.log('Basic認証', keyPaires);
          return keyPaires;
        })(),
      },
    ],
  ],
  devServer: {
    port: 3000, // デフォルト: 3000
    host: '0.0.0.0', // デフォルト: localhost,
  },
  css: ['@/assets/scss/main.scss'],
  compatibilityDate: '2024-07-05',
});
