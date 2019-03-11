module.exports = {
  name: 'frontend-tabu-app',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/apps/frontend/tabu-app/',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
