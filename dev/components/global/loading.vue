<template>
  <div>
    <div class="layout-padding">
      <p class="caption">
        Notify the user something is going on under the covers.
        There is also the <em>progress</em> Dialog type you can use.
      </p>
      <div class="group">
        <q-btn push color="light" class="text-dark" @click="noMessage()">
          Show
        </q-btn>
        <q-btn push color="primary" @click="withMessage()">
          Show With Message
        </q-btn>
      </div>
      <p class="caption">
        ...with a custom colors and spinner size.
      </p>
      <q-btn push color="light" class="text-dark" @click="customColorSpinner()">
        Custom Color and Size Spinner
      </q-btn>
    </div>
  </div>
</template>

<script>
import { Loading } from 'quasar'

function show (options) {
  Loading.show(options)

  setTimeout(() => {
    Loading.hide()
  }, 3000)
}

export default {
  methods: {
    noMessage () {
      show()
    },
    customColorSpinner () {
      show({
        spinnerColor: 'yellow',
        spinnerSize: 220,
        message: 'Some important process is in progress. Hang on...',
        messageColor: 'teal-3'
      })
    },
    withMessage () {
      show({message: 'Some important process is in progress. Hang on...'})
    }
  }
}
</script>
