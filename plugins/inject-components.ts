import { defineNuxtPlugin } from '#app'

import { Field, Form, ErrorMessage } from 'vee-validate'

export default defineNuxtPlugin((NuxtApp) => {
  NuxtApp.vueApp.component('Field', Field)
  NuxtApp.vueApp.component('Form', Form)
  NuxtApp.vueApp.component('ErrorMessage', ErrorMessage)
})
