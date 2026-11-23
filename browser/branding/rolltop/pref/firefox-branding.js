/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// This file contains branding-specific prefs.

pref("startup.homepage_override_url", "");
pref("startup.homepage_welcome_url", "");
pref("startup.homepage_welcome_url.additional", "");
// The time interval between checks for a new version (in seconds)
pref("app.update.interval", 86400); // 24 hours
// Give the user x seconds to react before showing the big UI. default=24 hours
pref("app.update.promptWaitTime", 86400);
// URL user can browse to manually if for some reason all update installation
// attempts fail.
pref("app.update.url.manual", "");
// A default value for the "More information about this update" link
// supplied in the "An update is available" page of the update wizard.
pref("app.update.url.details", "");

// The number of days a binary is permitted to be old
// without checking for an update.  This assumes that
// app.update.checkInstallTime is true.
pref("app.update.checkInstallTime.days", 2);

// Give the user x seconds to reboot before showing a badge on the hamburger
// button. default=immediately
pref("app.update.badgeWaitTime", 0);

// Number of usages of the web console.
// If this is less than 5, then pasting code into the web console is disabled
pref("devtools.selfxss.count", 5);

// Rolltop chrome. The tab list lives in the Rolltop sidebar, so the native tab
// strip and most toolbar furniture are off by default.
pref("rolltop.hideTabStrip", true);
pref("browser.toolbars.bookmarks.visibility", "never");
pref("extensions.unifiedExtensions.button.always_visible", false);
pref("sidebar.revamp", false);
// Open the Rolltop sidebar in windows that have no saved sidebar state.
pref("sidebar.backupState", "{\"command\":\"rolltop_rolltop-browser_local-sidebar-action\",\"panelOpen\":true,\"launcherVisible\":false,\"launcherExpanded\":false}");

// Nothing below is needed for browsing. Each group turns off something that
// reports to, or pulls promotional content from, Mozilla.

// Telemetry and the data-reporting notice. Non-official builds already compile
// telemetry upload out; these keep it off if that ever changes.
pref("datareporting.healthreport.uploadEnabled", false);
pref("datareporting.policy.dataSubmissionEnabled", false);
pref("datareporting.usage.uploadEnabled", false);
pref("datareporting.policy.dataSubmissionPolicyBypassNotification", true);
pref("datareporting.policy.firstRunURL", "");
pref("termsofuse.bypassNotification", true);
pref("toolkit.telemetry.unified", false);
pref("toolkit.telemetry.archive.enabled", false);
pref("toolkit.telemetry.server", "");
pref("toolkit.telemetry.newProfilePing.enabled", false);
pref("toolkit.telemetry.shutdownPingSender.enabled", false);
pref("toolkit.telemetry.firstShutdownPing.enabled", false);
pref("toolkit.telemetry.updatePing.enabled", false);
pref("toolkit.telemetry.bhrPing.enabled", false);
pref("browser.newtabpage.activity-stream.telemetry", false);

// Studies and remotely delivered experiments.
pref("app.shield.optoutstudies.enabled", false);
pref("app.normandy.enabled", false);
pref("app.normandy.api_url", "");
pref("nimbus.rollouts.enabled", false);

// Crash report submission.
pref("browser.tabs.crashReporting.sendReport", false);
pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);
pref("breakpad.reportURL", "");

// Sponsored and recommended content: new tab, address bar, add-ons manager.
pref("browser.newtabpage.activity-stream.showSponsored", false);
pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);
pref("browser.newtabpage.activity-stream.showSponsoredCheckboxes", false);
pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
pref("browser.newtabpage.activity-stream.showWeather", false);
pref("browser.urlbar.quicksuggest.enabled", false);
pref("browser.urlbar.suggest.quicksuggest.sponsored", false);
pref("browser.urlbar.suggest.quicksuggest.nonsponsored", false);
pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);
pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);
pref("browser.discovery.enabled", false);
pref("extensions.getAddons.showPane", false);
pref("extensions.htmlaboutaddons.recommendations.enabled", false);

// Address bar: trending searches from the search engine, and the prompt to opt
// in to Mozilla's online suggestions. Suggestions for what you type stay on.
pref("browser.urlbar.trending.featureGate", false);
pref("browser.urlbar.suggest.trending", false);
pref("browser.urlbar.suggest.realtimeOptIn", false);

// New tab: Mozilla's default tiles (remote list and partner tiles) and the
// pinned search-engine shortcuts. Shortcuts then show only sites you visit.
pref("browser.topsites.useRemoteSetting", false);
pref("browser.topsites.contile.enabled", false);
pref("browser.newtabpage.activity-stream.default.sites", "");
pref("browser.newtabpage.activity-stream.improvesearch.topSiteSearchShortcuts", false);

// Third-party AI chatbot (sidebar, context menu, selection shortcuts), AI link
// previews and Firefox's own AI tab grouping. Translations are untouched.
pref("browser.ml.chat.enabled", false);
pref("browser.ml.linkPreview.enabled", false);
pref("browser.tabs.groups.smart.enabled", false);

// Promotions for other Mozilla products: VPN, Focus, mobile, Relay, Monitor,
// and the "More from Mozilla" settings pane.
pref("browser.vpn_promo.enabled", false);
pref("browser.promo.focus.enabled", false);
pref("browser.promo.pin.enabled", false);
pref("browser.contentblocking.report.show_mobile_app", false);
pref("browser.contentblocking.report.hide_vpn_banner", true);
pref("browser.preferences.moreFromMozilla", false);
pref("signon.firefoxRelay.feature", "disabled");
pref("identity.fxaccounts.toolbar.pxiToolbarEnabled", false);

// Firefox accounts and Sync: no sign-in in the menu or in settings, and no
// requests to Mozilla's account servers.
pref("identity.fxaccounts.enabled", false);

// Firefox onboarding, tours and post-update pages.
pref("browser.aboutwelcome.enabled", false);
pref("browser.preonboarding.enabled", false);
pref("browser.uitour.enabled", false);
pref("browser.startup.homepage_override.mstone", "ignore");

// Reopen the previous session's windows and tabs on startup. Firefox's
// default (1, the home page) restores only pinned tabs, so Rolltop would come
// back with Favorites and none of its groups.
pref("browser.startup.page", 3);
