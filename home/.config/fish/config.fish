#!/usr/bin/env fish
#################################### Setting variables ########################################
## Fish variables
set -g fish_greeting ''
set -l brew_prefix '/usr/local'

## Environment Variables
set -gx EDITOR 'nvim'
set -gx VISUAL 'nvim'
set -gx PAGER 'less'

# Adding to PATH env var
fish_add_path $HOME/.local/bin

################################## Additional Programs ##############################################
# Homebrew paths
fish_add_path $brew_prefix/bin
fish_add_path $brew_prefix/sbin

############# Update macOS default utilities
## GNU utils
# fish_add_path $brew_prefix/opt/coreutils/libexec/gnubin #GNU coreutils (cd, env, ls, test, type, etc.)
fish_add_path $brew_prefix/opt/findutils/libexec/gnubin #GNU findutils(find, xargs, locate)
fish_add_path $brew_prefix/opt/binutils/bin #GNU binutils(ar, elfedit, sysdump, size, etc.)
fish_add_path $brew_prefix/opt/gnu-sed/libexec/gnubin #GNU sed
alias ed 'ged -v -p ":"'; fish_add_path $brew_prefix/opt/ed/bin; #GNU ed(ed & red);
fish_add_path $brew_prefix/opt/grep/libexec/gnubin #GNU grep(grep, egrep, fgrep)
fish_add_path $brew_prefix/opt/gnu-which/libexec/gnubin #GNU which
fish_add_path $brew_prefix/opt/gnu-indent/libexec/gnubin #GNU indent
fish_add_path $brew_prefix/opt/gnu-tar/libexec/gnubin #GNU tar
fish_add_path $brew_prefix/opt/gawk/libexec/gnubin #GNU awk
fish_add_path $brew_prefix/opt/make/libexec/gnubin #GNU make
fish_add_path $brew_prefix/opt/gcc/bin #GNU compiler collection
fish_add_path $brew_prefix/opt/m4/bin #GNU m4
fish_add_path $brew_prefix/opt/curl/bin #GNU curl
fish_add_path $brew_prefix/opt/bc/bin #GNU bc
# non-GNU utils
fish_add_path $brew_prefix/opt/zip/bin #Info-Zip zip

############### Languages
# Ruby
fish_add_path $brew_prefix/opt/ruby/bin
# Java
fish_add_path $brew_prefix/opt/openjdk/bin
# Postgresql
fish_add_path $brew_prefix/opt/postgresql@14/bin
# Rust
fish_add_path $HOME/.cargo/bin


if status --is-interactive
  ####################################   Config when fish is interactive ###############################################3
  ###########  Variables
  set -g fish_vi_force_cursor 1
  set -g fish_cursor_default block
  set -g fish_cursor_visual block
  set -g fish_cursor_insert line
  set -g fish_cursor_replace_one underscore
  # environment variables
  set -x LESS '--RAW-CONTROL-CHARS --mouse -C --tilde --tabs=2 -W --status-column -i'
  set -x LESSHISTFILE '-'
  set -x LESSOPEN "|$brew_prefix/bin/lesspipe.sh %s"
  set -x LESSCOLORIZER 'bat'
  set -x HOMEBREW_NO_ENV_HINTS 1
  set -x HOMEBREW_BUNDLE_FILE "$HOME/.config/brew/Brewfile"
  set -x SCREENRC $HOME/.config/screen/screenrc

  ########## Utilities
  fish_add_path $HOME/.config/emacs/bin # Doom Emacs
  # fish_add_path /System/Library/PrivateFrameworks/Apple80211.framework/Resources #Airport Utility
  fish_add_path /Applications/Floorp.app/Contents/MacOS # Floorp browser

  #################### Languages
  ## Ruby
  # rbenv
  rbenv init - fish | source

  ## Python
  # pip
  alias pip-uninstall-all 'pip freeze | cut -d "@" -f1 | xargs pip uninstall -y'
  # pyenv
  set -x PYENV_ROOT $HOME/.pyenv
  fish_add_path $PYENV_ROOT/bin
  pyenv init - | source
  pyenv virtualenv-init - | source

  ################# FZF - fuzzy finder
  # fzf
  set -x FZF_DEFAULT_OPTS "--multi --cycle --border --height 50% --bind='space:toggle' --bind='tab:down' --bind='btab:up' --no-scrollbar --marker='*' --preview-window=wrap"
  set -x FZF_DEFAULT_COMMAND 'fd --hidden'

  # PatrickF1/fzf.fish plugin
  set -gx fzf_fd_opts --hidden
  set -gx fzf_preview_dir_cmd eza --all --color=always --icons=always --classify --group-directories-first --group --hyperlink --color-scale --color-scale-mode=gradient
  set -gx fzf_diff_highlighter delta --paging=never --width=20
  set -gx fzf_preview_file_cmd bat --style=numbers
  fzf_configure_bindings --variables=\ev --processes=\ep --git_status=\es --git_log=\el --history=\er --directory=\ef

  # fifc plugin
  set -gx fifc_editor nvim
  set -gx fifc_fd_opts --hidden
  set -gx fifc_eza_opts --all

  ############################################ Aliases #################################################
  alias showpath 'echo $PATH | sed "s/ /\n/g"'
  alias showid "id | sed 's/ /\n/g'"

  # Mapping "ls" to "eza"
  set -l eza_params '--all' '--classify' '--icons=always' '--group-directories-first' '--color=always' '--color-scale' '--color-scale-mode=gradient' '--hyperlink'
  alias ls "eza $eza_params"
  alias lt "eza --tree --level=2 $eza_params"
  alias ll "eza -lbhHigUmuSa@ $eza_params | ov -H1"

  # Other similar mappings
  alias man 'batman'
  alias cat 'bat --paging=never'
  alias ff 'fastfetch --logo-type iterm --logo $HOME/Sync-macOS/assets/a-12.png --pipe false --structure Title:OS:Kernel:Uptime:Display:Terminal:CPU:CPUUsage:GPU:Memory:Swap:LocalIP --gpu-temp true --cpu-temp true --title-color-user magenta --title-color-at blue --cpu-format "{1} @ {#4;35}{8}{#}" --gpu-format "{2} @ {#4;35}{4}{#}"'

  # Directory shortcuts for macOS
  alias dt "cd $HOME/Desktop/"
  alias dl "cd $HOME/Downloads/"

  # Ultimate aliases
  alias apps-backup "env ls /Applications/ 1> $HOME/Sync-macOS/etc/ref-txts/apps_(date +%b%y).txt"
  alias gem-ultimate 'sudo gem update; sudo gem cleanup'
  alias pipx-ultimate 'pipx upgrade-all; pipx list --short 1> ~/Sync-macOS/etc/ref-txts/pipx_list.txt'
  alias brew-ultimate 'brew update; and brew upgrade; and brew autoremove; and brew cleanup -s --prune=0; and brew bundle dump --force; and rm -rf (brew --cache)'
  alias mac-ultimate 'sudo -v; brew-ultimate; apps-backup'

  # Recursively delete `.DS_Store` files for macOS
  alias cleanup-DS "sudo find . -type f -name '*.DS_Store' -ls -delete"

  # Empty the Trash on all mounted volumes and the main drive & clear system logs for macOS
  alias empty-trash 'bass "sudo rm -rfv /Volumes/*/.Trashes; sudo rm -rfv ~/.Trash; sudo rm -rfv /private/var/log/asl/*.asl; sudo rm -rfv /private/tmp/*.log"'

  # Abbreviations
  abbr --position anywhere --add nv nvim
  abbr --position anywhere --add v vim
  abbr --position anywhere --add .2 'cd ../..'
  abbr --position anywhere --add .3 'cd ../../..'
  abbr --position command --add gits 'git status'
  abbr --position command --add gitph 'git push'
  abbr --position command --add gitpl 'git pull'
  abbr --position command --add gitf 'git fetch'
  abbr --position command --add gitc 'git commit'


  ####################################### Initializations ###############################################
  # Run Fastfetch - fetch system info
  if type -q fastfetch; and test "$TERM_PROGRAM" = "WezTerm"; and test "$TERM" = "xterm-256color"
    ff
  end

  # Starship - custom shell prompt
  if type -q starship
    starship init fish | source
  end

  # Zoxide utility - smarter cd
  if type -q zoxide
    zoxide init --cmd cd fish | source
  end

  # Atuin - magical shell history
  if type -q atuin
    atuin init fish | source
  end
end

