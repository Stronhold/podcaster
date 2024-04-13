import { describe, expect, it } from 'vitest';
import { render } from '../../../test/test-utils';
import { Header } from '../Header';

describe('header', () => {
  it.each([true, false])('should render app name', (loading) => {
    const { getByText } = render(<Header loading={loading} />);
    expect(getByText('Podcaster')).toBeDefined();
  });
});
