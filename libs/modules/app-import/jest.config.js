module.exports = {
  name: 'modules-app-import',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/modules/app-import',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
