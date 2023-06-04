<script>
    export let data;
    import pb from '../../lib/pocketbase';
    </script>
<!DOCTYPE html>
<html style="font-size: 16px;" lang="nl"><head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta charset="utf-8">
    <meta name="keywords" content="">
    <meta name="description" content="">
    <title>Nieuws</title>
    <link rel="stylesheet" href="nicepage.css" media="screen">
<link rel="stylesheet" href="Nieuwsbrief---Fit-via-Fa-Brik.css" media="screen">
    <script class="u-script" type="text/javascript" src="jquery.js" defer=""></script>
    <script class="u-script" type="text/javascript" src="nicepage.js" defer=""></script>
    <meta name="generator" content="Nicepage 5.9.3, nicepage.com">
    <link id="u-theme-google-font" rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i|Open+Sans:300,300i,400,400i,500,500i,600,600i,700,700i,800,800i">
    
    
    <script type="application/ld+json">{
		"@context": "http://schema.org",
		"@type": "Organization",
		"name": "Fa-Brik",
		"logo": "images/FA-BRIKlogoweb-12.png"
}</script>
    <meta name="theme-color" content="#478ac9">
    <meta property="og:title" content="Nieuws">
    <meta property="og:description" content="">
    <meta property="og:type" content="website">
  <meta data-intl-tel-input-cdn-path="intlTelInput/"></head>
  <body class="u-body u-xl-mode" data-lang="nl"><header class=" u-border-no-bottom u-border-no-left u-border-no-right u-border-no-top u-clearfix u-header u-section-row-container" id="sec-22d1" style=""><div class="u-section-rows">
    <div class="u-clearfix u-gradient u-section-row u-section-row-1" data-animation-name="" data-animation-duration="0" data-animation-delay="0" data-animation-direction="" id="sec-dfd6">
      <div class="u-clearfix u-sheet u-sheet-1">
        <div class="u-image u-image-circle u-image-1" alt="" data-image-width="436" data-image-height="343"></div>
        <a href="Home.html" class="u-image u-logo u-image-2" data-image-width="549" data-image-height="643" title="Home">
          <img src="images/FA-BRIKlogoweb-12.png" class="u-logo-image u-logo-image-1">
        </a>
      </div>
      
      
      
      
      
    </div>
    <div class="u-custom-color-3 u-section-row u-section-row-2" id="sec-cb72">
      <div class="u-clearfix u-sheet u-valign-bottom-xs u-sheet-2">
        <nav class="u-menu u-menu-one-level u-offcanvas u-menu-1">
          <div class="menu-collapse" style="font-size: 1.25rem; letter-spacing: 0px;">
            <a class="u-button-style u-custom-color u-custom-left-right-menu-spacing u-custom-padding-bottom u-custom-text-active-color u-custom-text-color u-custom-text-hover-color u-custom-top-bottom-menu-spacing u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base" href="#">
              <svg class="u-svg-link" viewBox="0 0 24 24"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#svg-d199"></use></svg>
              <svg class="u-svg-content" version="1.1" id="svg-d199" viewBox="0 0 16 16" x="0px" y="0px" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"><g><rect y="1" width="16" height="2"></rect><rect y="7" width="16" height="2"></rect><rect y="13" width="16" height="2"></rect>
</g></svg>
            </a>
          </div>
          <div class="u-custom-menu u-nav-container">
            <ul class="u-nav u-unstyled u-nav-1"><li class="u-nav-item"><a class="u-button-style u-nav-link u-text-active-black u-text-body-color u-text-hover-black" href="Home.html" style="padding: 10px 14px;">Home</a>
</li><li class="u-nav-item"><a class="u-button-style u-nav-link u-text-active-black u-text-body-color u-text-hover-black" href="UWV.html" style="padding: 10px 14px;">UWV</a>
</li><li class="u-nav-item"><a class="u-button-style u-nav-link u-text-active-black u-text-body-color u-text-hover-black" href="Gemeenten.html" style="padding: 10px 14px;">Gemeenten</a>
</li><li class="u-nav-item"><a class="u-button-style u-nav-link u-text-active-black u-text-body-color u-text-hover-black" href="Kandidaten.html" style="padding: 10px 14px;">Kandidaten</a>
</li><li class="u-nav-item"><a class="u-button-style u-nav-link u-text-active-black u-text-body-color u-text-hover-black" href="Werkgevers.html" style="padding: 10px 14px;">Werkgevers</a>
</li><li class="u-nav-item"><a class="u-button-style u-nav-link u-text-active-black u-text-body-color u-text-hover-black" href="Fit-via-Fa-Brik.html" style="padding: 10px 14px;">Fit via Fa-Brik</a>
</li><li class="u-nav-item"><a class="u-button-style u-nav-link u-text-active-black u-text-body-color u-text-hover-black" href="/nieuws" style="padding: 10px 14px;">Nieuws</a>
</li><li class="u-nav-item"><a class="u-button-style u-nav-link u-text-active-black u-text-body-color u-text-hover-black" href="Contact.html" style="padding: 10px 14px;">Contact</a>
</li></ul>
          </div>
          <div class="u-custom-menu u-nav-container-collapse">
            <div class="u-black u-container-style u-inner-container-layout u-opacity u-opacity-95 u-sidenav">
              <div class="u-inner-container-layout u-sidenav-overflow">
                <div class="u-menu-close"></div>
                <ul class="u-align-center u-nav u-popupmenu-items u-unstyled u-nav-2"><li class="u-nav-item"><a class="u-button-style u-nav-link" href="Home.html">Home</a>
</li><li class="u-nav-item"><a class="u-button-style u-nav-link" href="UWV.html">UWV</a>
</li><li class="u-nav-item"><a class="u-button-style u-nav-link" href="Gemeenten.html">Gemeenten</a>
</li><li class="u-nav-item"><a class="u-button-style u-nav-link" href="Kandidaten.html">Kandidaten</a>
</li><li class="u-nav-item"><a class="u-button-style u-nav-link" href="Werkgevers.html">Werkgevers</a>
</li><li class="u-nav-item"><a class="u-button-style u-nav-link" href="Fit-via-Fa-Brik.html">Fit via Fa-Brik</a>
</li><li class="u-nav-item"><a class="u-button-style u-nav-link" href="/nieuws">Nieuws</a>
</li><li class="u-nav-item"><a class="u-button-style u-nav-link" href="Contact.html">Contact</a>
</li></ul>
              </div>
            </div>
            <div class="u-black u-menu-overlay u-opacity u-opacity-70"></div>
          </div>
        </nav>
      </div>
      
      
      
      
      
    </div>
  </div></header>
    <section class="u-clearfix u-custom-color-3 u-section-1" id="sec-0a27">
      <div class="u-clearfix u-sheet u-valign-middle u-sheet-1">
        <div class="u-expanded-width u-list u-list-1">
          <div class="u-repeater u-repeater-1">
            {#each data.blogPosts as blogPost}

            <div class="u-container-style u-custom-color-2 u-list-item u-radius-23 u-repeater-item u-shape-round u-video-cover u-list-item-1">
              <div class="u-container-layout u-similar-container u-valign-top u-container-layout-3">
                <h3 class="u-text u-text-default u-text-5">{blogPost.title}</h3>
                <div class="u-border-4 u-border-custom-color-4 u-expanded-width u-line u-line-horizontal u-line-3"></div>
                <img alt="" class="u-expanded-width-lg u-expanded-width-md u-expanded-width-sm u-expanded-width-xs u-image u-image-default u-image-3" data-image-width="2000" data-image-height="1333" src={
                    pb.files.getUrl(blogPost, blogPost.image, {
                        width: 2000,
                        height: 1333,
                        fit: 'crop'
                    })
                }>
                <p class="u-text u-text-default u-text-6">{blogPost.description}</p>
                <a href="/nieuws/{blogPost.id}" class="u-border-none u-btn u-button-style u-custom-color-4 u-btn-3">verder lezen</a>
              </div>
            </div>
            {/each}
          
            
          </div>
        </div>
      </div>
    </section>
    
    
    <footer class="u-align-center u-clearfix u-footer u-grey-80 u-footer" id="sec-aebb"><div class="u-clearfix u-sheet u-sheet-1">
        <img class="u-image u-image-default u-preserve-proportions u-image-1" src="images/FA-BRIKlogowebdiap1.png" alt="" data-image-width="85" data-image-height="100">
        <p class="u-small-text u-text u-text-variant u-text-1">
          <a href="mailto:info@fa-brik.nl" class="u-active-none u-border-none u-btn u-button-style u-hover-none u-none u-text-palette-1-base u-btn-1">info@fa-brik.nl</a>
          <br>
          <br>Friesestraatweg 213d<br>9743 AD Groningen<br>© Fa-Brik 2022
        </p>
      </div></footer>
  
</body></html>