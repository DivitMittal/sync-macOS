local overrides = require("custom.configs.overrides")

---@type NvPluginSpec[]
local plugins = {

  -- Override plugin definition options
  {
    "nvim-lua/plenary.nvim",
    enabled = true,
    cond = not vim.g.vscode,
  },

  {
    "NvChad/base46",
    enabled = true,
    cond = not vim.g.vscode,
  },

  {
    "NvChad/ui",
    enabled = true,
    cond = not vim.g.vscode,
  },

  {
    "NvChad/nvterm",
    enabled = true,
    cond = not vim.g.vscode,
  },

  {
    "NvChad/nvim-colorizer.lua",
    enabled = true,
    cond = not vim.g.vscode,
  },

  {
    "nvim-tree/nvim-web-devicons",
    enabled = true,
    cond = not vim.g.vscode,
  },

  {
    "lukas-reineke/indent-blankline.nvim",
    enabled = true,
    cond = not vim.g.vscode,
  },

  {
    "lewis6991/gitsigns.nvim",
    enabled = true,
    cond = not vim.g.vscode,
  },

  {
    "numToStr/Comment.nvim",
    enabled = true,
    cond = not vim.g.vscode,
  },

  {
    "nvim-telescope/telescope.nvim",
    enabled = true,
    cond = not vim.g.vscode,
  },

  {
    "folke/which-key.nvim",
    enabled = true,
    cond = not vim.g.vscode,
  },

  {
    "neovim/nvim-lspconfig",
    enabled = true,
    cond = not vim.g.vscode,
    dependencies = {
      -- format & linting
      {
        "jose-elias-alvarez/null-ls.nvim",
        config = function()
          require "custom.configs.null-ls"
        end,
      },
    },
    config = function()
      require "plugins.configs.lspconfig"
      require "custom.configs.lspconfig"
    end, -- Override to setup mason-lspconfig
  },

  {
    "williamboman/mason.nvim",
    enabled = true,
    cond = not vim.g.vscode,
    opts = overrides.mason,
  },

  {
    "nvim-treesitter/nvim-treesitter",
    enabled = true,
    cond = not vim.g.vscode,
    opts = overrides.treesitter,
  },

  {
    "nvim-tree/nvim-tree.lua",
    enabled = true,
    cond = not vim.g.vscode,
    opts = overrides.nvimtree,
  },

  {
    "hrsh7th/nvim-cmp",
    enabled = true,
    cond = not vim.g.vscode,
    opts = overrides.nvimcmp,
  },

  -- ----------------------------------------------------------- --
  --                   Custom Plugins
  -- ----------------------------------------------------------- --
  -- All NvChad plugins are lazy-loaded by default
  -- For a plugin to be loaded, you will need to set either `ft`, `cmd`, `keys`, `event`, or set `lazy = false`
  -- If you want a plugin to load on startup, add `lazy = false` to a plugin spec, for example

  {
    -- Automatically set indentation/tabstop space size of the current buffer
    'nmac427/guess-indent.nvim',
    enabled = true,
    cond = not vim.g.vscode,
    event = "BufEnter",
    config = function()
      require('guess-indent').setup({
        auto_cmd = false,
      })
      vim.api.nvim_create_autocmd("VimEnter", {
          group = vim.api.nvim_create_augroup("GuessIndent", { clear = true }),
          command = "autocmd FileType * :silent lua require('guess-indent').set_from_buffer(true)"
      })
    end,
  },

  {
    -- Collection of nvim plugins
    'echasnovski/mini.nvim',
    enabled = true,
    event = "BufEnter",
    config = function ()

      -- vim-easy-align like plugin
      require('mini.align').setup()

      -- vim-surround lke plugin
      require('mini.surround').setup()

      -- EasyMotion/Hop like plugin
      -- require('mini.jump2d').setup({
      --     labels = 'oienarstwqyxcpl'
      -- })

      -- vim-move like plugin
      require('mini.move').setup({
          mappings = {
            -- Move visual selection in Visual mode.
            left = '<M-Left>',
            right = '<M-Right>',
            down = '<M-Down>',
            up = '<M-Up>',
            -- Move current line in Normal mode
            line_left = '<M-Left>',
            line_right = '<M-Right>',
            line_down = '<M-Down>',
            line_up = '<M-Up>',
          },
          options = {
            -- Automatically reindent selection during linewise vertical move
            reindent_linewise = true,
          },
      })

      if( not vim.g.vscode ) then
        -- nvim starter/dashboard
        local starter = require('mini.starter')
        starter.setup({
        header = 'D!',
        footer = '',
        content_hooks = {
            starter.gen_hook.adding_bullet(),
            starter.gen_hook.indexing('all', { 'Builtin actions' }),
            starter.gen_hook.padding(3, 2),
          },
        })
      end
    end,
  },

  {
    -- vim-vinegar like plugin
    'stevearc/oil.nvim',
    enabled = true,
    cond = not vim.g.vscode,
    opts = {},
    event = "VeryLazy",
    vscode = false,
    cmd = "Oil",
    keys = {
      { "-", mode = {"n"}, "<cmd>Oil<cr>", desc = "Open parent directory" },
    },
    dependencies = { "nvim-tree/nvim-web-devicons" },
    config = function()
      require('oil').setup()
    end,
  },

  {
    -- vim-seek/vim-sneak/lightspeed.nvim/mini-jump.nvim/leap.nvim like plugin for Multi-charater searching & jumping
    "folke/flash.nvim",
    enabled = true,
    cond = not vim.g.vscode,
    event = "VeryLazy",
    opts = {},
    keys = {
      { "<CR>", mode = { "n", "x", "o" }, function() require("flash").jump() end, desc = "Flash" },
      { "S", mode = { "n", "x", "o" }, function() require("flash").treesitter() end, desc = "Flash Treesitter" },
      -- { "r", mode = "o", function() require("flash").remote() end, desc = "Remote Flash" },
      { "R", mode = { "o", "x" }, function() require("flash").treesitter_search() end, desc = "Treesitter Search" },
      -- { "<c-s>", mode = { "c" }, function() require("flash").toggle() end, desc = "Toggle Flash Search" },
    },
    config = function()
      require('flash').setup({
        labels = "tsraneiofuplwykdq",
        highlight = {
          backdrop = false,
        },
        modes = {
          char = {
            enabled = true,
            highlight = { backdrop = false,},
          },
          search = {
            enabled = false,
          }
        }
      })
    end,
  },

  {
    "smoka7/multicursors.nvim",
    enabled = true,
    cond = not vim.g.vscode,
    event = "VeryLazy",
    dependencies = {
        'smoka7/hydra.nvim',
    },
    opts = {},
    cmd = { 'MCstart', 'MCvisual', 'MCclear', 'MCpattern', 'MCvisualPattern', 'MCunderCursor' },
    keys = {
        { mode = { 'v', 'n' }, '<Leader>mc', '<cmd>MCstart<cr>', desc = 'Create a selection for selected text or word under the cursor', },
      },
  },

  {
    'mrjones2014/smart-splits.nvim',
    enabled = true,
    cond = not vim.g.vscode,
    event = "BufEnter",
    keys = {
      { "<C-Left>", '<cmd>lua require("smart-splits").move_cursor_left() <CR>', desc = "move cursor left across splits" },
      { "<C-Right>", '<cmd>lua require("smart-splits").move_cursor_right() <CR>', desc = "move cursor right across splits" },
      { "<C-Down>", '<cmd>lua require("smart-splits").move_cursor_down() <CR>', desc = "move cursor down across splits" },
      { "<C-Up>", '<cmd>lua require("smart-splits").move_cursor_up() <CR>', desc = "move cursor up across splits" },
      { "<A-Up>", '<cmd>lua require("smart-splits").resize_up() <CR>', desc = "resize pane up across splits" },
      { "<A-Down>", '<cmd>lua require("smart-splits").resize_down() <CR>', desc = "resize pane down across splits" },
      { "<A-Right>", '<cmd>lua require("smart-splits").resize_right() <CR>', desc = "resize pane right across splits" },
      { "<A-Left>", '<cmd>lua require("smart-splits").resize_left() <CR>', desc = "resize pane left across splits" },
    }
  },

  {
    'tridactyl/vim-tridactyl',
    enabled = true,
    cond = not vim.g.vscode,
    event = "VeryLazy"
  },

}

return plugins

