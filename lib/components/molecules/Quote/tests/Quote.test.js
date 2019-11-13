import React from 'react';
import { shallow, mount } from 'enzyme';
import { QuoteVanilla } from '../index';
import { defaultQuote, noAuthorQuote, noCompanyQuote, noCompanyNoAuthorQuote } from '../Quote.mock';

describe('<Quote /> Rendering', () => {
  test('should render correctly with all fields', () => {
    const quote = shallow(<QuoteVanilla {...defaultQuote} />);
    expect(quote).toMatchSnapshot();
  });

  test('should render correctly with no author', () => {
    const quote = shallow(<QuoteVanilla {...noAuthorQuote} />);
    expect(quote).toMatchSnapshot();
  });

  test('should render correctly with no company', () => {
    const quote = shallow(<QuoteVanilla {...noCompanyQuote} />);
    expect(quote).toMatchSnapshot();
  });

  test('should render correctly with all fields', () => {
    const quote = mount(<QuoteVanilla {...defaultQuote} />);

    expect(quote.find('.quote__author').text()).toEqual('My company, Stephen Covey');
  });

  test('should render correctly with no author', () => {
    const quote = mount(<QuoteVanilla {...noAuthorQuote} />);
    expect(quote.find('.quote__author').text()).toEqual('My company');
  });

  test('should render correctly with no company', () => {
    const quote = mount(<QuoteVanilla {...noCompanyQuote} />);
    expect(quote.find('.quote__author').text()).toEqual('Stephen Covey');
  });

  test('should render correctly with no company no Author', () => {
    const quote = mount(<QuoteVanilla {...noCompanyNoAuthorQuote} />);
    expect(quote.find('.quote__author').text()).toEqual('');
  });
});