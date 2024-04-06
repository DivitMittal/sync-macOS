{ pkgs, lib, inputs, ... }:

{
  environment = {
    shells = [pkgs.fish];
    darwinConfig = "$HOME/.config/nix-darwin/flake.nix";
    systemPackages = with pkgs; [];
  };

  documentation = {
    enable = true;
    doc.enable= true;
    info.enable = true;
    man.enable = true;
  };

  services.nix-daemon.enable = true;  # Auto upgrade nix package and the daemon service.

  nix = {
    package = pkgs.nix;
    settings = {
      "experimental-features" = ["nix-command" "flakes"];
      "use-xdg-base-directories" = true;
    };
  };

  programs = {
    fish.enable = true;
  };

  users.users.div = {
    home = "/Users/div";
    shell = pkgs.fish;
  };

  networking.hostName = "div-mbp";

  fonts.fontDir.enable = true;
  fonts.fonts = with pkgs; [
    (nerdfonts.override { fonts = [ "CascadiaCode" ]; })
  ];

  security.pam.enableSudoTouchIdAuth = true;

  system.defaults = {

    dock = {
      autohide = true;
      orientation = "right";
      show-process-indicators = false;
      show-recents = false;
      static-only = true;
      showhidden = true;
      tilesize = 14;
      magnification = true;
      largesize = 64;
      minimize-to-application = false;
    };

    finder = {
      AppleShowAllFiles = true;
      AppleShowAllExtensions = true;
      ShowPathbar = true;
      FXEnableExtensionChangeWarning = false;
    };

    NSGlobalDomain = {
      AppleMeasurementUnits = "Centimeters";
      AppleTemperatureUnit = "Celsius";
      AppleWindowTabbingMode = "always";
      AppleInterfaceStyle = "Dark";
      AppleInterfaceStyleSwitchesAutomatically = false;
      AppleMetricUnits = 1;
      ApplePressAndHoldEnabled = false;
      InitialKeyRepeat = 14;  # First key repeat delay, default is 15 (225 ms); 1 = 15ms
      KeyRepeat = 1;          # Subsequent key repeat delay, default is 2 (30 ms); 1 = 15ms
      AppleKeyboardUIMode = 3;
      NSTextShowsControlCharacters = true;
      NSWindowShouldDragOnGesture = true;
      "com.apple.sound.beep.feedback" = 1;
      "com.apple.sound.beep.volume" = 0.6065307;
      "com.apple.trackpad.scaling" = 1.75;
      "com.apple.mouse.tapBehavior" = 1;
      "com.apple.trackpad.enableSecondaryClick" = true;
      "com.apple.swipescrolldirection" = true;
      "com.apple.trackpad.trackpadCornerClickBehavior" = null;
    };

    LaunchServices = {
      LSQuarantine = false;
    };

    SoftwareUpdate = {
      AutomaticallyInstallMacOSUpdates = false;
    };
  };

  # Set Git commit hash for darwin-version.
  system.configurationRevision = inputs.self.rev or inputs.self.dirtyRev or null;
  # $ darwin-rebuild changelog
  system.stateVersion = 4;
  nixpkgs.hostPlatform = "x86_64-darwin";
}

