{ pkgs, ... }: {
  channel = "stable-25.05";

  packages = [
    pkgs.nodejs_latest
  ];

   idx = {
    # Extensions from https://open-vsx.org/
    extensions = [
      "Vue.volar"
      "esbenp.prettier-vscode" 
      "streetsidesoftware.code-spell-checker"
    ];

   
  };
}
