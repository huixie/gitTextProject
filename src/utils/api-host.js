// const banner_host = process.env.NODE_ENV === 'production' ? '//service.adbats.com/send' : '//10.1.0.77:8080'
const banner_host = '//service.adbats.com/send';
const server_host = '//service.adbats.com:81/item';
// const bonus_host = process.env.NODE_ENV === 'production' ? '//service.adbats.com:8184/item/bonus' : '//10.1.0.215:8080/bonus'
const cms_host = 'http://cms.feiniaofei.xyz';

const cps_host = '//cps.feiniaofei.xyz';
const dev_host = '//dev.feiniaofei.xyz';

const tbk_host = process.env.NODE_ENV === 'production' ? cps_host : dev_host;

export {
  banner_host,
  cms_host,
  server_host,
  tbk_host
};
