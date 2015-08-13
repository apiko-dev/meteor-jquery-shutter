Package.describe({
  name: 'jss:jquery-shutter',
  version: '0.0.2',
  summary: 'Shutter Effect Portfolio with jQuery and Canvas',
  git: 'https://github.com/JSSolutions/meteor-jquery-shutter'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use('jquery');
  api.addFiles(['jquery-shutter.js', 'jquery-shutter.css'], 'client');
});
