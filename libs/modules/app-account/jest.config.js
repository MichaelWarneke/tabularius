module.exports = {
  name: 'modules-app-account',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/modules/app-account',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
