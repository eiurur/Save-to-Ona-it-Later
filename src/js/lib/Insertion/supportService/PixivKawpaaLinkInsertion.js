import $ from 'jquery';
import { SUPPORT_SERVICE } from '../../../config/config';
import KawpaaLinkInsertion from '../KawpaaLinkInsertion';

export default class PixivKawpaaLinkInsertion extends KawpaaLinkInsertion {
  constructor() {
    super(SUPPORT_SERVICE.PIXIV_HOSTNAME);
    this.selector = '.bookmark-container';
    this.html = `<a href="#" class="_bookmark-toggle-button add-bookmark kawpaa-save-link">Save to Kawpaa</a>`;
  }

  getUrl() {
    return new Promise(resolve => {
      const srcUrl = $('.original-image').data('src');
      return resolve(srcUrl);
    });
  }
}