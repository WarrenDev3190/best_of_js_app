import React from 'react';
import { shallow } from 'enzyme';
import { RepositoryCard } from '../../../src/components/Repository';

describe('RepositoryCard', () => {
  let testRepository = {
    name: 'MakeMeDev',
    owner: {
      avatar_url: 'makemedev.png',
    },
    html_url: 'github.com/makemedev/makemedev',
    license: {
      spdx_id: 'MIT',
    },
    stargazers_count: 34000,
    updated_at: 'Monday 10AM',
  };
  let wrapper = shallow(<RepositoryCard repository={testRepository} />);
  it('displays a given repositories name', () => {
    expect(wrapper.find('.js-repository-name').text()).toBe(testRepository.name);
  });

  it('displays a given repositories number of stars', () => {
    expect(wrapper.find('.js-stargazers-count').text()).toBe(
      testRepository.stargazers_count.toString(),
    );
  });

  it('displays a given repositories license', () => {
    expect(wrapper.find('.js-license').text()).toBe(testRepository.license.spdx_id);
  });

  it('displays a given repositories url', () => {
    expect(wrapper.find('.js-html-url').prop('href')).toBe(testRepository.html_url);
  });

  it('displays a given repositories last updated date', () => {
    expect(wrapper.find('.js-updated-at').text()).toBe(testRepository.updated_at);
  });
});
