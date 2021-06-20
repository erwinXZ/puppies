import { CustomDatePipe } from './custom-date.pipe';

describe('CustomDatePipe', () => {
  const pipe = new CustomDatePipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

});
