module.exports = {
  name: 'modules-app-shell',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/modules/app-shell',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
