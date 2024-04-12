import { describe, expect, it } from 'vitest';
import { render } from '../../../test/test-utils';
import { Header } from '../Header';

describe('header', () => {
  it('should render app name', () => {
    const { getByText } = render(<Header />);
    expect(getByText('Podcaster')).toBeDefined();
  });
});
