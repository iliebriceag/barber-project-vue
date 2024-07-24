    // Toggle sidebar visibility on button click
    document.getElementById('toggleButton').addEventListener('click', function () {
        document.getElementById('sidebar').classList.toggle('sidebar-shown');
      });
  
      // Hide sidebar when a link is clicked on mobile devices
      document.querySelectorAll('.sidebar-link').forEach(function (link) {
        link.addEventListener('click', function () {
          if (window.innerWidth < 992) {
            document.getElementById('sidebar').classList.remove('sidebar-shown');
          }
        });
      });