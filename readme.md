# gitbook-completions

Tabtab plugin to specify completion results for
[gitbook-cli](https://github.com/gitbookIO/gitbook-cli)

## Install

    npm install mklabs/gitbook-completions -g

On install, the package will add a line to source a SHELL specific config file,
into either `~/.basrc`, `~/.zshrc` or `~/.config/fish/config.fish`.

On uninstall, these lines will be removed.

    npm uninstall gitbook-completions -g

## Example

`<tab>` stands for hitting `TAB` on the command line

    $ gitbook <tab>
    alias      current    fetch      init       ls-remote  parse      serve      update
    build      epub       help       ls         mobi       pdf        uninstall

    $ gitbook serve <tab>
    --browser   --live      --lrport    --no-open   --open      --watch
    --format    --log       --no-live   --no-watch  --port

    $ gitbook build <tab>
    --format     --log        --no-timing  --timing

    $ gitbook build --log <tab>
    debug     disabled  error     info      warn


