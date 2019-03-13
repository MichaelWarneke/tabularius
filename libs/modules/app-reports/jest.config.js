module.exports = {
  name: 'modules-app-reports',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/modules/app-reports',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
