# install & tune code generation tool
nuget install NewPlatform.Flexberry.Designer.CommandLine -Version 0.1.0-beta08 -OutputDirectory /src/gen

Xvfb -ac :99 -screen 0 1280x1024x16 &
export DISPLAY=:99

# code generation (magic)

mono /src/gen/NewPlatform.Flexberry.Designer.CommandLine.0.1.0-beta08/tools/flexberry.exe /src/GenConfigLocal.fdg

exit
