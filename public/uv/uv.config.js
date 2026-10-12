self.__uv$config = {
    prefix: '/service',
    bare: '/wisp/',
    encodeUrl: function(url) {
        if (!url) return url;
        return encodeURIComponent(url.split('').map((char, i) => i % 2 ? String.fromCharCode(char.charCodeAt(0) ^ 2) : char).join(''));
    },
    decodeUrl: function(url) {
        if (!url) return url;
        return decodeURIComponent(url).split('').map((char, i) => i % 2 ? String.fromCharCode(char.charCodeAt(0) ^ 2 : char).join(''));
    },
    handler: '/uv/uv.handler.js',
    bundle: '/uv/uv.bundle.js',
    config: '/uv/uv.config.js',
    sw: '/uv/uv.sw.js'
};