module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/kamil_dev/' : '/',
  transpileDependencies: ['vuetify'],
  pages: {
    index: {
      // entry for the page
      entry: 'src/main.js',
      // the source template
      template: 'public/index.html',
      // output as dist/index.html
      filename: 'index.html',
      // when using title option,
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      title:
        'Leading and Caring | Keluarga Mahasiswa Islam (Kamil) Pascasarjana ITB',
      // chunks to include on this page, by default includes
      // extracted common chunks and vendor chunks.
      chunks: ['chunk-vendors', 'chunk-common', 'index'],
    },
    // when using the entry-only string format,
    // template is inferred to be `public/subpage.html`
    // and falls back to `public/index.html` if not found.
    // Output filename is inferred to be `subpage.html`.
    subpage: 'src/main.js',
  },
};
