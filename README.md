Please do following  to test the app -

- Clone the repo on your local m/c. branch main.
- move into the cloned directory.
- npm install
- npm start.

Please note following -

- Code compiles and shows shoping list for mobile and desktop.
- CSS is not 100% optimised as we noticed not smooth transition and table rows gets out of order if we resize.
- did not test for unit test and accessibility but can be done in next version.
- works great for iPhone-SE to iPhone 14 pro max.
- for iPad mini it doesn;t work as i limit transition for 768px and that is iPad mini;s width is. Sure we can modify it.
- for iPad Air and Max it shows table view.. I think we can make changes and make it card view but its not major issue.

Proposed enhancements -
- UI should show smooth transition when screen size is changed. We notice table rows and columns are not in sync for some resolutions.
- there are multiple vulnerabilities on npm packages. dynamic scan for packages would fail.. we need to find alternate module to make it safe.
- unit tests needs to be written and code coverage report needs to be shown. Within given time frame i was not able to write those.
- One of the biggest enhancement i propose is change the way DOM is created. The reason is, currently i am creating Desktop and Mobile view and disabling one or other depending on the screen size. Means we have duplicate elements in the dom and CSS is controlling there visibility. For demo project like this it is ok but in production project it is not a good design. Correct design should be single elements and depending on screeen size css should make user experience change. But this will be design change and needs code refactoring. The reason for this proposed change is it would have better performance on loading as DOM would be shorter.
