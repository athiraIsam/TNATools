function AS_FlexContainer_b0016ef9ada8423a951b1588185704a0(eventobject) {
    var self = this;
    this.view.flexMainTab1.homeBackground.opacity = 0;
    this.view.flexMainTab2.profileBackground.opacity = 0;
    this.view.flexMainTab3.reportBackground.opacity = 1;
    this.view.flexMainTab4.aboutBackground.opacity = 0;
    var ntf = new voltmx.mvc.Navigation("ReportPage");
    ntf.navigate();
}