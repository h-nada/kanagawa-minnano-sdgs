var d = window.document;

if(navigator.userAgent.indexOf('iPhone') > -1) d.write('<meta name="viewport" content="width=device-width; initial-scale=1.0">');

else if(navigator.userAgent.indexOf('iPad') > -1) d.write('<meta name = "viewport" content = "width = 1200">');

else if(navigator.userAgent.indexOf('Android') > -1) d.write('<meta name="viewport" content="width=device-width; initial-scale=1.0">');