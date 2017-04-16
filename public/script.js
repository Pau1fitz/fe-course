document.addEventListener('DOMContentLoaded', function() {
  var $menu = document.getElementById('sidebar');
  var $editor = document.getElementById('editor');

  console.log($editor)

  // var $menuItems = document.querySelectorAll('.menu a');

  // Array.from($menuItems).forEach(function($el) {
  //   $el.addEventListener('click', function(event) {
  //     event.preventDefault();
  //     var target = $el.dataset.target;
  //     var $target = document.getElementById(target);
  //     window.scrollTo(0, $target.offsetTop);
  //   });
  // });

  var throttle = null;

  function fixMenu(currentScroll) {
    if (currentScroll > 80) {
     	if (!$menu.classList.contains('sidebar-is-fixed')) {
        	$menu.classList.add('sidebar-is-fixed');
      	}

    	if (!$editor.classList.contains('editor-is-fixed')) {
        	$editor.classList.add('editor-is-fixed');
      	}
    } else {
    	if ($menu.classList.contains('sidebar-is-fixed')) {
        	$menu.classList.remove('sidebar-is-fixed');
      	}
    	if ($editor.classList.contains('editor-is-fixed')) {
        	$editor.classList.remove('editor-is-fixed');
      	}
    }
  }

  window.addEventListener('scroll', function() {
    var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    clearTimeout(throttle);
    throttle = setTimeout(fixMenu(currentScroll), 100);
  });


});
