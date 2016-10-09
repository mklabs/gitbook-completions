# gitbook-completions

Tabtab plugin to specify completion results for
[gitbook-cli](https://github.com/gitbookIO/gitbook-cli)

## Install

    npm install gitbook-completions -g

On install, the package will add a line to source a SHELL specific config file,
into either `~/.bashrc`, `~/.zshrc` or `~/.config/fish/config.fish`.

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


For ZSH, you'll additionnaly can find command / flags description:

    $ gitbook <tab>
    --debug    -d         -- enable verbose error
    --gitbook             -- specify GitBook version to use
    --help     -h         -- output usage information
    --version  -V         -- Display running versions of gitbook and gitbook-cli
    -v                    -- specify Gitbook version to use
    alias                 -- Set an alias named <version> point to <folder>
    build                 -- build a book
    current               -- Display currently activated version
    fetch                 -- Download and install a version
    help                  -- List commands for GitBook
    init                  -- setup and create files for chapters
    install               -- install all plugin dependencies
    ls                    -- List versions installed locally
    ls-remote             -- List remote versions available for install
    mobi       epub  pdf  -- build a book into an ebook file
    parse                 -- parse and print debug information about a book
    serve                 -- serve the book as a website for testing
    uninstall             -- Uninstall a version
    update                -- Update to the latest version of GitBook
