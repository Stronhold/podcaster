import { describe, expect, it, vi } from 'vitest';
import { fireEvent, render } from '../../../../../shared/test/test-utils';
import { PodcastFilter } from '../PodcastFilter';

describe('PodcastFilter', () => {
  it('should render properly', () => {
    const availableResults = 4;
    const label = `available podcasts ${availableResults}`;
    const { getByLabelText } = render(
      <PodcastFilter
        filterText=''
        setFilter={() => null}
        availableResults={availableResults}
      />,
    );
    expect(getByLabelText(label)).toBeDefined();
    expect(getByLabelText('Filter podcasts...')).toBeDefined();
  });

  it('Should call setFilter when user types', () => {
    const availableResults = 4;
    const setFilter = vi.fn(() => null);
    const { getByLabelText } = render(
      <PodcastFilter
        filterText=''
        setFilter={setFilter}
        availableResults={availableResults}
      />,
    );
    const input = getByLabelText('Filter podcasts...');
    fireEvent.change(input, { target: { value: 'podcast' } });
    expect(setFilter).toHaveBeenCalledOnce();
  });
});
