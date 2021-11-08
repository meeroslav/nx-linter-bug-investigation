import { render } from '@testing-library/react';

import SiteArticles from './site-articles';

describe('SiteArticles', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SiteArticles />);
    expect(baseElement).toBeTruthy();
  });
});
