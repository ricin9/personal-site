<script>
  export let imageUrl;
</script>

<html lang="en">
  <head>
    <script src="/svg-pan-zoom.min.js"></script>
  </head>

  <body>
    <div id="mainViewContainer">
      <embed class="mainView" type="image/svg+xml" src={imageUrl} />
    </div>

    <script>
      window.addEventListener("load", (event) => {
        svgPanZoom(`embed`, {
          zoomEnabled: true,
          controlIconsEnabled: true,
          fit: true,
          center: true,
          zoomScaleSensitivity: 0.8,
          minZoom: 1,
        }).zoom(2);
      });
    </script>
  </body>
</html>

<style>
  html,
  body {
    width: 100%;
    height: 100%;
  }

  #mainViewContainer {
    width: 95%;
    height: 95%;
    border: 1px solid black;
    margin: 10px;
    padding: 3px;
    overflow: hidden;
  }

  .mainView {
    width: 100%;
    height: 100%;
    min-height: 100%;
    display: inline;
  }
</style>
