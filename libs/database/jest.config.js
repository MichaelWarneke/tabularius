module.exports = {
  name: 'database',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/database',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
