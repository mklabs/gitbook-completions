#!/usr/bin/env node

var fs = require('fs');
var path = require('path');
var versions = require('../lib/versions');
var config = require('gitbook-cli/lib/config');

var tabtab = require('tabtab')({
  name: 'gitbook',
  cache: false
});

tabtab.on('gitbook', function (data, done) {
  if (data.prev !== 'gitbook') return;

  return done(null, [
    'ls:List versions installed locally',
    'current:Display currently activated version',
    'ls-remote:List remote versions available for install',
    'fetch:Download and install a version',
    'alias:Set an alias named <version> point to <folder>',
    'uninstall:Uninstall a version',
    'update:Update to the latest version of GitBook',
    'help:List commands for GitBook',
    'build:build a book',
    'serve:serve the book as a website for testing',
    'install:install all plugin dependencies',
    'parse:parse and print debug information about a book',
    'init:setup and create files for chapters',
    'pdf:build a book into an ebook file',
    'epub:build a book into an ebook file',
    'mobi:build a book into an ebook file',
    '-h', '--help',
    '-v', '--gitbook',
    '-d', '--debug',
    '-V', '--version'
  ]);
});

tabtab.on('build', function (data, done) {
  if (data.prev !== 'build') return;
  return done(null, ['--log', '--format', '--timing', '--no-timing']);
});

tabtab.on('serve', function (data, done) {
  if (data.prev !== 'serve') return;
  return done(null, [
    '--port',
    '--lrport',
    '--watch',
    '--no-watch',
    '--live',
    '--no-live',
    '--open',
    '--no-open',
    '--browser',
    '--log',
    '--format'
  ]);
});

tabtab.on('fetch', function (data, done) {
  if (data.prev !== 'fetch') return;

  versions().then(function (result) {
    return done(null, result);
  });
});

tabtab.on('install', function (data, done) {
  if (data.prev !== 'install') return;
  return done(null, [
    '--log'
  ]);
});

tabtab.on('uninstall', function (data, done) {
  if (data.prev !== 'uninstall') return;

  fs.readdir(path.join(config.ROOT, 'versions'), function (err, files) {
    if (err) return done(err);
    return done(null, files);
  });
});

tabtab.on('parse', function (data, done) {
  if (data.prev !== 'parse') return;
  return done(null, [
    '--log'
  ]);
});

tabtab.on('init', function (data, done) {
  if (data.prev !== 'init') return;
  return done(null, [
    '--log'
  ]);
});

tabtab.on('pdf', function (data, done) {
  if (data.prev !== 'pdf') return;
  return done(null, [
    '--log'
  ]);
});

tabtab.on('mobi', function (data, done) {
  if (data.prev !== 'mobi') return;
  return done(null, [
    '--log'
  ]);
});

tabtab.on('epub', function (data, done) {
  if (data.prev !== 'epub') return;
  return done(null, [
    '--log'
  ]);
});

tabtab.on('mobi', function (data, done) {
  if (data.prev !== 'mobi') return;
  return done(null, [
    '--log'
  ]);
});

// Options

tabtab.on('--log', function (data, done) {
  if (data.prev !== '--log') return;
  return done(null, [
    'debug',
    'info',
    'warn',
    'error',
    'disabled'
  ]);
});

tabtab.on('--format', function (data, done) {
  if (data.prev !== '--format') return;
  return done(null, [
    'website',
    'json',
    'ebook'
  ]);
});

tabtab.start();
