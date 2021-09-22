/* Drawer Mutations */
export const toggleDrawer = (state) => {
  state.isDrawerOpen = !state.isDrawerOpen;
};

export const showDrawer = (state) => {
  state.isDrawerOpen = true;
};

/* Home Page Landing Section Mutations */

export const changeLandingSectionText = (state) => {
  if (
    state.homePage_landingSection.activeTextBoxContent >=
    state.homePage_landingSection.textBoxContent.length - 1
  ) {
    state.homePage_landingSection.activeTextBoxContent = 0;
  } else {
    state.homePage_landingSection.activeTextBoxContent++;
  }
};

/* Home Page About Us Section Mutations */

export const displayVideo = (state) => {
  state.homePageAboutUsSection.videoDisplayed = true;
  console.log(state.homePageAboutUsSection.videoDisplayed);
};
