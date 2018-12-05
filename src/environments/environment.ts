// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  // API: 'http://localhost:3000',
  // API: 'http://172.16.3.21:3000',
  // API: 'http://172.16.3.31:3000',
  // API: 'http://192.168.4.31:3000',
  API_CASA: false,
  API_WIFI_CASA: 'http://192.168.4.31:3000',
  API_WIFI: 'http://192.168.60.64:3000', // HPN WIFI
  API: 'http://172.16.3.127:3000', // HPN LAN
  // API: 'http://192.168.0.16:3000',
  // API: 'http://192.168.4.189:3000',
  // API: 'http://192.168.1.131:3000',
  // API: 'http://192.168.1.108:3000', // Museo GFO
  // API: 'http://192.168.1.171:3000',
  PLAYER: 'vlc'
};
