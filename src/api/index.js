import $axios from '@/utils/axios';
import {
  banner_host,
  bonus_host,
  cms_host,
  server_host,
  tbk_host
} from '@/utils/api-host';

export const getBannerList = $axios.get(`${banner_host}/banner/`);
