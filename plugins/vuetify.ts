import {createVuetify} from 'vuetify'
import {aliases, mdi} from 'vuetify/iconsets/mdi'
import 'vuetify/dist/vuetify.min.css'
import {fa} from 'vuetify/iconsets/fa'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default defineNuxtPlugin(nuxtApp => {
    const vuetify = createVuetify({
        ssr: true,
        components,
        directives,
        icons: {
            defaultSet: 'mdi',
            aliases,
            sets: {
                mdi,
                fa
            },
        },
        //https://vuetifyjs.com/en/features/display-and-platform/#options
        display: {
            mobileBreakpoint: 'sm',
            thresholds: {
                xs: 320,
                sm: 375,
                md: 425,
                lg: 768,
                xl: 1024,
                xxl: 1440
            },
        },
    })

    nuxtApp.vueApp.use(vuetify)
})

