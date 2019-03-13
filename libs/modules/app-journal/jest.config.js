module.exports = {
  name: 'modules-app-journal',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/modules/app-journal',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
