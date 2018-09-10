import Loadable from 'react-loadable'
import Loading from '../common/components/Loading'

export const LoadableHome = Loadable({
  loading: Loading,
  loader: () => import('./home/index')
})

export const LoadableTopic = Loadable({
  loading: Loading,
  loader: () => import('./topic/index')
})

export const LoadableUser = Loadable({
  loading: Loading,
  loader: () => import('./user')
})

export const LoadableNotFund = Loadable({
  loading: Loading,
  loader: () => import('./404')
})
