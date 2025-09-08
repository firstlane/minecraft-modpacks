# Minecraft Modpacks

These modpacks use [packwiz](https://packwiz.infra.link/) to manage mods and current versions, as well as other necessary items like config files. To access these modpacks, use something like PrismLauncher. Right click your instance and choose Edit > Settings > Custom commands > Pre-launch command, and add the following: `"$INST_JAVA" -jar $INST_DIR\packwiz-installer-bootstrap.jar https://firstlane.github.io/minecraft-modpacks/<modpack-you-want-here>/pack.toml`

Also ensure that you have [packwiz-installer-bootstrap](https://github.com/packwiz/packwiz-installer-bootstrap/releases) placed at the root of your instance directory. To access this directory, right-click your instance and choose Folder. Put the packwiz-installer-bootstrap.jar file in this directory. This file will be run as a pre-launch command when you start your instance, and it will pull down the relevant modpack.
