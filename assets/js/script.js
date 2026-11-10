(function ($) {
  'use strict';

  // global variables

  var win = $(window);

  // navigation fixed top
  win.on('scroll', function () {
    if ($(window).scrollTop() > 70) {
      $('.main-nav').addClass('nav-top');
    } else {
      $('.main-nav').removeClass('nav-top');
    }
  });


  $(".toggler").click(function () {
    $(".full-nav").toggleClass("show");
  });


  // clients slider
  $('.clients-wrap').slick({
    slidesToShow: 5,
    slidesToScroll: 5,
    infinite: true,
    dots: false,
    arrows: false,
    center: true,
    autoplay: true,
    padding: 20,
    autoplaySpeed: 6000,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      }, {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }

    ]
  });


  // testimonial slider
  $('.testimonial-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 6000,
    responsive: [{
      breakpoint: 900,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 1
      }
    }]
  });


  // testimonial slider 2
  $('.testimonial-wrap').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    dots: false,
    nextArrow: '<button class="slide-arrow prev-arrow"><i class="ti-arrow-right"></i></button>',
    prevArrow: '<button class="slide-arrow next-arrow"><i class="ti-arrow-left"></i></button>',
    autoplay: true,
    autoplaySpeed: 6000
  });


  // magnific popup
  $('.portfolio-gallery').each(function () {
    $(this).find('.popup-gallery').magnificPopup({
      type: 'image',
      gallery: {
        enabled: true
      }
    });
  });

  $(document).ready(function () {
    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false
    });
    $('.has-animation').each(function (index) {
      $(this).delay($(this).data('delay')).queue(function () {
        $(this).addClass('animate-in');
      });
    });
  });



  win.on('load', function () { // makes sure the whole site is loaded

    // ----------------------- 
    // Progress Bar--------------------
    // 
    $('.progress-bar').each(function () {
      var width = $(this).data('percent');
      $(this).css({
        'transition': 'width 3s'
      });
      $(this).appear(function () {
        $(this).css('width', width + '%');
        $(this).find('.skill-number').countTo({
          from: 0,
          to: width,
          speed: 3000,
          refreshInterval: 50
        });
      });
    });
  }); //End On Load Function



  // search box
  $('#searchOpen').on('click', function () {
    $('.search-wrapper').addClass('open');
  });
  $('#searchClose').on('click', function () {
    $('.search-wrapper').removeClass('open');
  });

  // Work page: filterable grid (Shuffle, as in the original site) controlled by the category buttons.
  var workGrid = document.querySelector('.work-grid');
  if (workGrid && window.Shuffle) {
    var Shuffle = window.Shuffle;
    var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var workShuffle = new Shuffle(workGrid, {
      itemSelector: '.shuffle-item',
      buffer: 1,
      speed: reduceMotion ? 0 : 400
    });
    // Re-measure once fonts and images are ready so rows never overlap.
    var relayout = function () { workShuffle.update(); };
    $(window).on('load resize', relayout);
    if (document.fonts && document.fonts.ready) { document.fonts.ready.then(relayout); }

    // Show at most `pageSize` projects of the selected category; "Load more" adds `pageSize` more.
    var pageSize = 9;
    var limit = pageSize;
    var current = 'all';
    var $status = $('.work-status');
    var $more = $('.work-more');
    var allItems = $(workGrid).find('.shuffle-item').toArray();

    var applyWork = function () {
      var matching = allItems.filter(function (el) {
        if (current === 'all') { return true; }
        var groups = [];
        try { groups = JSON.parse(el.getAttribute('data-groups') || '[]'); } catch (e) {}
        return groups.indexOf(current) !== -1;
      });
      var shown = matching.slice(0, limit);
      workShuffle.filter(function (el) { return shown.indexOf(el) !== -1; });
      $status.find('.work-status-count').text(
        'Showing ' + (shown.length < matching.length ? shown.length + ' of ' + matching.length : matching.length) +
        ' project' + (matching.length === 1 ? '' : 's'));
      $more.prop('hidden', shown.length >= matching.length);
    };

    $('.work-filter').on('click', function () {
      var $btn = $(this);
      current = $btn.data('filter');
      limit = pageSize;
      $('.work-filter').removeClass('is-active').attr('aria-pressed', 'false');
      $btn.addClass('is-active').attr('aria-pressed', 'true');
      $status.find('.work-status-text').text(current === 'all' ? '' : $btn.data('description'));
      applyWork();
    });

    $more.on('click', function () {
      limit += pageSize;
      applyWork();
    });

    applyWork();
  }

  // meta social link

  $('.share-btn').on('click', function (e) {
    e.preventDefault();
    $('.meta-share .social-links').toggleClass('open');

  });

  if ($("#search-input").length > 0) {
    var sjs = SimpleJekyllSearch({
      searchInput: document.getElementById('search-input'),
      resultsContainer: document.getElementById('results-container'),
      json: '/search.json'
    });
  }


})(jQuery);