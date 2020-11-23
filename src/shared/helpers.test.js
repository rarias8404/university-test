import {getItemNameById, getAge} from "./helpers";

const items = [
  {id: 1, name: 'item 1'},
  {id: 2, name: 'item 2'},
  {id: 3, name: 'item 3'},
]

describe('tests for helper methods', () => {
  describe('getItemNameById method', () => {
    describe('given an empty array method', () => {
      it('returns `Please update`', () => {
        expect(getItemNameById(1, [])).toEqual('Please update');
      });
    });
    describe('given an id that does not match', () => {
      it('returns `Please update`', () => {
        expect(getItemNameById(4, items)).toEqual('Please update');
      });
    });
    describe('given an id that matches', () => {
      it('returns `Please update`', () => {
        expect(getItemNameById(2, items)).toEqual('item 2');
      });
    });
  });
  describe('getAge method', () => {
    it('returns `15`', () => {
      expect(getAge('2005-11-23')).toEqual(15);
    });
  });
});