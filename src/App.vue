<template>
  <Sidebar>
    <router-view />
  </Sidebar>
</template>

<script>
import Sidebar from './components/Sidebar.vue';
import $ from "jquery"

export default {
  name: 'App',
  components: {
    Sidebar,
  },
  created() {
    $(document).on("scroll", function () {
      var pageTop = $(document).scrollTop()
      var pageBottom = pageTop + $(window).height()
      var tags = $(".fadein")

      for (var i = 0; i < tags.length; i++) {
        var tag = tags[i]

        if ($(tag).offset().top < pageBottom) {
          $(tag).addClass("visible")
        } else {
          $(tag).removeClass("visible")
        }
      }
    })
  }
};
</script>
