function AS_FlexContainer_b81d0a17cd944981842003069b235e33(eventobject) {
    var self = this;
    users = [];
    this.view.flexMainTab1.homeBackground.opacity = 0;
    this.view.flexMainTab2.profileBackground.opacity = 1;
    this.view.flexMainTab3.reportBackground.opacity = 0;
    this.view.flexMainTab4.aboutBackground.opacity = 0;
    var ntf = new voltmx.mvc.Navigation("ProfilePage");
    ntf.navigate();
}