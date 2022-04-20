function AS_Button_jc5fbb6f90d041d6bdbe9bbcba94089c(eventobject) {
    var self = this;
    this.view.flexMainTab1.homeBackground.opacity = 0;
    this.view.flexMainTab2.profileBackground.opacity = 1;
    this.view.flexMainTab3.reportBackground.opacity = 0;
    this.view.flexMainTab4.aboutBackground.opacity = 0;
    var ntf = new voltmx.mvc.Navigation("ProfilePage");
    ntf.navigate();
}