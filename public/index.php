<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;400;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossorigin="" />
  <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js" integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=" crossorigin=""></script>
  <link rel="stylesheet" href="styles.css" />
  <script src="app.js" defer></script>
</head>

<body>
  <div class="container">
    <nav class="navigation">
      <h2 class="heading">Handlowcy</h2>
      <hr>
      <ul class="list">
        <li class="listItem">
          <label for="adamKubicki">Adam Kubicki</label>
          <input type="checkbox" class="isChecked" id="adamKubicki" />
        </li>
        <li class="listItem">
          <label for="rafalKolacz">Rafał Kołacz</label>
          <input type="checkbox" class="isChecked" id="rafalKolacz" />
        </li>
        <li class="listItem">
          <label for="tomaszSkawski">Wojciech Biliński</label>
          <input type="checkbox" class="isChecked" id="wojciechBilinski" />
        </li>
      </ul>
      <div class="datePickerContainer">
        <label for="datePicker" class="dateLabel">Wybierz datę</label>
        <input type="date" id="datePicker" value="2024-01-23" />
      </div>
      <p class="messageContainer"></p>
      <form action="upload.php" method="post" enctype="multipart/form-data">
        <label for="file">Choose CSV file:</label>
        <input type="file" name="file" id="file" accept=".csv">
        <button type="submit" name="submit">Upload</button>
      </form>
      <button id="testingAPI">Show</button>
    </nav>

    <div id="map"></div>
  </div>
</body>

</html>