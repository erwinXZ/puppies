import { Genre } from '../constants/enum.constants';
import { GenrePipe } from './genre.pipe';

describe('GenrePipe', () => {
  const pipe = new GenrePipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('transforms "f" to "Female"', () => {
    expect(pipe.transform(Genre.Female)).toBe(Genre.FemaleLabel);
  });

  it('transforms "m" to "Male"', () => {
    expect(pipe.transform(Genre.Male)).toBe(Genre.MaleLabel);
  });

  it('transforms null values into empty string', () => {
    expect(pipe.transform(null)).toBe('');
  });
});
