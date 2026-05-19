module.exports = {
  svgoConfig: {
    plugins: [
      {
        name: 'preset-default',
        params: {
          overrides: {
            removeViewBox: false,
          },
        },
      },
      'removeXMLNS',
      {
        name: 'removeAttrs',
        params: {
          attrs: '(class|className)'
        }
      }
    ]
  }
};
