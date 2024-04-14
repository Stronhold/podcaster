import { describe, expect, it } from 'vitest';
import { fireEvent, render } from '../../../shared/test/test-utils';
import { Main } from '../Main';
import { DataTestid } from '../../../shared/utils/dataTestId';

describe('Main', () => {
  it('should render properly', async () => {
    const { findByTestId } = render(<Main />);
    expect(await findByTestId(DataTestid.PodcastContainer)).toBeDefined();
  });

  it('should be able to filter', async () => {
    const { findByTestId, getByLabelText } = render(<Main />);
    const podcastContainer = await findByTestId(DataTestid.PodcastContainer);
    const input = getByLabelText('Filter podcasts...');
    expect(podcastContainer.childElementCount).toBe(100);
    fireEvent.change(input, { target: { value: 'million' } });
    // one real card, three empty
    expect(podcastContainer.childElementCount).toBe(4);
  });
});
