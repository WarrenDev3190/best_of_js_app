import React from 'react';
import { shallow } from 'enzyme';
import { RepositoryList } from '../../../src/components/Repository';

describe('RepositoryList', () => {
  it('renders a loading screen by default', () => {
    let wrapper = shallow(<RepositoryList />);
    expect(wrapper.find('js-is-fetching')).toBeDefined();
  });
  it('renders an error message when provided hasFetchError prop', () => {
    let wrapper = shallow(<RepositoryList hasFetchError />);
    expect(wrapper.find('js-has-fetch-error')).toBeDefined();
  });
  it("when isn't fetching and is without error renders list of repositories", () => {
    let wrapper = shallow(<RepositoryList isFetching={false} />);
    expect(wrapper.find('js-repositories')).toBeDefined();
  });
});
