module.exports = {
  name: 'modules-app-dash',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/modules/app-dash',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
