const {TranslocoExtractKeysWebpackPlugin} = require('@ngneat/transloco-keys-manager');

module.exports = {
  plugins: [new TranslocoExtractKeysWebpackPlugin({
    rootTranslationsPath: "apps/nx-transloco-keys-manager/src/assets/i18n",
    "add-missing-keys": true,
    scopePathMap: {
      general: "apps/nx-transloco-keys-manager/src/assets/i18n/general"
    }
  })]
};
