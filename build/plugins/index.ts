import vue from './vue';
import html from './html';
import iconify from './iconify';
import windicss from './windicss';
import mock from './mock';

const plugins = [vue, ...html, ...iconify, windicss, mock];

export default plugins;
