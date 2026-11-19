// This file is part of Moodle - https://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <https://www.gnu.org/licenses/>.

/**
 * Starts the Mooblox world client on the play and hub pages.
 *
 * @module     local_mooblox/boot
 * @copyright  2026 Oscar Nadjar <oscar.nadjar@gmail.com>
 * @license    https://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

/**
 * Loads the client ES module bundle, which reads #mooblox-config and mounts into #mooblox-root.
 *
 * @param {string} bundleurl URL of the client bundle
 */
export const init = (bundleurl) => {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = bundleurl;
    document.head.appendChild(script);
};
