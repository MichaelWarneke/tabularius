module.exports = {
  name: 'shared-web-core',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/shared/web-core',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
