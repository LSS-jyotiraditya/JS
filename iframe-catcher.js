var urlParams = new URLSearchParams(window.location.search);


if (urlParams.has('iframe_url')) {
 
  var iframeUrl = urlParams.get('iframe_url');

  
  var iframe = document.createElement('iframe');
  iframe.src = iframeUrl;

  iframe.style.position = 'fixed';
  iframe.style.top = '0';
  iframe.style.left = '0';
  iframe.style.width = '100%';
  iframe.style.height = '100%';
  iframe.style.border = 'none';
  iframe.style.zIndex = '9999';

  var button = document.createElement('button');
  button.textContent = 'Close iFrame';
  button.style.position = 'fixed';
  button.style.top = '10px';
  button.style.right = '10px';
  button.style.padding = '10px';
  button.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
  button.style.color = '#fff';
  button.style.border = 'none';
  button.style.cursor = 'pointer';
  button.style.zIndex = '10000';

  
  button.addEventListener('click', function() {
    iframe.remove();
    button.remove();
  });

  document.body.appendChild(iframe);
  document.body.appendChild(button);
}
