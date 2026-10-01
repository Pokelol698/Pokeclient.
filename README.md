# Poke Client — GitHub Build Project

This repository is prepared so GitHub Actions can compile Poke Client for Windows, Linux and macOS. You do **not** need Node, Rust, .NET or the Tauri SDK installed on your own PC to get the GitHub-built artifacts.

## Build it on GitHub

1. Create a new GitHub repository, for example `PokeClient/PokeClient`.
2. Upload **all files and folders in this ZIP** to the repository.
3. Open the repository's **Actions** tab.
4. The **Build Poke Client** workflow runs automatically after a push to `main`/`master`.
5. Open the completed workflow run and download the artifacts for Windows, Linux or macOS.

The build workflow uses the official Tauri GitHub Action and GitHub-hosted runners to produce native application bundles.

## Make a public release

Create and push a tag such as `v0.1.0`. The **Release Poke Client** workflow creates a GitHub Release and uploads the platform installers.

## Current scope

The native launcher shell and UI are included. The Minecraft backend is intentionally separated from the UI so the next implementation can add Microsoft OAuth, Minecraft 1.21.11 installation, Fabric installation, profile storage, mod downloads, Java detection, RAM settings and the real Play flow.

NoRisk Client is used only as a functional reference. This project does not copy its branding, artwork or source code.
