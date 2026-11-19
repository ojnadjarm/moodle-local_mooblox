# Mooblox (local_mooblox)

Mooblox turns a Moodle course into a low-poly 3D island that students aged 8-12 walk around in the
browser. Each course section is an island district and each activity a place on it; opening one shows
the activity, and completion, restrictions and grades come from Moodle itself. A hub links every
course the student can play, and optional rewards (XP, levels, items, trophies) follow completions,
grades and badges.

Moodle is the only backend: the world runs on the Moodle site, in the student's own session, through
the plugin's ajax web services. No external service, account or token is needed.

## Requirements

- Moodle 5.0 or later.
- A modern browser with WebGL 2 and ES modules (current Chrome, Edge, Firefox or Safari).
- A PC keyboard and mouse, or a touch screen (on-screen joystick and buttons).

## Install

1. Unzip the package into `local/mooblox` (Moodle 5.1+: `public/local/mooblox`) or install the zip
   from *Site administration > Plugins > Install plugins*.
2. Visit *Site administration > Notifications* to finish the install.

## Setup

- *Site administration > Plugins > Local plugins > Mooblox*:
  - **Enable Mooblox**: the site switch for the world and the hub.
  - **Rewards**: XP, levels, items and trophies site-wide.
  - **Rewards on in new courses**: the default for courses whose teacher has not chosen yet.
- Every course gets a **Mooblox** tab beside *Course*; it opens the course world
  (`/local/mooblox/play.php?id=<courseid>`). The **Mooblox** item in the primary navigation opens
  the hub (`/local/mooblox/index.php`).
- Capability `local/mooblox:play` (student, teacher, editing teacher, manager) decides who can play
  a course; remove it from a role or course to hide the world there.
- Teachers with `local/mooblox:managerewards` choose the rewards of their course in
  *Course > More > Mooblox rewards*.
- A scheduled task (`\local_mooblox\task\reconcile`, nightly) keeps rewards in step with completions.

## Client source and build

`client/dist/` holds the built world client (`mooblox.js`, its web worker and assets). Its source is
the TypeScript project in the `client/` folder of the public repository
<https://github.com/ojnadjarm/mooblox> (`client/src`, with `package.json` and `package-lock.json`).
To rebuild it, with Node.js 22 or later:

    git clone https://github.com/ojnadjarm/mooblox.git
    cd mooblox/client
    npm ci
    npm run build

The build writes `moodle/local/mooblox/client/dist/`. Bundled libraries and asset packs are listed in
`thirdpartylibs.xml`; every asset with its pack, author and licence is in
`client/dist/assets/LICENSES.csv`. The page start-up script is the AMD module `amd/src/boot.js`.

## Licence

GNU GPL v3 or later, see [LICENSE](LICENSE).
Copyright 2026 Oscar Nadjar.
