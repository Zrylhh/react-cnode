import Loadable from 'react-loadable'
import Loading from '../common/components/Loading'

export const LoadableHome = Loadable({
  loading: Loading,
  loader: () => import('./home/index')
})
