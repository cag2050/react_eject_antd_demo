import createHistory from 'history/createBrowserHistory';

const history = createHistory();

// 每次刷新页面时，执行（其实，只要）
// console.log('每次刷新页面时，执行')

export const unlisten = history.listen(() => {
  // 每次前端路由跳转时，执行
  // console.log('每次前端路由跳转时，执行')
});

export default history;
