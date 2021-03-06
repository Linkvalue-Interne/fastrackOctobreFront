import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
import * as emotion from 'emotion';
import { createSerializer } from 'jest-emotion';
import keyGenerator from '../KeyGenerator';


expect.addSnapshotSerializer(createSerializer(emotion));
configure({ adapter: new Adapter() });

describe('keyGenerator', () => {
  it('should random a key', () => {
    const name = 'morgan';
    expect(keyGenerator(name)).toHaveLength(29);
  });
});
