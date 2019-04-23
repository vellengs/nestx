import * as fs from 'fs';

export class Utils {
  static getKeyAndCert(
    key: string = 'ssl_private_key.pem',
    cert: string = 'ssl_certificate.crt',
  ) {
    if (fs.existsSync(key) && fs.existsSync(cert))
      return {
        key: fs.readFileSync(key),
        cert: fs.readFileSync(cert),
      };
    return {};
  }

  static strip(obj: { [k: string]: any }) {
    Object.keys(obj).forEach(key =>
      obj[key] === undefined ? delete obj[key] : '',
    );
    return Object.assign({}, obj);
  }
}
