// -----All NPM commends -------
'npm i';
// is used to install the dependencies specified
// in your project's package.json file.

'npm ci';
// command is used to perform a clean installation
// of project dependencies based on the package-lock.json file.

'npm help';
// this command provides you with information
// about how to use the npm CLI and its various commands.

'npm audit';
// this command is used to check your project's
// dependencies for known security vulnerabilities.

'npm update';
// this command is used to update the packages listed in your project's package.json
// file to their latest versions according to the version ranges specified.

'npm outdated';
// This  command is used to see which packages in your project are currently
// outdated compared to the version ranges specified in your package.json file.

'npm audit fix';
// This  command is used to automatically fix vulnerabilities found in your project's
// dependencies by installing updated versions of the affected packages.

'npm audit fix --force';
// This command is used to forcefully apply automatic fixes for vulnerabilities found in your
// project's dependencies, even if those fixes might introduce breaking changes or conflicts.

'npm view <packagename>';
// This  command is used to view information about a specific
// package available on the npm registry without installing it.

'npm cache clean --force';
// This command is used to forcibly clear
// the npm cache on your local machine.

'npm cache verify';
// This command is used to verify the integrity
// of the npm cache on your local machine.

'npm doctor';
// this command runs a set of checks to ensure that your npm installation
// has what it needs to manage your JavaScript packages.

'npm start -- --reset-cache';
// this command is often used in React Native projects to start the
// development server while also resetting the Metro Bundler's cache.

'npm run android --warning-mode all';
// this command is used to run an Android application in a React Native
// project while enabling all warning messages during the build process.

'npm install && cd ios && pod update && cd ..';
// 1.npm install, 2.cd ios, 3.pod update, 4. cd..

// -----All IOS commends -------

'pod --version';
// This command is used to display the installed version
//  of the CocoaPods dependency manager for iOS projects.

'pod install --repo-update';
// This command is used to install the dependencies listed in the Podfile of your
// iOS project and also update the CocoaPods repositories to ensure
// that you have the latest version of the pods.

'cd ios && xcodebuild clean && cd ..';
// 1.cd ios, 2. xcodebuild clean, 3. cd..

'xcrun simctl list devices';
// This command is used to list the available
//  iOS and watchOS simulators on your macOS machine.

'npx react-native run-ios --simulator="iPhone 14"';
// this command is used to run a React Native
// app on a specific iOS simulator.

'Which -a ruby : Which ruby';
// The which command is used to locate the executable
// file associated with a given command in the system's PATH.
// The -a flag can be used to show all occurrences of the specified
// command in the PATH, rather than just the first one.

'print $path ';
// is a command used to display the value of the PATH environment variable.

'echo $path';
// is a command that prints the value of the PATH environment variable to the terminal.

"tr ':' '\n' <<<$PATH";
// is used to replace the colon : separator in
// the PATH environment variable with newline characters \n

'ls';
// is used in Unix-like operating systems to list the contents of a directory.

'ls -a';
// is used in Unix-like operating systems to list all files and directories,
// including hidden files (those that start with a dot), in the current directory.

'open .zshrc';
// is used to open the .zshrc configuration file
// in the default text editor of your Unix-like system.

// -----All Android commends -------

'cd android && ./gradlew clean';
// 1.cd android 2. ./gradlew clean
// 2.

// -----All npx commonds ------

'npx depcheck';
// This command is used to analyze your project's dependencies and check for
//  any unused or unnecessary dependencies in a Node.js project.

'npx npm-check';
// this command  is used to interactively check for outdated,
// unused, and mismatched dependencies in a Node.js project.
