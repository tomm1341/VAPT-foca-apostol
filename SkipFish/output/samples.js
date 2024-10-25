var mime_samples = [
  { 'mime': 'application/javascript', 'samples': [
    { 'url': 'http://172.17.0.2:3000/common.js', 'dir': '_m0/0', 'linked': 0, 'len': 9255 },
    { 'url': 'http://172.17.0.2:3000/main.js', 'dir': '_m0/1', 'linked': 2, 'len': 400000 },
    { 'url': 'http://172.17.0.2:3000/polyfills.js', 'dir': '_m0/2', 'linked': 2, 'len': 54535 },
    { 'url': 'http://172.17.0.2:3000/runtime.js', 'dir': '_m0/3', 'linked': 2, 'len': 3297 },
    { 'url': 'http://172.17.0.2:3000/vendor.js', 'dir': '_m0/4', 'linked': 2, 'len': 400000 } ]
  },
  { 'mime': 'application/xhtml+xml', 'samples': [
    { 'url': 'http://172.17.0.2:3000/', 'dir': '_m1/0', 'linked': 2, 'len': 3748 } ]
  },
  { 'mime': 'image/x-ms-bmp', 'samples': [
    { 'url': 'http://172.17.0.2:3000/assets/public/favicon_js.ico', 'dir': '_m2/0', 'linked': 2, 'len': 15086 } ]
  },
  { 'mime': 'text/css', 'samples': [
    { 'url': 'http://172.17.0.2:3000/styles.css', 'dir': '_m3/0', 'linked': 2, 'len': 400000 } ]
  },
  { 'mime': 'text/html', 'samples': [
    { 'url': 'http://172.17.0.2:3000/api/', 'dir': '_m4/0', 'linked': 1, 'len': 3019 },
    { 'url': 'http://172.17.0.2:3000/F%C13%C00V/', 'dir': '_m4/1', 'linked': 0, 'len': 3137 },
    { 'url': 'http://172.17.0.2:3000/redirect', 'dir': '_m4/2', 'linked': 1, 'len': 3119 } ]
  },
  { 'mime': 'text/plain', 'samples': [
    { 'url': 'http://172.17.0.2:3000/redirect?to=https://blockchain.info/address/1AbKfgvw9psQ41NbLi8kufDQTezwG8DRZm', 'dir': '_m5/0', 'linked': 1, 'len': 88 } ]
  }
];

var issue_samples = [
  { 'severity': 3, 'type': 40401, 'samples': [
    { 'url': 'http://172.17.0.2:3000/polyfills.js', 'extra': 'server-side JavaScript source', 'sid': '0', 'dir': '_i0/0' },
    { 'url': 'http://172.17.0.2:3000/redirect?to=.../https://blockchain.info/address/1AbKfgvw9psQ41NbLi8kufDQTezwG8DRZm', 'extra': 'CVS RCS data', 'sid': '0', 'dir': '_i0/1' } ]
  },
  { 'severity': 3, 'type': 40302, 'samples': [
    { 'url': 'http://172.17.0.2:3000/redirect?to=https://blockchain.info/address/1AbKfgvw9psQ41NbLi8kufDQTezwG8DRZm--\x3e\x22\x3e\x27\x3e\x27\x22\x3csfi000032v671562\x3e', 'extra': 'text/plain', 'sid': '0', 'dir': '_i1/0' } ]
  },
  { 'severity': 3, 'type': 40201, 'samples': [
    { 'url': 'http://172.17.0.2:3000/', 'extra': '//cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.1.0/cookieconsent.min.css', 'sid': '0', 'dir': '_i2/0' },
    { 'url': 'http://172.17.0.2:3000/', 'extra': '//cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.1.0/cookieconsent.min.js', 'sid': '0', 'dir': '_i2/1' },
    { 'url': 'http://172.17.0.2:3000/', 'extra': '//cdnjs.cloudflare.com/ajax/libs/jquery/2.2.4/jquery.min.js', 'sid': '0', 'dir': '_i2/2' } ]
  },
  { 'severity': 2, 'type': 30701, 'samples': [
    { 'url': 'http://172.17.0.2:3000/', 'extra': 'conflicting \x27Cache-Control\x27 data', 'sid': '0', 'dir': '_i3/0' },
    { 'url': 'http://172.17.0.2:3000/1', 'extra': 'conflicting \x27Cache-Control\x27 data', 'sid': '0', 'dir': '_i3/1' },
    { 'url': 'http://172.17.0.2:3000/1?z.iconName=function', 'extra': 'conflicting \x27Cache-Control\x27 data', 'sid': '0', 'dir': '_i3/2' },
    { 'url': 'http://172.17.0.2:3000/common.js', 'extra': 'conflicting \x27Cache-Control\x27 data', 'sid': '0', 'dir': '_i3/3' },
    { 'url': 'http://172.17.0.2:3000/main.js', 'extra': 'conflicting \x27Cache-Control\x27 data', 'sid': '0', 'dir': '_i3/4' },
    { 'url': 'http://172.17.0.2:3000/polyfills.js', 'extra': 'conflicting \x27Cache-Control\x27 data', 'sid': '0', 'dir': '_i3/5' },
    { 'url': 'http://172.17.0.2:3000/redirect/.htaccess.aspx--\x3e\x22\x3e\x27\x3e\x27\x22\x3csfi000025v671562\x3e', 'extra': 'conflicting \x27Cache-Control\x27 data', 'sid': '0', 'dir': '_i3/6' },
    { 'url': 'http://172.17.0.2:3000/runtime.js', 'extra': 'conflicting \x27Cache-Control\x27 data', 'sid': '0', 'dir': '_i3/7' },
    { 'url': 'http://172.17.0.2:3000/styles.css', 'extra': 'conflicting \x27Cache-Control\x27 data', 'sid': '0', 'dir': '_i3/8' },
    { 'url': 'http://172.17.0.2:3000/vendor.js', 'extra': 'conflicting \x27Cache-Control\x27 data', 'sid': '0', 'dir': '_i3/9' },
    { 'url': 'http://172.17.0.2:3000/assets/.htaccess.aspx--\x3e\x22\x3e\x27\x3e\x27\x22\x3csfi000005v671562\x3e', 'extra': 'conflicting \x27Cache-Control\x27 data', 'sid': '0', 'dir': '_i3/10' },
    { 'url': 'http://172.17.0.2:3000/assets/public/.htaccess.aspx--\x3e\x22\x3e\x27\x3e\x27\x22\x3csfi000041v671562\x3e', 'extra': 'conflicting \x27Cache-Control\x27 data', 'sid': '0', 'dir': '_i3/11' },
    { 'url': 'http://172.17.0.2:3000/assets/public/favicon_js.ico', 'extra': 'conflicting \x27Cache-Control\x27 data', 'sid': '0', 'dir': '_i3/12' } ]
  },
  { 'severity': 2, 'type': 30501, 'samples': [
    { 'url': 'http://172.17.0.2:3000/main.js', 'extra': 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/771984076&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true', 'sid': '0', 'dir': '_i4/0' } ]
  },
  { 'severity': 1, 'type': 20301, 'samples': [
    { 'url': 'http://172.17.0.2:3000/assets/public', 'extra': '', 'sid': '0', 'dir': '_i5/0' } ]
  },
  { 'severity': 1, 'type': 20101, 'samples': [
    { 'url': 'http://172.17.0.2:3000/api/Challenges/', 'extra': 'during initial directory fetch', 'sid': '0', 'dir': '_i6/0' },
    { 'url': 'http://172.17.0.2:3000/api/Challenges/?key=nftMintChallenge', 'extra': 'during initial file fetch', 'sid': '0', 'dir': '_i6/1' } ]
  },
  { 'severity': 0, 'type': 10901, 'samples': [
    { 'url': 'http://172.17.0.2:3000/F%C13%C00V/', 'extra': '', 'sid': '0', 'dir': '_i7/0' } ]
  },
  { 'severity': 0, 'type': 10802, 'samples': [
    { 'url': 'http://172.17.0.2:3000/redirect?to=https://blockchain.info/address/1AbKfgvw9psQ41NbLi8kufDQTezwG8DRZm', 'extra': 'text/plain', 'sid': '0', 'dir': '_i8/0' } ]
  },
  { 'severity': 0, 'type': 10405, 'samples': [
    { 'url': 'http://172.17.0.2:3000/api.sfish/', 'extra': '', 'sid': '0', 'dir': '_i9/0' },
    { 'url': 'http://172.17.0.2:3000/F%C13%C00V/', 'extra': '', 'sid': '0', 'dir': '_i9/1' },
    { 'url': 'http://172.17.0.2:3000/common.js', 'extra': '', 'sid': '0', 'dir': '_i9/2' } ]
  },
  { 'severity': 0, 'type': 10403, 'samples': [
    { 'url': 'http://172.17.0.2:3000/api/', 'extra': '', 'sid': '0', 'dir': '_i10/0' },
    { 'url': 'http://172.17.0.2:3000/api.sfish/', 'extra': '', 'sid': '0', 'dir': '_i10/1' },
    { 'url': 'http://172.17.0.2:3000/redirect', 'extra': '', 'sid': '0', 'dir': '_i10/2' },
    { 'url': 'http://172.17.0.2:3000/redirect?[0][\x27to\x27]=https://blockchain.info/address/1AbKfgvw9psQ41NbLi8kufDQTezwG8DRZm', 'extra': '', 'sid': '0', 'dir': '_i10/3' } ]
  },
  { 'severity': 0, 'type': 10401, 'samples': [
    { 'url': 'http://172.17.0.2:3000/api/', 'extra': '', 'sid': '0', 'dir': '_i11/0' },
    { 'url': 'http://172.17.0.2:3000/api.sfish/', 'extra': '', 'sid': '0', 'dir': '_i11/1' },
    { 'url': 'http://172.17.0.2:3000/F%C13%C00V/', 'extra': '', 'sid': '0', 'dir': '_i11/2' },
    { 'url': 'http://172.17.0.2:3000/redirect', 'extra': '', 'sid': '0', 'dir': '_i11/3' } ]
  },
  { 'severity': 0, 'type': 10205, 'samples': [
    { 'url': 'http://172.17.0.2:3000/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i12/0' } ]
  },
  { 'severity': 0, 'type': 10204, 'samples': [
    { 'url': 'http://172.17.0.2:3000/', 'extra': 'X-Content-Type-Options', 'sid': '0', 'dir': '_i13/0' },
    { 'url': 'http://172.17.0.2:3000/', 'extra': 'X-Frame-Options', 'sid': '0', 'dir': '_i13/1' },
    { 'url': 'http://172.17.0.2:3000/', 'extra': 'X-Recruiting', 'sid': '0', 'dir': '_i13/2' },
    { 'url': 'http://172.17.0.2:3000/F%C13%C00V/', 'extra': 'X-Frame-Options', 'sid': '0', 'dir': '_i13/3' },
    { 'url': 'http://172.17.0.2:3000/F%C13%C00V/', 'extra': 'X-Recruiting', 'sid': '0', 'dir': '_i13/4' } ]
  }
];

