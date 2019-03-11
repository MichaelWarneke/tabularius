import { helloWorld } from './main';

describe('helloWorld', () => {
  it('should return message', () => {
    const req = {};
    const res = {
      send: s => {},
      status: (s: any) => {
        this.stausCode = s;
        return this;
      }
    };
    const spy = spyOn(res, 'send');
    helloWorld(req, res);
    expect(res.send).toBeCalledWith('Hello from Firebase via travis!');
  });
});
