function getPlatform() {
  var platform = ["Win32", "Android", "iOS"];

  for (var i = 0; i < platform.length; i++) {
    if (navigator.platform.indexOf(platform[i]) > -1) {
        return document.write(platform[i]);
    }
  }
}
getPlatform();
