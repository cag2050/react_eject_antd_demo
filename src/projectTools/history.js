import createHistory from 'history/createBrowserHistory';

const history = createHistory();

// 每次刷新页面时，执行（其实，只要代码包含在 src/index.js 中(包括import)，每次刷新页面，都会执行）
console.log('每次刷新页面时，执行')
console.log(history)
console.log(history.location.pathname)

export const unlisten = history.listen((location, action) => {
  // 每次前端路由跳转时，执行
  // console.log('每次前端路由跳转时，执行')
  console.log(
    `The current URL is ${location.pathname}${location.search}${location.hash}`
  )
  console.log(`The last navigation action was ${action}`)
});

export default history;
