export const FoursquareApi = function(opts) {
    opts = opts || {}

    const ll = opts.latlng;
    const apiKey = '0AZYXBRKNKQJTVI344LCDTNM31C4HS2ZGQPGPVE0RURSFKCF';
    const client = 'YXO30NBLFN3J2KWQ1DFW0YHYBEKAQHISSAWFT4F0CXQZZTDH';
    const v = '20180711';
    const URL = 'https://api.foursquare.com/v2/venues/search?ll=';


    const url = () => {
        let url = URL;
        let params = {
            ll: ll,
            client_id: client,
            client_secret: apiKey,
            v: v
        }

        let paramStr = Object.keys(params)
            .filter(k => !!params[k])
            .map(k => `${k}=${params[k]}`).join('&');

        return `${url}?${paramStr}`;
    }

    return url();
}

export default FoursquareApi
