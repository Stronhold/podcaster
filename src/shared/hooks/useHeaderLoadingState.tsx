import { useOutletContext } from 'react-router-dom';
import { Loading } from '../components/layout/Layout';

export const useHeaderLoadingState = () => {
  const {
    updateState,
  }: { updateState: (load: keyof Loading, value: boolean) => void } =
    useOutletContext();
  return { updateState };
};
