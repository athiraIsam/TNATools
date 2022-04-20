function AS_Button_ibbb511b889949518a0cd86cecf1c1d8(eventobject) {
    var self = this;
    this.view.flexMainTab1.homeBackground.opacity = 0;
    this.view.flexMainTab2.profileBackground.opacity = 0;
    this.view.flexMainTab3.reportBackground.opacity = 0;
    this.view.flexMainTab4.aboutBackground.opacity = 1;
    var ntf = new voltmx.mvc.Navigation("AboutPage");
    ntf.navigate();
}