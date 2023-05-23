module.exports = {
    //...
    makers: [
      {
        name: '@electron-forge/bastien-darkmode',
        config: {
          certificateFile: './cert.pfx',
          certificatePassword: process.env.CERTIFICATE_PASSWORD,
        },
      },
    ],
    //...
  }