<template>
  
    <div class="footer-menu circular">
    <ul >
      <li>
      <a href="ui-apps.html"><i class="mdi mdi-animation"></i>
      <span>IPM</span>
      </a>    </li>
      <li>
        <a href="sub-pages.html" ><i class="mdi mdi-human-handsup"></i>
        <span>Community</span>
        </a>
      </li>
      <li>
        &nbsp;
      </li>
        <li>
      <a href="sub-home.html" >      <i class="mdi mdi-library"></i>
      <span>Resources</span>
      </a>    </li>
        <li>
      <a href="sub-components.html" >      <i class="mdi mdi-settings-outline"></i>
      <span>Settings</span>
      </a>    </li>
 
  </ul>
</div>

</template>


<script>
export default {
  name: "drawer",
  data: function() {
    return {
      items: [
        { icon: 'home', text: this.$t("drawer.home"), action: '/' },
        { icon: 'vibration', text: this.$t('drawer.vibration'), action: 'vibration' },
        { icon: 'camera', text: this.$t('drawer.camera'), action: 'camera' },
        { icon: 'flash_on', text: this.$t('drawer.flash'), action: 'flash' },
        { icon: 'gps_fixed', text: this.$t('drawer.localisation'), action: 'localisation' },
        { icon: 'nfc', text: this.$t('drawer.nfc'), action: 'nfc' }
      ]
    }
  }
}
</script>
