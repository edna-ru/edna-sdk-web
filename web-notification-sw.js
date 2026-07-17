self.addEventListener('install', function (event) {
  console.log('SW installed');
});

self.addEventListener('activate', function (event) {
  console.log('SW activated');
});
self.addEventListener('notificationclick', function (e) {
  // Android doesn't automatically close notifications on click
  e.notification.close();

  // Focus tab if open
  e.waitUntil(
    clients
      .matchAll({
        includeUncontrolled: true,
        type: 'window',
      })
      .then(function (clientList) {
        if (clientList.length) {
          clientList[0].focus();
        }
      }),
  );
});
