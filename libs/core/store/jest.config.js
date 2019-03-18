module.exports = {
  name: 'core-store',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/core/store',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
