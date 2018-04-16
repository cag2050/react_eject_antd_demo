import createHistory from 'history/createBrowserHistory';

const history = createHistory();

// 每次刷新页面时，执行（其实，只要代码包含在 src/index.js 中(包括import)，每次刷新页面，都会执行）
// console.log('每次刷新页面时，执行')

export const unlisten = history.listen(() => {
  // 每次前端路由跳转时，执行
  // console.log('每次前端路由跳转时，执行')
});

export default history;
