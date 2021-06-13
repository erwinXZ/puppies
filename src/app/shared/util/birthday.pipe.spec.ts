import { BirthdayPipe } from './birthday.pipe';
import * as moment from 'moment';

describe('BirthdayPipe', () => {
  const pipe = new BirthdayPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('transforms birthday into age "1 mes"', () => {
    expect(pipe.transform(moment())).toContain('1 mes');
  });

  it('transforms birthday into age more than 1 month', () => {
    expect(pipe.transform(moment().subtract(2, 'months'))).toContain('meses');
  });

  it('transforms birthday into age 1 year', () => {
    expect(pipe.transform(moment().subtract(1, 'years'))).toContain('1 año');
  });

  it('transforms birthday into age more than 1 year', () => {
    expect(pipe.transform(moment().subtract(2, 'years'))).toContain('años');
  });

  it('transforms null values to empty estring', () => {
    expect(pipe.transform(null)).toBe('');
  });
});
