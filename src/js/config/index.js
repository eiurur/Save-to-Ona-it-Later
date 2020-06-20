const API = {
  REGISTER: '/api/posts',
};

const CHROME_RUNTIME_ID = 'dghanpofbgihidnoofloojkpbkgjkfgg';

const ENDPOINT = {
  ENV: 'https://127.0.0.1:9021',
  PROD: 'https://kawpaa.eiurur.xyz',
};

const IS_PRODUCTION = false;

const DEFAULT_IMAGE_URL =
  'https://68.media.tumblr.com/9086462174c34becaf8b3e59de8f5800/tumblr_nzek2kWNNJ1ukgdjoo2_1280.jpg';

const ICONS = {
  BLUE_16:
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wYYBzM05cEJigAABBtJREFUOBEBEATv+wEAAAAAAAAAAAAAAAAbescA5YY5ABt6xwQAAABOAAAAKAAAAAAAAADYAAAAseWGOf0bescA5YY5AAAAAAAAAAAAAQAAAAAAAAAAG3rHAAAAAAIAAACeAAAAXwAAALYAAADRAAAAAAAAAC8AAABKAAAAoAAAAGMAAAD+5YY5AAAAAAAEAAAAABt6xwAAAAAXAAAA4wAAAITlhjkBAAAAAAAAAAAAAAAAAAAAAAAAAAAbesd/AAAA+AAAABwbesfq5YY5AAEbescAAAAAAgAAAPgAAABE5YY5wgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAbesc/AAAAuwAAAAgAAAD+AAAAAAAbesegG3rHfgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAbesd/G3rHnwAAAAABG3rHBAAAAPvlhjkBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAbesf/AAAABAIAAABOAAAAtgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALcAAABOAgAAACgAAADRAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0QAAACgCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAADYAAAALwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC8AAADYAgAAALIAAABKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASQAAALIAAAAAABt6x58besd+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABt6x4AbeseeAAAAAAEbescAAAAAAgAAAPgAAABE5YY5wgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAbesc/AAAAuwAAAAcAAAD/AuWGOQAAAAD+AAAAHQAAALwbesd+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAG3rHgAAAALsAAAAcAAAA/+WGOQABAAAAAAAAAAAbescAAAAAAgAAAJ0AAABgAAAAtgAAANEAAAAAAAAALwAAAEoAAACfAAAAYwAAAP/lhjkAAAAAAAIAAAAAAAAAAOWGOQAAAAD+5YY5YQAAAAQAAACdAAAA9AAAAPQAAACdAAAABOWGOWIAAAD/5YY5AAAAAAAAAAAA+yVtBA+LUxoAAAAASUVORK5CYII=',
  GRAY_16:
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wYYByssdLYJhQAABBtJREFUOBEBEATv+wEAAAAAAAAAAAAAAACenp4AYmJiAJ6engQAAABOAAAAKAAAAAAAAADYAAAAsWJiYv2enp4AYmJiAAAAAAAAAAAAAQAAAAAAAAAAnp6eAAAAAAIAAACeAAAAXwAAALYAAADRAAAAAAAAAC8AAABKAAAAoAAAAGMAAAD+YmJiAAAAAAABAAAAAJ6engAAAAAXAAAA4wAAAIRiYmKCAAAAAAAAAAAAAAAAAAAAAAAAAACenp5/AAAAewAAABwAAADqYmJiAAGenp4AAAAAAgAAAPgAAABEYmJiwgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACenp4/AAAAuwAAAAgAAAD+AAAAAACenp6gnp6efgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACenp5/np6enwAAAAABnp6eBAAAAPtiYmIBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACenp7/AAAABAIAAABOAAAAtgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALcAAABOAgAAACgAAADRAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0QAAACgCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAADYAAAALwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC8AAADYAgAAALIAAABKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASQAAALIAAAAAAJ6enp+enp5+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJ6enoCenp6eAAAAAAGenp4AAAAAAgAAAPgAAABEYmJiwgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACenp4/AAAAuwAAAAcAAAD/AmJiYgAAAAD+AAAAHQAAALyenp5+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAnp6egAAAALsAAAAcAAAA/2JiYgABAAAAAAAAAACenp4AAAAAAgAAAJ0AAABgAAAAtgAAANEAAAAAAAAALwAAAEoAAACfAAAAYwAAAP9iYmIAAAAAAAIAAAAAAAAAAGJiYgAAAAD+YmJiYQAAAAQAAACdAAAA9AAAAPQAAACdAAAABGJiYmIAAAD/YmJiAAAAAAAAAAAA4IxvG+IdfVgAAAAASUVORK5CYII=',
  BLUE_24:
    'data:image/png;base64,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',
  GRAY_24:
    'data:image/png;base64,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',
};

const CONTENT_TYPE = {
  IMAGE: 'image',
  VIDEO: 'video',
  LINK: 'link',
  TEXT: 'text',
};

const CHROME_EXTENSION_RESOURCES = {
  css: {
    lib: `build/css/vendors/lib.css`,
  },
  js: {
    contents: 'build/js/contents.bundle.js',
    insert: 'build/js/insert.bundle.js',
    token: 'build/js/token.bundle.js',
  },
  images: {
    BLUE_19: 'build/images/blue/icon19.png',
  },
};

const MAX_UPLOADABLE_FILESIZE_MB = 3;

const SUPPORT_SERVICE_DOMAIN = {
  AMATSUKA_HOSTNAME: 'amatsuka.herokuapp.com',
  ANIME_PICTURE_HOSTNAME: 'anime-pictures.net',
  DONMAI_HOSTNAME: 'donmai.us',
  DANBOORU_HOSTNAME: 'danbooru.donmai.us',
  DEVIANTART_HOSTNAME: 'deviantart.com',
  GELBOORU_HOSTNAME: 'gelbooru.com',
  IWARA_HOSTNAME: 'iwara.tv',
  KOMIFLO_HOSTNAME: 'komiflo.com',
  KONACHAN_HOSTNAME: 'konachan.com',
  NIJIE_HOSTNAME: 'nijie.info',
  NIJIURA_HOSTNAME: '2chan.net',
  NIJIURA_DECK_HOSTNAME: 'nijiuradeck.herokuapp.com',
  NOZOMI_LA_HOSTNAME: 'nozomi.la',
  PIXIV_HOSTNAME: 'www.pixiv.net',
  SANKAKUCOMPLEX_HOSTNAME: 'chan.sankakucomplex.com',
  TUMBLR_HOSTNAME: 'www.tumblr.com',
  TWITTER_HOSTNAME: 'twitter.com',
  TWEETDECK_HOSTNAME: 'tweetdeck.twitter.com',
  YANDE_RE_HOSTNAME: 'yande.re',
};
const SUPPORT_SERVICE_URL = {
  PIXIV_URL: 'https://www.pixiv.net/artworks',
  PIXIV_NOVEL_URL: 'https://www.pixiv.net/novel',
  NIJIE_URL: 'nijie.info/view.php',
  NIJIE_MULTI_URL: 'nijie.info/view_popup.php',
};

export {
  API,
  CHROME_EXTENSION_RESOURCES,
  CHROME_RUNTIME_ID,
  CONTENT_TYPE,
  DEFAULT_IMAGE_URL,
  ENDPOINT,
  ICONS,
  IS_PRODUCTION,
  MAX_UPLOADABLE_FILESIZE_MB,
  SUPPORT_SERVICE_DOMAIN,
  SUPPORT_SERVICE_URL,
};
