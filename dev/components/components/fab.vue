<template>
  <div>
    <div class="layout-padding">
      <p class="caption">
        <span class="desktop-only">Click</span>
        <span class="mobile-only">Tap</span>
        on each inline FABs below.
        The one that opens on the right also has a backdrop.
      </p>

      <div class="column items-center" style="margin-top: 100px; margin-bottom: 100px;">
        <q-fab color="purple" icon="keyboard_arrow_up" direction="up">
          <q-small-fab @click="toast('mail')" icon="mail"></q-small-fab>
          <q-small-fab @click="toast('alarm')" icon="alarm"></q-small-fab>
          <q-small-fab @click="toast('alarm')" icon="alarm"></q-small-fab>
          <q-small-fab @click="toast('alarm')" icon="alarm"></q-small-fab>
          <q-small-fab @click="toast('alarm')" icon="alarm"></q-small-fab>
        </q-fab>

        <br>

        <q-fab icon="keyboard_arrow_left" direction="left">
          <q-small-fab @click="toast('mail')" icon="mail"></q-small-fab>
          <q-small-fab @click="toast('alarm')" icon="alarm"></q-small-fab>
          <q-small-fab @click="toast('alarm')" icon="alarm"></q-small-fab>
          <q-small-fab @click="toast('alarm')" icon="alarm"></q-small-fab>
          <q-small-fab @click="toast('alarm')" icon="alarm"></q-small-fab>
          <q-small-fab @click="toast('alarm')" icon="alarm"></q-small-fab>
        </q-fab>

        <br>

        <q-fab color="secondary" push icon="keyboard_arrow_right" direction="right">
          <q-small-fab color="primary" @click="toast('mail')" icon="mail"></q-small-fab>
          <q-small-fab @click="toast('alarm')" icon="alarm"></q-small-fab>
          <q-small-fab @click="toast('alarm')" icon="alarm"></q-small-fab>
          <q-small-fab @click="toast('alarm')" icon="alarm"></q-small-fab>
          <q-small-fab @click="toast('alarm')" icon="alarm"></q-small-fab>
          <q-small-fab @click="toast('alarm')" icon="alarm"></q-small-fab>
        </q-fab>

        <br>

        <q-fab color="tertiary" classNames="glossy" icon="keyboard_arrow_down" direction="down">
          <q-small-fab color="amber" @click="toast('mail')" icon="mail"></q-small-fab>
          <q-small-fab color="amber" @click="toast('alarm')" icon="alarm"></q-small-fab>
          <q-small-fab color="amber" @click="toast('alarm')" icon="alarm"></q-small-fab>
          <q-small-fab color="amber" @click="toast('alarm')" icon="alarm"></q-small-fab>
          <q-small-fab color="amber" @click="toast('alarm')" icon="alarm"></q-small-fab>
          <q-small-fab color="amber" @click="toast('alarm')" icon="alarm"></q-small-fab>
        </q-fab>
      </div>

      <p class="caption" style="margin-bottom: 100px;">
        There's also the absolute positioned one on bottom
        right of screen which maintains position on Page scroll.
        It has a click/tap event injected on itself when expanded.
        You can close it by clicking/tapping on the whitey backdrop.
      </p>

      <q-fab
        color="primary"
        active-icon="alarm"
        direction="up"
        class="fixed-bottom-right"
        style="right: 18px; bottom: 18px;"
      >
        <q-small-fab color="purple" @click="toast('mail')" icon="mail">
          <q-tooltip anchor="center left" self="center right" :offset="[20, 0]">Mail</q-tooltip>
        </q-small-fab>
        <q-small-fab color="secondary" @click="toast('alarm')" icon="alarm">
          <q-tooltip anchor="center left" self="center right" :offset="[20, 0]">Alarm</q-tooltip>
        </q-small-fab>
      </q-fab>

      <div style="height: 1000px">&nbsp;</div>
    </div>
  </div>
</template>

<script>
import { Dialog, Toast } from 'quasar'

export default {
  methods: {
    alert () {
      Dialog.create({
        title: 'FAB',
        message: 'Good job! Keep it going.'
      })
    },
    toast (icon) {
      Toast.create({
        icon,
        html: 'So you want your ' + icon + 's, huh?'
      })
    }
  }
}
</script>
