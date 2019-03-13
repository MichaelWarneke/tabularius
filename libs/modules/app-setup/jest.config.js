module.exports = {
  name: 'modules-app-setup',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/modules/app-setup',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
