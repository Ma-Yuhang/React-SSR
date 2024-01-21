import { matchRoutes } from 'react-router-dom';
import routes from '@/router/routes';

export default function (path, store) {
  const matches = matchRoutes(routes, path)
  // console.log(matches);
  const promises = []
  for (const match of matches) {
    const loadData = match.route?.element?.type?.loadData
    if (loadData) {
      promises.push(Promise.resolve(loadData(store)))
    }
  }
  return Promise.all(promises)
}