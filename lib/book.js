var fs = require('fs');

module.exports = function book (data, done) {
  // if last is defined and returns an exising path, let the SHELL do the
  // filesystem completion
  if (data.last && fs.existsSync(data.last)) {
    return fs.readdir(data.last, function (err, files) {
      if (err) return done(err);
      return done(null, files.map(function (file) {
        return data.last + file;
      }));
    });
  }

  // otherwise, add files to the completion items in addition to options
  return fs.readdir(process.cwd(), function (err, files) {
    if (err) return done(err);
    return done(null, files.map(function (file) {
      if (fs.statSync(file).isDirectory()) return file + '/';
      return file;
    }));
  });
};
