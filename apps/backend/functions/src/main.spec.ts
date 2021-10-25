import { helloWorld } from './main';

describe('helloWorld', () => {
  it('fake', () => {
    expect(1).toBe(1);
  });
  // TODO create tests
  /*
  it('should return message', () => {
    const req = {};
    const res = {
      send: (s: any) => {},
      status: (s: any) => {
        this.stausCode = s;
        return this;
      }
    };
    const spy = spyOn(res, 'send');
    helloWorld(req, res);
    expect(res.send).toBeCalledWith('Hello from Firebase via travis!');
  });
  */
});
